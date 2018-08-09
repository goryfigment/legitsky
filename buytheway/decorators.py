import json
from django.core.exceptions import PermissionDenied


def login_required(function):
    def wrap(request, *args, **kwargs):
        if request.user.is_authenticated():
            return function(request, *args, **kwargs)
        else:
            raise PermissionDenied('User not login.')
    wrap.__doc__ = function.__doc__
    wrap.__name__ = function.__name__
    return wrap


def data_required(required_data, request_type):
    def decorator(function):
        def wrap(request, *args, **kwargs):
            if request_type == "POST":
                query_request = request.POST
            elif request_type == "GET":
                query_request = request.GET
            elif request_type == "FILES":
                query_request = request.FILES
            else:
                query_request = json.loads(request.body)
                request.BODY = query_request

            for data in required_data:
                if data not in query_request:
                    raise PermissionDenied(data + ' does not exist!')
            return function(request, *args, **kwargs)
        wrap.__doc__ = function.__doc__
        wrap.__name__ = function.__name__
        return wrap
    return decorator
