from rest_framework import routers
from apps.todo.views import TodoViewSet

# Rotas
router = routers.DefaultRouter()
router.register(r'', TodoViewSet)

urlpatterns = []
urlpatterns += router.urls