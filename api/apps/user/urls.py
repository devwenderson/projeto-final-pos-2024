from rest_framework import routers
from apps.user.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = []
urlpatterns += router.urls