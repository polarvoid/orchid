from appwrite.client import Client
from appwrite.id import ID
from appwrite.input_file import InputFile
from zipfile import ZipFile
import json
import os
import random

# You can remove imports of services you don't use
from appwrite.services.account import Account
from appwrite.services.avatars import Avatars
from appwrite.services.databases import Databases
from appwrite.services.functions import Functions
from appwrite.services.health import Health
from appwrite.services.locale import Locale
from appwrite.services.storage import Storage
from appwrite.services.teams import Teams
from appwrite.services.users import Users

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

def main(req, res):
  client = Client()

  # You can remove services you don't use
  account = Account(client)
  avatars = Avatars(client)
  database = Databases(client)
  functions = Functions(client)
  storage = Storage(client)
  health = Health(client)
  locale = Locale(client)
  teams = Teams(client)
  users = Users(client)

  bucket_id = '63a697019e70119538d3'

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

    vitamin_file = storage.get_file_download(bucket_id, 'vitamin_template')
    with open("user-template.zip", "wb") as f:
      f.write(vitamin_file)

    # # result = storage.create_file(bucket_id, ID.unique(), InputFile.from_path('README.md'))
    # with open(os.path.join(temp_dir, "config.json"), "w") as f: 
    #   f.write(config)
    result = os.listdir()
    print(result)

    # return res.json(result)
  
  return res.json({
    "areDevelopersAwesome": True,
  })