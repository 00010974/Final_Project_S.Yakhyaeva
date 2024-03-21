from django.shortcuts import render

# Create your views here.
from store.models import Product

def main(request):
    products = Product.objects.all()[0:6]
    
    return render(request, 'core/main.html', {
        'products': products
    })

def about(request):
    return render(request, 'core/about.html') 
