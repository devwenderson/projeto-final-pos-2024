# Projeto final POS 2024
<b>Dupla: Wenderson da Silva e Izac do Nascimento</b>

---
# Sumário
- [Users](#users)
- [Todos](#todos)
- [Photos](#photos)
- [Albuns](#albuns)
- [Colaboradores](#colaboradores)
---

# <a name="users"></a> Users
### JSON atributes
```json
{
    "id": number,
    "name": "string"
}
```
### List users:
- **Endpoint:** `/api/users/`
- **Method**: `GET`

### Create user:
- **Endpoint:** `/api/users/`
- **Method:** `POST`

### Update user:
- **Endpoint:** `/api/users/<id>/`
- **Method:** `PUT`

### Delete user:
- **Endpoint:** `/api/users/<id>/`
- **Method:** `DELETE`


# <a name="todos"></a> Todos
### JSON atributes
```json
{
    "id": number,
    "title": "string",
    "user": "string",
    "user_id": int,
    "is_complete": boolean,
}
```
### List todos:
- **Endpoint:** `/api/todos/`
- **Method**: `GET`

### Create todo:
- **Endpoint:** `/api/todos/`
- **Method:** `POST`

### Update todo:
- **Endpoint:** `/api/todos/<id>/`
- **Method:** `PUT`

### Delete todo:
- **Endpoint:** `/api/todos/<id>/`
- **Method:** `DELETE`

# <a name="photos"></a> Photos
### JSON atributes
```json
{
    "id": number,
    "title": "string",
    "url": "string",
    "album": "string",
}
```
### List photos:
- **Endpoint:** `/api/photos/`
- **Method**: `GET`

### Create photo:
- **Endpoint:** `/api/photos/`
- **Method:** `POST`

### Update photo:
- **Endpoint:** `/api/photos/<id>/`
- **Method:** `PUT`

### Delete photo:
- **Endpoint:** `/api/photos/<id>/`
- **Method:** `DELETE`

# <a name="albuns"></a> Albuns
### JSON atributes
```json
{
    "id": number,
    "title": "string",
    "user": "string",
    "user_id": int,
}
```
### List albuns:
- **Endpoint:** `/api/albuns/`
- **Method**: `GET`

### List album's photos:
- **Endpoint:** `/api/albuns/<id>/photos/`
- **Method**: `GET`

### Create photo:
- **Endpoint:** `/api/photos/`
- **Method:** `POST`

### Update album:
- **Endpoint:** `/api/albuns/<id>/`
- **Method:** `PUT`

### Delete album:
- **Endpoint:** `/api/albuns/<id>/`
- **Method:** `DELETE`

---

## <a name="colaboradores"></a> Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/izacnascimento" title="Izac do Nascimento">
        <img src="https://avatars.githubusercontent.com/u/115838994?v=4" width="100px;" alt="collaborators pictures"/><br>
        <sub>
          <b>Izac do Nascimento</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/devwenderson" title="Wenderson Nascimento">
        <img src="https://avatars.githubusercontent.com/devwenderson" width="100px;" alt="collaborators pictures"/><br>
        <sub>
          <b>Wenderson Nascimento</b>
        </sub>
      </a>
    </td>
  </tr>
</table>



