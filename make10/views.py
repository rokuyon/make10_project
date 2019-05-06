import json
from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from .data import get_numbers

def index(request):
    request.session['correct'] = True
    request.session['correct_count'] = 0
    request.session['numbers'] = "0000"
    return render(request, 'make10/index.html')

def game(request):

    correct = request.session['correct']
    correct_count = request.session['correct_count']

    if (correct_count == 0 and correct):
        message = ""
        numbers = get_numbers()
    else:
        if correct:
            message = "正解です"
            numbers = get_numbers()
            request.session['correct'] = False
        else:
            message = "不正解です"
            numbers = request.session['numbers']
            request.session['correct'] = False

    request.session['numbers'] = numbers
    context = {'numbers': numbers, 'message': message, 'correct_count': correct_count}
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
        request.session['correct'] = True
        request.session['correct_count'] += 1
    else:
        request.session['correct'] = False

    return HttpResponseRedirect(reverse('game'))