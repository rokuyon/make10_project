import json

from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from .data import get_numbers
from .models import Record

def index(request):
    return render(request, 'make10/index.html')

def game(request):
    numbers = get_numbers()
    context = {'numbers': numbers}
    return render(request, 'make10/game.html', context)

@csrf_exempt
def clear(request):
    clear_time = request.POST['clearTime']
    context = {'clear_time': clear_time}
    return render(request, 'make10/clear.html', context)

@csrf_exempt
def resist(request):
    record = Record()
    record.name = request.POST['user_name']
    record.time = float(request.POST['clear_time'])
    record.save()

    return render(request, 'make10/index.html')

def ranking(request):
    all_records = Record.objects.all().order_by("time")
    context = {"all_records": all_records}

    return render(request, "make10/ranking.html", context=context)