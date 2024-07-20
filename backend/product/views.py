from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response


class GetProducts(APIView): 
    def get(self, request): 
        products = {'name': 'kumar', 'age': 50} 
        return Response(products)
