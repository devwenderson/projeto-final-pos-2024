from rest_framework import serializers
from apps.todo.models import Todo
from apps.user.models import User

class TodoSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.name')
    user_id = serializers.IntegerField(source='user.id', read_only=True)
    class Meta:
        model = Todo
        fields = ['id', 'title', 'user', 'user_id', 'is_complete']
        
    def create(self, validate_data):
        user_id = validate_data.pop('user')['name']
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            raise serializers.ValidationError({"user": "Usuário não encontrado."})

        todo = Todo.objects.create(user=user, **validate_data)
        return todo
    
    def update(self, instance, validate_data):
        instance.title = validate_data.get('title', instance.title)
        instance.is_complete = validate_data.get('is_complete', instance.is_complete)
        instance.save()
        return instance