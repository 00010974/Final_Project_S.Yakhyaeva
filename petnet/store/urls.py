from django.urls import path 

from . import views
from .views import product_detail

urlpatterns = [
    path('<slug:slug>/', views.category_detail, name='category_detail'),
    path('<slug:category_slug>/<slug:slug>/', views.product_detail, name='product_detail'),
]
