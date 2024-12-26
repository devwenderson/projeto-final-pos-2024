from rest_framework import serializers
from apps.album.models import Album, Photo

class AlbumSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.name', read_only=True)
    class Meta:
        model = Album
        fields = ['id', 'title', 'user',]
        
class PhotoSerializer(serializers.ModelSerializer):
    album = serializers.CharField(source='album.title', read_only=True)
    class Meta:
        model = Photo
        fields = '__all__'