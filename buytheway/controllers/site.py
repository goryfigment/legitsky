from django.shortcuts import render
from buytheway.modules.base import get_base_url
from django.forms.models import model_to_dict
import json, time
from django.shortcuts import redirect


def error_page(request):
    data = {
        'base_url': get_base_url()
    }

    return render(request, '404.html', data)


def server_error(request):
    data = {
        'base_url': get_base_url()
    }

    return render(request, '500.html', data)


def site(request):
    return render(request, 'home.html', {'base_url': get_base_url()})


def search(request):
    return render(request, 'result.html', {'base_url': get_base_url(), 'q': request.GET['q']})


def category(request, name):
    return render(request, 'category.html', {'base_url': get_base_url(), 'title': name.title()})
