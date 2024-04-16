## Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Muhammad Chaerul ",
  "last_name": "Hafiz",
  "email": "mchaerulhafiz@gmail.com",
  "phone": "0851231231231"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "first_name": "Muhammad Chaerul",
    "last_name": "Hafiz",
    "email": "mchaerulhafiz@gmail.com",
    "phone": "0851231231231"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "first_name is required"
}
```

## Get Contact

Endpoint : GET /api/contacts/:contactId

Headers :

- Authorization : token

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "first_name": "Muhammad Chaerul",
    "last_name": "Hafiz",
    "email": "mchaerulhafiz@gmail.com",
    "phone": "0851231231231"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "contact is not found"
}
```

## Update Contact

Endpoint : PUT /api/contacts/:contactId

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Muhammad Chaerul ",
  "last_name": "Hafiz",
  "email": "mchaerulhafiz@gmail.com",
  "phone": "0851231231231"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "first_name": "Muhammad Chaerul",
    "last_name": "Hafiz",
    "email": "mchaerulhafiz@gmail.com",
    "phone": "0851231231231"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "contact is not found /  first nime is required"
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:contactId

Headers :

- Authorization : token

Request Body :

Response Body (Success):

```json
{
  "data": true
}
```

Response Body (Failed):

```json
{
  "errors": "contact is not found"
}
```

## Search Contact

Endpoint : GET /api/contacts/

Headers :

- Authorization : token

Query Params :

- name : string, contact first name, or lastname, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page: number, default 1
- size: number, default 10

Response Body (Success):

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Muhammad Chaerul",
      "last_name": "Hafiz",
      "email": "mchaerulhafiz@gmail.com",
      "phone": "0851231231231"
    },
    {
      "id": 2,
      "first_name": "Muhammad Chaerul",
      "last_name": "Hafiz",
      "email": "mchaerulhafiz@gmail.com",
      "phone": "0851231231231"
    },
    {
      "id": 3,
      "first_name": "Muhammad Chaerul",
      "last_name": "Hafiz",
      "email": "mchaerulhafiz@gmail.com",
      "phone": "0851231231231"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body (Failed):

```json
{
  "errors": "contact is not found /  first nime is required"
}
```
