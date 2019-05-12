import json
from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from .data import get_numbers

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