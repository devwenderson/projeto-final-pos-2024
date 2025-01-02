from rest_framework import serializers
from apps.album.models import Album, Photo
from apps.user.models import User

class AlbumSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.name')
    class Meta:
        model = Album
        fields = ['id', 'title', 'user']
        
    def create(self, validate_data):
        user_id = validate_data.pop('user')['name']
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            raise serializers.ValidationError({"user": "Usuário não encontrado."})

        album = Album.objects.create(user=user, **validate_data)
        return album
    
    def update(self, instance, validate_data):
        instance.title = validate_data.get('title', instance.title)
        instance.save()
        return instance
        
        
class PhotoSerializer(serializers.ModelSerializer):
    album = serializers.CharField(source='album.title', read_only=True)
    class Meta:
        model = Photo
        fields = '__all__'