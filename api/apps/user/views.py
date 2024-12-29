from rest_framework import viewsets, status
from rest_framework.response import Response
from django.db.models import ProtectedError

from apps.user.models import User
from apps.user.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
            return Response({"message": "Usuário deletado com sucesso"}, status=status.HTTP_204_NO_CONTENT)
        except ProtectedError:
            return Response(
                {"message": "O usuário possui albuns vinculados"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"message": f"Ocorreu um erro em {str(e)}"}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )