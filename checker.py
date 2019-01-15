from bs4 import BeautifulSoup
import requests

import os, json

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), 'static_data/items.json'))
banners = json.loads(open(file_path).read())


for key, banner in banners.iteritems():
    for item in banner['items']:
        url = item['url']

        r = requests.get(url)
        data = r.text

        soup = BeautifulSoup(data, 'html5lib')

        active_listing = soup.find_all("div", class_="cvip-item-card-details__header-text")

        if active_listing:
            print active_listing[0].get_text().strip().encode('ascii', 'ignore')
            print item
            print '\n'

print '\nDone'
