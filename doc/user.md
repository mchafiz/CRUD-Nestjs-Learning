# User API Spec

## Register User

Endpoint : Post /api/users

Request Body :

```json
{
  "username": "mchafiz",
  "password": "rahasia",
  "name": "hafiz"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "mchafiz",
    "name": "hafiz mchafiz"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Login User

Endpoint : Post /api/users/login

Request Body :

```json
{
  "username": "mchafiz",
  "password": "rahasia"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "mchafiz",
    "name": "hafiz mchafiz",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username or password is wrong"
}
```

## Get User

Endpoint : Post /api/users/current

Headers :

- Authorization : token

Response Body (Success) :

```json
{
  "data": {
    "username": "mchafiz",
    "name": "hafiz mchafiz",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :

- Authorization: token

Request Body :

```json
{
  "password": "rahasia", // optional
  "name": "hafiz" // optional
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "mchafiz",
    "name": "hafiz mchafiz"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :

- Authorization: token

Response Body (Success) :

```json
{
  "data": true
}
```

Response Body (Failed) :

```json
{
  "errors": "User not found"
}
```
