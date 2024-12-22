from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.todo.urls')), # api/todos
    path('api/', include('apps.user.urls')), # api/users
    path('api/', include('apps.album.urls')), # api/albuns or # api/photos
]

