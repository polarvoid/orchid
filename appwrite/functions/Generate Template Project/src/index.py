


from appwrite.client import Client
from appwrite.id import ID
from appwrite.input_file import InputFile
from zipfile import ZipFile
import json
import os
import random

# You can remove imports of services you don't use
from appwrite.services.storage import Storage

"""
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables
  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200
  If an error is thrown, a response with code 500 will be returned.
"""

# WILL APPEND THE DIFFERENT TEMPLATES AS SOON AS I GET THE CODES. THESE ARE JUST THE IDs OF THE STORED FILES IN APPWRITE
layouts = {'default': 'AppDefault'}

def main(req, res):
  
  client = Client()

  storage = Storage(client)
  
  bucket_storage_id = '63a7c89e4d1219d77c54'

  config = req.payload
  config = json.loads(config)
  layout = config['layout']
  with open("config.json", "w") as outfile:
    outfile.write(config)

  def append_zip_file(zip_folder_path, file_to_append=None, dest_path=''):
    z = ZipFile(zip_folder_path, "a")
    z.write(file_to_append, dest_path)
    z.close()


  config = req.payload

  if not req.variables.get('APPWRITE_FUNCTION_ENDPOINT') or not req.variables.get('APPWRITE_FUNCTION_API_KEY'):
    print('Environment variables are not set. Function cannot use Appwrite SDK.')
  else:
    (
    client
      .set_endpoint(req.variables.get('APPWRITE_FUNCTION_ENDPOINT', None))
      .set_project(req.variables.get('APPWRITE_FUNCTION_PROJECT_ID', None))
      .set_key(req.variables.get('APPWRITE_FUNCTION_API_KEY', None))
      .set_self_signed(True)
    )

    APP_PATH = os.getcwd()
    TEMP_SUFFIX = random.randint(0, 500000)
    print("PATH to directory", APP_PATH)

    temp_dir = os.path.join(APP_PATH, f"template-{TEMP_SUFFIX}")
    print("New temporary directory", temp_dir)

    # try:
    #   os.makedirs(temp_dir)
    # except OSError as error:
    #   print(error)
    # print(os.listdir())

    vitamin_file = storage.get_file_download(bucket_storage_id, 'vitamin_template')
    layout_file = storage.get_file_download(bucket_storage_id, layouts[layout])

    with open("user-template.zip", "wb") as f:
      f.write(vitamin_file)

    with open("App.jsx", "wb") as f:
      f.write(layout_file)

    append_zip_file('user-template.zip', 'config.json', 'vitamin-main/config.json')
    append_zip_file('user-template.zip', 'config.json', 'vitamin-main/src/App.jsx')

    result = storage.create_file(bucket_storage_id, ID.unique(), InputFile.from_path('user-template.zip'))
    
    # with open(os.path.join(temp_dir, "config.json"), "w") as f: 
    #   f.write(config)
    result = os.listdir()
    print(result)

    # return res.json(result)
  
  return res.json({
    "areDevelopersAwesome": True,
  })

main({"payload": "test"})