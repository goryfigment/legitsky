from bs4 import BeautifulSoup
import requests

import os, json

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), 'static_data/items.json'))
banners = json.loads(open(file_path).read())

# {
#     "id": 2,
#     "name": "Nintendo Switch Console + 2 Game",
#     "category": "Console",
#     "picture": "Switch + 2 games.PNG",
#     "offers":
#     [
#       {
#         "seller": "Ebay",
#         "condition": "New",
#         "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FNintendo-Switch-with-Neon-Blue-and-Neon-Red-Joy-Con-2-GAMES%2F292870732415%3Fhash%3Ditem443074ba7f%3Ag%3AUgcAAOSwZnpcPfVJ%3Ark%3A1%3Apf%3A0&campid=5338332315&toolid=20008",
#         "price": "299.99",
#         "shipping": "0.00"
#       },
#       {
#         "seller": "Ebay",
#         "condition": "Used - Like New",
#         "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FNintendo-Switch-32GB-Console-with-Neon-Red-and-Neon-Blue-Joy-Con-And-2-Games%2F173741587107%3Fepid%3D23024812516%26hash%3Ditem2873ce3aa3%3Ag%3AMzQAAOSw8fRcPSS7%3Ark%3A3%3Apf%3A0%26LH_BIN%3D1&campid=5338332315&toolid=20008",
#         "price": "400.00",
#         "shipping": "25.00"
#       }
#     ]
#   }

total = 0
out_of_stock = 0
active = 0

try:
    for key, banner in banners.iteritems():
        for item in banner['items']:
            current_item = item
            for offer in item['offers']:
                url = offer['url']

                r = requests.get(url)
                data = r.text

                soup = BeautifulSoup(data, 'html5lib')

                active_listing = soup.find_all("div", class_="cvip-item-card-details__header-text")
                in_stock = soup.find_all("span", class_="msgTextAlign")

                if in_stock:
                    stock_message = in_stock[0].get_text().strip().encode('ascii', 'ignore')

                if active_listing:
                    print active_listing[0].get_text().strip().encode('ascii', 'ignore')
                    print 'Item: ' + json.dumps(item)
                    print 'Offer: ' + json.dumps(offer)
                    print '\n'
                    total += 1
                    active += 1

                if stock_message and stock_message == 'This item is out of stock.':
                    print stock_message
                    print 'Item: ' + json.dumps(item)
                    print 'Offer: ' + json.dumps(offer)
                    print '\n'
                    total += 1
                    out_of_stock += 1
except:
    print current_item


print '\nTotal Broken Links: ' + str(total)
