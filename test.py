from bs4 import BeautifulSoup
import requests
import os, json, ast

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), 'static_data/items.json'))
banners = json.loads(open(file_path).read())

for key, banner in banners.iteritems():
    for item in banner['items']:
        current_item = item
        current_item['picture'] = [current_item['picture']]
        print current_item

print ast.literal_eval(json.dumps(banners))



# print '\nTotal Broken Links: ' + str(total)

      # {
      #   "id": 6,
      #   "name": "DOOM",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FDOOM-Xbox-One-Factory-Refurbished%2F263005217208%3Fhash%3Ditem3d3c5521b8%3Ag%3A7oMAAOSw8vNaVkTM%3Ark%3A6%3Apf%3A0%26autorefresh%3Dtrue&campid=5338332315&toolid=20008",
      #   "price": "8.85",
      #   "affiliate": "Ebay",
      #   "picture": "doom.jpg"
      # },
      # {
      #   "id": 7,
      #   "name": "Fallout 4",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FFallout-4-Xbox-One-Factory-Refurbished%2F263105312945%3Fhash%3Ditem3d424c78b1%3Ag%3A8VcAAOSwZrhaVkTj%3Ark%3A7%3Apf%3A0%26autorefresh%3Dtrue&campid=5338332315&toolid=20008",
      #   "price": "7.25",
      #   "affiliate": "Ebay",
      #   "picture": "fallout-4.jpg"
      # },
      # {
      #   "id": 8,
      #   "name": "Skate 3",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FSkate-3-Xbox-360-Factory-Refurbished%2F263145789214%3Fhash%3Ditem3d44b6171e%3Ag%3AwCQAAOSwALtaVkSy%3Ark%3A9%3Apf%3A0&campid=5338332315&toolid=20008",
      #   "price": "7.54",
      #   "affiliate": "Ebay",
      #   "picture": "skate-3.jpg"
      # },
      # {
      #   "id": 9,
      #   "name": "State of Decay 2",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FState-of-Decay-2-Xbox-One-Factory-Refurbished%2F263959659873%3Fhash%3Ditem3d7538c561%3Ag%3AkAkAAOSwlY5bq-A1%3Ark%3A10%3Apf%3A0%26autorefresh%3Dtrue&campid=5338332315&toolid=20008",
      #   "price": "12.65",
      #   "affiliate": "Ebay",
      #   "picture": "state-of-decay-2.jpg"
      # },
      # {
      #   "id": 10,
      #   "name": "Call of Duty: Infinite Warfare",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FCall-of-Duty-Infinite-Warfare-Xbox-One-Factory-Refurbished%2F263005211203%3Fhash%3Ditem3d3c550a43%3Ag%3A7tsAAOSw5KtaVkTM%3Ark%3A11%3Apf%3A0%26autorefresh%3Dtrue&campid=5338332315&toolid=20008",
      #   "price": "7.01",
      #   "affiliate": "Ebay",
      #   "picture": "cod-infinite-warfare.jpg"
      # },
      # {
      #   "id": 11,
      #   "name": "Call of Duty: Black Ops 4",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FCall-of-Duty-Black-Ops-4-Xbox-One-Factory-Refurbished%2F264020116656%3Fhash%3Ditem3d78d344b0%3Ag%3Ap3sAAOSwfplb3JTF%3Ark%3A18%3Apf%3A0&campid=5338332315&toolid=20008",
      #   "price": "32.03",
      #   "affiliate": "Ebay",
      #   "picture": "cod-black-ops-4.jpg"
      # },
      # {
      #   "id": 12,
      #   "name": "Assassin's Creed: Origins",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FAssassins-Creed-Origins-Xbox-One-Factory-Refurbished%2F263572836069%3Fhash%3Ditem3d5e2a4ee5%3Ag%3AmWIAAOSwoX5aupUV%3Ark%3A17%3Apf%3A0&campid=5338332315&toolid=20008",
      #   "price": "17.65",
      #   "affiliate": "Ebay",
      #   "picture": "assassins-creed-origins.jpg"
      # },
      # {
      #   "id": 13,
      #   "name": "Grand Theft Auto V",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FGrand-Theft-Auto-V-Xbox-One-Factory-Refurbished%2F263046364632%3Fhash%3Ditem3d3ec8fdd8%3Ag%3Atk0AAOSwEW9aVkTN%3Ark%3A20%3Apf%3A0&campid=5338332315&toolid=20008",
      #   "price": "12.20",
      #   "affiliate": "Ebay",
      #   "picture": "grand-theft-5.jpg"
      # },
      # {
      #   "id": 14,
      #   "name": "Star Wars: Battlefront",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FStar-Wars-Battlefront-Xbox-One-Factory-Refurbished%2F263005211276%3Fhash%3Ditem3d3c550a8c%3Ag%3Aox4AAOSw1GlaVkTR%3Ark%3A22%3Apf%3A0&campid=5338332315&toolid=20008",
      #   "price": "5.67",
      #   "affiliate": "Ebay",
      #   "picture": "star-war-battlefront.jpg"
      # },
      # {
      #   "id": 15,
      #   "name": "Mortal Kombat XL",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FMortal-Kombat-XL-Xbox-One-affiliate-New%2F263575879267%3Fepid%3D219520922%26hash%3Ditem3d5e58be63%3Ag%3AIKcAAOSw9vlaVkes%3Ark%3A3%3Apf%3A0&campid=5338332315&toolid=20008",
      #   "price": "19.75",
      #   "affiliate": "Ebay",
      #   "picture": "mortal-kombat-xl.jpg"
      # },
      # {
      #   "id": 16,
      #   "name": "Red Dead Redemption 2",
      #   "category": "Video Game",
      #   "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FRed-Dead-Redemption-2-Xbox-One-Factory-Refurbished%2F264040052628%3Fepid%3D5025887523%26hash%3Ditem3d7a037794%3Ag%3AKPgAAOSwE~Zb7GnG%3Ark%3A2%3Apf%3A0&campid=5338332315&toolid=20008",
      #   "price": "55.66",
      #   "affiliate": "Ebay",
      #   "picture": "red-dead-redemption-2.jpg"
      # }