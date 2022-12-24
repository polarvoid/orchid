import requests
from zipfile import ZipFile
import json
import bs4


headers = {
    "Authorization" : 'token ghp_r5***',
    "Accept": 'application/vnd.github.v3+json'
#    "Accept": '*.*',
}

OWNER = 'polarvoid'
REPO  = 'vitamin'
REF  = ''      # master/main branch 
EXT  = 'zip'

# themes = ['default', 'dark', 'light', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest',
        #   'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter']

layouts = {'default': 'App.jsx', 'compact': 'App_Compact.jsx'}

config = open('config.json', 'r')
config = json.load(config)
title = config['title']
theme = config['theme']
description = config['description']
layout = config['layout']

print("\n")

# function to append file to zip without unzipping
def append_zip_file(zip_folder_path, file_to_append, dest_path=''):
    z = ZipFile(zip_folder_path, "a")
    z.write(file_to_append, 'polarvoid-vitamin-e83a3d9/' + dest_path)
    z.close()


# soup = bs4.BeautifulSoup(open('layouts/App.jsx'))
# # print(bs4.BeautifulSoup.prettify(soup))
# for div in soup.find_all('<div data-theme={theme} className="container my3" id="main_container">'):
#     div.replace_with('<div data-theme=' + theme + 'className="container my3" id="main_container">')

# print(bs4.BeautifulSoup.prettify(soup))


#Change the theme
# with open("layouts/App.jsx", "r") as file:
#     f = file.read()
#     f=f.replace('<div data-theme={theme} className="container my3" id="main_container">', '<div data-theme="' + theme + '" className="container my3" id="main_container">')
#     f=f.replace('<h1 id="Title"></h1>', '<h1 id="Title"> ' + theme + ' </h1>')
#     f=f.replace('<div data-theme={theme} className="container my3" id="main_container">', '<div data-theme="' + theme + '" className="container my3" id="main_container">')
    
#     print(f)
#     outputf = open("layouts/App.jsx", "w")
#     outputf.write(f)
#     outputf.close()




# Get URL
url = f'https://api.github.com/repos/{OWNER}/{REPO}/{EXT}ball/{REF}'
print('url:', url)

r = requests.get(url)

# Zip stuff
if r.status_code == 200:
    print('size:', len(r.content))
    with open(f'output.{EXT}', 'wb') as fh:
        fh.write(r.content)
    print("Zip complete\n")  # display only some part
else:
    print(r.text)

append_zip_file(f'output.zip', 'layouts/' + layouts[layout], 'src/App.jsx')

# Unzip - ONLY FOR DEV PURPOSES
# with ZipFile(f'output.{EXT}', 'r') as zipObj:
#     zipObj.extractall('output')
#     zipObj.close()
#     print("Zip extract complete")
