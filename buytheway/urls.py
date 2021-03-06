from django.conf.urls import url
from django.contrib import admin
from buytheway.controllers import site
from buytheway.controllers import ebay
from buytheway.controllers import contact

handler404 = site.error_page
handler500 = site.server_error

urlpatterns = [
    url(r'^404/$', site.error_page, name='404'),
    url(r'^500/$', site.server_error, name='500'),
    url(r'^tos/$', site.tos, name='tos'),
    url(r'^privacy-policy/$', site.privacy_policy, name='privacy_policy'),
    url(r'^contact/$', site.contact, name='contact'),

    url(r'^admin/', admin.site.urls),
    url(r'^$', site.site, name='site'),
    url(r'^banner/(?P<name>[-A-Za-z]+)$', site.banner_site, name='banner'),
    url(r'^save/', site.save, name='save_view'),
    url(r'^contact-submit/', contact.contact_submit, name='contact_submit'),

    # Ebay
    url(r'^ebay/search$', ebay.search, name='site'),
    url(r'^search$', site.search, name='search_view'),
    url(r'^category/(?P<name>[_A-Za-z]+)$', site.category, name='anime'),
]
