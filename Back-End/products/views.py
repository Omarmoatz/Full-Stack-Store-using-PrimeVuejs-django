from rest_framework import serializers, viewsets 


from .models import Product, Brand



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"



class ProductViewsets(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer