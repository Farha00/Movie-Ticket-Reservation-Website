from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.views import response

# Create your views here.

def main(request):
    return HttpResponse("Hello")


class createRoom