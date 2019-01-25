from django.shortcuts import render
from buytheway.modules.base import get_base_url
from django.forms.models import model_to_dict
import json, time, os
from django.shortcuts import redirect
from django.http import HttpResponse


def error_page(request):
    try:
        file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'static_data/banner.json'))
        banners = json.loads(open(file_path).read())
    except:
        data = {'success': False, 'error_id': 2, 'error_msg:': 'IO Error', 'directory': file_path}
        return HttpResponse(json.dumps(data), 'application/json')

    return render(request, '404.html', {'base_url': get_base_url(), 'banners': json.dumps(banners)})


def server_error(request):
    try:
        file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'static_data/banner.json'))
        banners = json.loads(open(file_path).read())
    except:
        data = {'success': False, 'error_id': 2, 'error_msg:': 'IO Error', 'directory': file_path}
        return HttpResponse(json.dumps(data), 'application/json')

    return render(request, '500.html', {'base_url': get_base_url(), 'banners': json.dumps(banners)})


def site(request):
    try:
        file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'static_data/banner.json'))
        banners = json.loads(open(file_path).read())
    except:
        data = {'success': False, 'error_id': 2, 'error_msg:': 'IO Error', 'directory': file_path}
        return HttpResponse(json.dumps(data), 'application/json')

    return render(request, 'home.html', {'base_url': get_base_url(), 'banners': json.dumps(banners)})


def search(request):
    return render(request, 'result.html', {'base_url': get_base_url(), 'q': request.GET['q']})


def category(request, name):
    return render(request, 'category.html', {'base_url': get_base_url(), 'title': name.title()})


def banner_site(request, name):
    try:
        file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'static_data/items.json'))
        banners = json.loads(open(file_path).read())

        file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'static_data/banner.json'))
        banner_list = json.loads(open(file_path).read())
    except:
        data = {'success': False, 'error_id': 2, 'error_msg:': 'IO Error', 'directory': file_path}
        return HttpResponse(json.dumps(data), 'application/json')

    if name in banners.keys():
        banner = json.dumps(banners[name])
    else:
        return render(request, '404.html', {'base_url': get_base_url()})

    return render(request, 'banner.html', {'base_url': get_base_url(), 'title': name.replace('-', ' ').title(), 'banner_name': name, 'banner': banner, 'banners': json.dumps(banner_list)})


def save(request):
    try:
        file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'static_data/items.json'))
        banners = json.loads(open(file_path).read())

        file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'static_data/banner.json'))
        banner_list = json.loads(open(file_path).read())
    except:
        data = {'success': False, 'error_id': 2, 'error_msg:': 'IO Error', 'directory': file_path}
        return HttpResponse(json.dumps(data), 'application/json')

    return render(request, 'save.html', {'base_url': get_base_url(), 'banner': json.dumps(banners), 'banners': json.dumps(banner_list)})
