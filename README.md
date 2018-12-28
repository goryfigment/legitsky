# Legitsky
[legitsky.com](https://www.legitsky.com/) 

### Table of Contents
**[Adding a Banner](#adding-a-banner)**<br>
**[Adding a Category](#adding-a-category)**<br>
**[Adding an Item](#adding-an-item)**<br>


## Adding a Banner
1. To start go to the directory [legitsky/static_data/banner.json](https://github.com/goryfigment/legitsky/blob/master/static_data/banner.json).
2. Add the following data to the array to successfully create a banner webpage:

#### Details:
```python
{
  "id": "INT type: This is a unique incremental number that the data is given.",
  "name": "STRING type: Title of the banner.",
  "url": "STRING type: Url of the banner. Spaces must be replaced by dashes and lowercase."
}
```

#### Example:
```python
{
  "id": 1,
  "name": "Nintendo Switch",
  "url": "nintendo-switch"
}
```
> The url should now exist in [https://www.legitsky.com/banner/nintendo-switch](https://www.legitsky.com/banner/nintendo-switch)

3. Add the banner picture to the following directory: [legitsky/templates/bundle/assets/banner](https://github.com/goryfigment/legitsky/tree/master/templates/bundle/assets)
4. Add the following to this directory: [legitsky/static_data/items.json](https://github.com/goryfigment/legitsky/blob/master/static_data/banner.json).

#### Example:
```python
{
  "nintendo-switch": {      # This key must be the same as the url
    "category": [],
    "items": []
}
```
> This creates an instance of the banner in the items.json file. **Make sure the key is the same as the url name

## Adding a Category
1. Create a category within the banner by adding a string to the array to the following directory: [legitsky/static_data/items.json](https://github.com/goryfigment/legitsky/blob/master/static_data/banner.json).

#### Example:
```python
{
  "nintendo-switch": {      # This key must be the same as the url
    "category": ['Console', 'Video Games'],
    "items": []
}
```
> In this example we added Console and Video Games as categories for this banner.

## Adding an Item
1. To start go to the directory [legitsky/static_data/banner.json](https://github.com/goryfigment/legitsky/blob/master/static_data/banner.json).
2. Add the following data to the array to successfully create an item:

#### Details
```python
{
  "nintendo-switch": {      # This key must be the same as the url
    "category": ARRAY type: List of all the categories within the banner,
    "items": ARRAY type: List of all the items categories of the banner,
    [
      {
        "name": STRING type: Name of the item.,
        "category": STRING type: Category the item belongs to. Must exist in the list!,
        "url": STRING type: Affiliate URL created from affiliate URL generator,
        "price": STRING type: Price of item,
        "brand": STRING type: Website the link is directing to,
        "picture": STRING type: Filename of the picture
      }
    ]
  }
}
```

#### Example
```python
{
  "nintendo-switch": {
    "category": ["Console", "Video Game", "Accessory", "FREAK ME"],
    "items": [
      {
        "name": "Nintendo Switch - 32GB",
        "category": "Console",
        "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FNintendo-Switch-32GB-Gray-Console-with-Neon-Red-Neon-Blue-Joy-Con%2F264105667290%3Fepid%3D23024812516%26hash%3Ditem3d7decaada%3Ag%3AhH0AAOSwJd1b49Uw%3Ark%3A17%3Apf%3A0%26LH_BIN%3D1&campid=5338332315&toolid=20008",
        "price": "285.00",
        "brand": "Ebay",
        "picture": "nintendo-switch-32gb.png"
      },
      {
        "name": "Pokemon: Pikachu Let's Go",
        "category": "Video Game",
        "url": "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FNintendo-Switch-32GB-Gray-Console-with-Neon-Red-Neon-Blue-Joy-Con%2F264105667290%3Fepid%3D23024812516%26hash%3Ditem3d7decaada%3Ag%3AhH0AAOSwJd1b49Uw%3Ark%3A17%3Apf%3A0%26LH_BIN%3D1&campid=5338332315&toolid=20008",
        "price": "60.00",
        "brand": "Ebay",
        "picture": "pokemon-pikachu.png"
      }
    ]
  }
}
```
> This example adds 2 items to the banner.

5. Add the item picture to the following directory: [legitsky/templates/bundle/assets/banner/nintendo-switch](https://github.com/goryfigment/legitsky/tree/master/templates/bundle/assets)
> If directory does not exist, create the directory for the banner (nintendo-switch).
