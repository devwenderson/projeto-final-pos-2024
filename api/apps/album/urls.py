from rest_framework_nested import routers
from rest_framework.routers import DefaultRouter
from apps.album.views import AlbumViewSet, PhotoAlbumViewSet, PhotoViewSet

# Rota dos albuns
router = routers.SimpleRouter()
router.register(r'albuns', AlbumViewSet)
photos_album_router = routers.NestedSimpleRouter(router, r'albuns', lookup='album') 
photos_album_router.register(r'photos', PhotoAlbumViewSet, basename='album-photos') 

# Rota das fotos
photos_router = DefaultRouter()
photos_router.register(r'photos', PhotoViewSet)

urlpatterns = []
urlpatterns += router.urls + photos_album_router.urls + photos_router.urls

