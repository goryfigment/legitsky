from ebaysdk.finding import Connection as SearchEbay
from ebaysdk.exception import ConnectionError
from credentials.credentials import *

try:
    # api = SearchEbay(debug=True, appid=ebay_s_appid, config_file=None, domain='svcs.sandbox.ebay.com')
    api = SearchEbay(debug=True, appid=ebay_p_appid, config_file=None)
    api_request = {
        'keywords': 'goku',
        'affiliate': {
            'trackingId': '5338332315',
            'networkId': '9'
        },
        "itemFilter": [
            # {"name": "Condition", "value": "Used"},
            {"name": "ListingType", "value": "AuctionWithBIN"}
        ],
        'paginationInput': {
            'entriesPerPage': 1
        }
    }

    response = api.execute('findItemsAdvanced', api_request)
    print response.dict()

except ConnectionError as e:
    print "\n\n\n", e
    print "\n\n\n", e.response.dict()
