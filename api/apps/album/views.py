from rest_framework import viewsets
from apps.album.serializers import AlbumSerializer, PhotoSerializer
from apps.album.models import Album, Photo

class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    def get_queryset(self):
        user_pk = self.kwargs.get("user_pk")
        if user_pk:
            return Album.objects.filter(user=user_pk)
        return super().get_queryset()
    
    
class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    def get_queryset(self):
        album_pk = self.kwargs.get("album_pk")
        if album_pk:
            return Photo.objects.filter(album=self.kwargs['album_pk'])
        return super().get_queryset()
    