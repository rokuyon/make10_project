from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('game', views.game, name='game'),
    path('clear', views.clear, name='clear'),
    path('resist', views.resist, name='resist'),
    path('ranking', views.ranking, name='ranking')
]