import json
from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from .data import get_numbers

# Create your views here.
def index(request):
    return render(request, 'make10/index.html')

def game(request):
    numbers = get_numbers()
    context = {'numbers': numbers}
    return render(request, 'make10/game.html', context)

@csrf_exempt
def judge(request):
    formula = request.POST['formula']
    formula = formula.replace('×', '*')
    formula = formula.replace('÷', '/')



    try:
        eval(formula)
    except SyntaxError:
        message = "式に誤りがあります。"
        context = {'message', message}
        return render(request, 'make10/game.html', context)
    except ZeroDivisionError:
        message = "不正解です。"
        context = {'message', message}
        return render(request, 'make10/game.html', context)

    result = eval(formula)

    if result == 10:
        message = "正解!"
    else:
        message = "不正解です。"

    print()
    print(message)
    print()
    return HttpResponseRedirect(reverse('game'))