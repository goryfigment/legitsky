from django.http import JsonResponse
from ebaysdk.finding import Connection as SearchEbay
from ebaysdk.exception import ConnectionError
from credentials.credentials import *
from buytheway.decorators import data_required


@data_required(['q'], 'GET')
def search(request):
    # api = SearchEbay(debug=True, appid=ebay_s_appid, config_file=None, domain='svcs.sandbox.ebay.com')
    api = SearchEbay(debug=True, appid=ebay_p_appid, config_file=None)

    api_request = {
        'keywords': request.GET['q'],
        'affiliate': {
            'trackingId': '5338332315',
            'networkId': '9',
            'geoTargeting': True
        },
        'paginationInput': {
            'entriesPerPage': 1
        }
    }

    try:
        response = api.execute('findItemsAdvanced', api_request)
        # print response.dict()
    except ConnectionError as e:
        response = e.response

    return JsonResponse({'url': response.dict()['itemSearchURL']}, safe=False)
