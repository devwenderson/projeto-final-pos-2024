from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, viewsets, mixins

from apps.todo.models import Todo
from apps.todo.serializers import TodoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    
 

