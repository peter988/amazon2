from django.db import models

# Create your models here.
class shop(models.Model):
    title = models.TextField()
    price = models.TextField()
    stock = models.IntegerField()
    image = models.TextField()