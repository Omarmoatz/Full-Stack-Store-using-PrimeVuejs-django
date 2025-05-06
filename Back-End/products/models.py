from django.db import models

class Brand(models.Model):
    name = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100, blank=True)
    brand = models.ForeignKey(Brand, related_name="product", on_delete=models.CASCADE , blank=True, null=True)
    price = models.PositiveIntegerField( blank=True, null=True)
    image = models.ImageField( upload_to="product/", blank=True, null=True)


    def __str__(self):
        return self.name
