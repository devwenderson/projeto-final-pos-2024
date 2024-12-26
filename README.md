# Projeto final POS 2024
- Dupla: Wenderson da Silva e Izac do Nascimento

# Users
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
- **Endpoint:** `/api/users/<id>`
- **Method:** `PUT`

### Delete user:
- **Endpoint:** `/api/users/<id>`
- **Method:** `DELETE`

# Todos
### JSON atributes
```json
{
    "id": number,
    "title": "string",
    "user": "string",
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
- **Endpoint:** `/api/todos/<id>`
- **Method:** `PUT`

### Delete todo:
- **Endpoint:** `/api/todos/<id>`
- **Method:** `DELETE`

# Photos
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

### List album's photos:
- **Endpoint:** `/api/albuns/<id>/photos/`
- **Method**: `GET`

### Create photo:
- **Endpoint:** `/api/photos/`
- **Method:** `POST`

### Update photo:
- **Endpoint:** `/api/photos/<id>`
- **Method:** `PUT`

### Delete photo:
- **Endpoint:** `/api/photos/<id>`
- **Method:** `DELETE`




