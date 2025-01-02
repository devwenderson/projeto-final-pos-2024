from rest_framework.routers import DefaultRouter 
from rest_framework_nested.routers import SimpleRouter, NestedSimpleRouter 
from apps.user.views import UserViewSet
from apps.album.views import AlbumViewSet

router = SimpleRouter()
router.register(r'users', UserViewSet)

# Albuns dos usuários
user_albuns_router = NestedSimpleRouter(router, r'users', lookup='user')
user_albuns_router.register(r'albuns', AlbumViewSet, basename='user-album')

urlpatterns = []
urlpatterns += router.urls + user_albuns_router.urls