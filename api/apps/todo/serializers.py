from rest_framework import serializers
from apps.todo.models import Todo

class TodoSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.name', read_only=True)
    class Meta:
        model = Todo
        fields = ['title', 'user', 'is_complete']