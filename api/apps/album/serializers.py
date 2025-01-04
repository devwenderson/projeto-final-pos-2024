from rest_framework import serializers
from apps.album.models import Album, Photo
from apps.user.models import User

class AlbumSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.name')
    user_id = serializers.IntegerField(source='user.id', read_only=True)
    class Meta:
        model = Album
        fields = ['id', 'title', 'user', 'user_id']
        
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
    album = serializers.CharField(source='album.title')
    class Meta:
        model = Photo
        fields = '__all__'
        
    def create(self, validate_data):
        album_id = validate_data.pop('album')['title']
        try:
            album = Album.objects.get(id=album_id)
        except Album.DoesNotExist:
            raise serializer.ValidationError({'album': 'Álbum não encontrado'})
        photo = Photo.objects.create(album=album, **validate_data)
        return photo
    
    def update(self, instance, validate_data):
        instance.url = validate_data.get('url', instance.url)
        instance.title = validate_data.get('title', instance.title)
        instance.save()
        return instance