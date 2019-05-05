from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'make10/index.html')

def game(request):
    numbers = [1, 2, 3, 4]
    context = {'numbers': numbers}
    return render(request, 'make10/game.html', context)