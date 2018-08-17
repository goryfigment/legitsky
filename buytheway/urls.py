from django.conf.urls import url
from django.contrib import admin
from buytheway.controllers import site
from buytheway.controllers import ebay

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', site.site, name='site'),

    # Ebay
    url(r'^ebay/search$', ebay.search, name='site'),
    url(r'^search$', site.search, name='search_view'),
    url(r'^category/(?P<name>[_A-Za-z]+)$', site.category, name='anime'),

]
