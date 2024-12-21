from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('todos/', include('apps.todo.urls')),
    path('users/', include('apps.user.urls')),
]

