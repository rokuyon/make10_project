from django.shortcuts import render

from data import get_numbers

# Create your views here.
def index(request):
    return render(request, 'make10/index.html')

def game(request):
    numbers = get_numbers()
    context = {'numbers': numbers}
    return render(request, 'make10/game.html', context)