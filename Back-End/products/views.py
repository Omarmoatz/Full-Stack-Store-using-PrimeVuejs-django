from rest_framework import serializers, viewsets 


from .models import Product, Brand

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"


class ProductRetrieveSerializer(serializers.ModelSerializer):
    brand = BrandSerializer(read_only=True)
    class Meta:
        model = Product
        fields = "__all__"

class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"




class ProductViewsets(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductRetrieveSerializer

    def get_serializer_class(self):
        if self.action in ["create", "update", "partial_update"]:
            return ProductCreateUpdateSerializer
        return super().get_serializer_class()


class BrandViewsets(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer