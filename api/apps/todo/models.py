from django.db import models
from apps.user.models import User

class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(verbose_name='Título', max_length=50)
    is_complete = models.BooleanField(verbose_name='Completo')
    
    class Meta:
        verbose_name = 'Tarefa'
        verbose_name_plural = 'Tarefas'
        
    def __str__(self):
        return f'{self.title}'
