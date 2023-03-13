from django.test import TestCase
from rest_framework import serializers
from django.contrib.auth import get_user_model
# Create your tests here.

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields= "__all__"
