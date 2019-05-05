from django.shortcuts import render

from .data import get_numbers

# Create your views here.
def index(request):
    return render(request, 'make10/index.html')

def game(request):
    numbers = get_numbers()
    context = {'numbers': numbers}
    return render(request, 'make10/game.html', context)

def judge(request):
    formula = request.POST.get('formula')
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

    context = {'message', message}
    return render(request, 'make10/game.html', context)