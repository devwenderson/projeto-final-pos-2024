from rest_framework import viewsets
from apps.album.serializers import AlbumSerializer, PhotoSerializer
from apps.album.models import Album, Photo

class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    
class PhotoAlbumViewSet(viewsets.ModelViewSet):
    serializer_class = PhotoSerializer
    def get_queryset(self):
        return Photo.objects.filter(album=self.kwargs['album_pk'])
    
class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    