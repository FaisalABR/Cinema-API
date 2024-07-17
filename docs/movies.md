# Movies API Spec

## Create Address

Endpoint: POST /api/movies/

Request body:

```json
{
  "title": "The Super Mario Bros. Movie",
  "description": "Ketika sedang bekerja di bawah tanah untuk memperbaiki pipa air, Mario dan Luigi, yang merupakan tukang ledeng dari Brooklyn, tiba-tiba terhisap ke dalam pipa misterius dan masuk ke dunia yang sangat berbeda. Mereka berada di tempat yang ajaib dan aneh. Tapi sayangnya, mereka terpisah satu sama lain. Mario memulai petualangan besar untuk mencari dan menemukan Luigi.",
  "release_date": "2023-04-05",
  "poster_url": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  "age_rating": 14,
  "ticket_price": 49000
}
```

Response body (success):

```json
 {
    "message": "Success create a movie",
 {
     "title": "The Super Mario Bros. Movie",
    "description": "Ketika sedang bekerja di bawah tanah untuk memperbaiki pipa air, Mario dan Luigi, yang merupakan tukang ledeng dari Brooklyn, tiba-tiba terhisap ke dalam pipa misterius dan masuk ke dunia yang sangat berbeda. Mereka berada di tempat yang ajaib dan aneh. Tapi sayangnya, mereka terpisah satu sama lain. Mario memulai petualangan besar untuk mencari dan menemukan Luigi.",
    "release_date": "2023-04-05",
    "poster_url": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "age_rating": 14,
    "ticket_price": 49000
 }
}
```

Response body (Failed):

```json
{
  "message": "failed create movies"
}
```

## Get All Movies

Endpoint: GET /api/movies

Response body (success):

```json
{
  [
    {
        "_id": "64c0a4393a5bd27b89fa6a89",
        "title": "The Super Mario Bros. Movie",
        "description": "Ketika sedang bekerja di bawah tanah untuk memperbaiki pipa air, Mario dan Luigi, yang merupakan tukang ledeng dari Brooklyn, tiba-tiba terhisap ke dalam pipa misterius dan masuk ke dunia yang sangat berbeda. Mereka berada di tempat yang ajaib dan aneh. Tapi sayangnya, mereka terpisah satu sama lain. Mario memulai petualangan besar untuk mencari dan menemukan Luigi.",
        "release_date": "2023-04-05T00:00:00.000Z",
        "poster_url": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "age_rating": 14,
        "ticket_price": 49000
    },
    ...
  ]
}
```

Response body (Failed):

```json
{
  "errors": "errors message"
}
```

## Update Address

Endpoint: PUT /api/contacts/:idContacs/addresses/:idAddresses

Request Headers:

- X-API-TOKEN: token()

Request body:

```json
{
  "street": "Jl. Damai 74",
  "city": "Jakarta Selatan",
  "province": "DKI Jakarta",
  "country": "Indonesia",
  "postalCode": "12323"
}
```

Response body (success):

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Damai 74",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postalCode": "12323"
  }
}
```

Response body (Failed):

```json
{
  "errors": "street must not blank"
}
```

## Remove Address

Endpoint: DELETE /api/contacts/:idContacs/addresses/:idAddresses

Request Headers:

- X-API-TOKEN: token()

Response body (success):

```json
{
  "data": "OK"
}
```

Response body (Failed):

```json
{
  "errors": "Address is not found"
}
```

## List Address

Endpoint: GET /api/contacts/:idContacs/addresses

Request Headers:

- X-API-TOKEN: token()

Response body (success):

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jl. Damai 74",
      "city": "Jakarta Selatan",
      "province": "DKI Jakarta",
      "country": "Indonesia",
      "postalCode": "12323"
    },
    {
      "id": 2,
      "street": "Jl. Damai 74",
      "city": "Jakarta Selatan",
      "province": "DKI Jakarta",
      "country": "Indonesia",
      "postalCode": "12323"
    }
  ]
}
```

Response body (Failed):

```json
{
  "errors": "contact is not found"
}
```
