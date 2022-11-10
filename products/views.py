import random

from django.shortcuts import render

# Create your views here.
from products.models import shop

arr = [1,2,3]
var = 3

def add(request):
    global var
    if request.method == 'POST':
        title = request.POST.get('title')
        price = request.POST.get('price')
        stock = request.POST.get('num1')
        image = request.POST.get('image')
        shop.objects.create(title=title,price=price,stock=stock,image=image)
        var = var + 1
        print(var)
        arr.append(var)
        print(arr)
    print(var , arr)
    return render(request,'product.html')

def seller(request):
    db = shop.objects
    rnum = []
    for i in range(7):
        h = random.choice(arr)
        rnum.append(h)
    con = {
        'title': [db.get(id=rnum[j]).title for j in range(7) ],
        'price':[db.get(id=rnum[k]).price for k in range(7)  ],
        'stock':[db.get(id=rnum[f]).stock for f in range(7) ],
        'image':[db.get(id=rnum[m]).image for m in range(7) ]
    }
    return render(request,'amazon.html',con)
