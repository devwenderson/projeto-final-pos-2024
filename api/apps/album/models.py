from django.db import models
from apps.user.models import User

class Album(models.Model):
    title = models.CharField(verbose_name='Nome', max_length=50)
    user = models.ForeignKey(User, related_name="user", on_delete=models.PROTECT)

    class Meta:
        verbose_name = 'Álbum' 
        verbose_name_plural = 'Álbuns'
        
    def __str__(self):
        return f'{self.title}'
    
class Photo(models.Model):
    title = models.CharField(verbose_name='Nome', max_length=50)
    url = models.URLField(verbose_name='URL da imagem')
    album = models.ForeignKey(Album, related_name="photos", on_delete=models.PROTECT)
    
    class Meta:
        verbose_name = 'Imagem' 
        verbose_name_plural = 'Imagens'
        
    def __str__(self):
        return f'{self.title}'