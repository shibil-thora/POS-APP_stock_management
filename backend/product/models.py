from django.db import models


class Product(models.Model): 
    name = models.CharField(max_length=1000) 
    product_code = models.CharField(max_length=50) 
    price = models.DecimalField() # there is something more to add
    stock = models.IntegerField() 
    image = models.ImageField() 


#sale model   
#purchase model 

