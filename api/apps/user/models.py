from django.db import models

class User(models.Model):
    name = models.CharField(verbose_name='Nome', max_length=50)
    
    class Meta:
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'
    
    def __str__(self):
        return f'{self.name}'

