# Movies API Spec

## Create Movie

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

## Get Movie

Endpoint: GET /api/movies/:movieId

Response body (success):

```json
{
  "_id": "64c0a4393a5bd27b89fa6a89",
  "title": "The Super Mario Bros. Movie",
  "description": "Ketika sedang bekerja di bawah tanah untuk memperbaiki pipa air, Mario dan Luigi, yang merupakan tukang ledeng dari Brooklyn, tiba-tiba terhisap ke dalam pipa misterius dan masuk ke dunia yang sangat berbeda. Mereka berada di tempat yang ajaib dan aneh. Tapi sayangnya, mereka terpisah satu sama lain. Mario memulai petualangan besar untuk mencari dan menemukan Luigi.",
  "release_date": "2023-04-05T00:00:00.000Z",
  "poster_url": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  "age_rating": 14,
  "ticket_price": 49000
}
```

Response body (Failed):

```json
{
  "errors": "errors message"
}
```

## Update Movie

Endpoint: PUT /api/movies/:movieId

Request body:

```json
{
  "ticket_price": 80000
}
```

Response body (success):

```json
{
  "status": "Success",
  "message": "Movie updated"
}
```

Response body (Failed):

```json
{
  "errors": "street must not blank"
}
```

## Delete Movies

Endpoint: DELETE /api/movies/:movieId

Response body (success):

```json
{
  "message": "Success to delete a movie"
}
```

Response body (Failed):

```json
{
  "stringValue": "\"64bfdca7ceef352a08ac114\"",
  "valueType": "string",
  "kind": "ObjectId",
  "value": "64bfdca7ceef352a08ac114",
  "path": "_id",
  "reason": {},
  "name": "CastError",
  "message": "Cast to ObjectId failed for value \"64bfdca7ceef352a08ac114\" (type string) at path \"_id\" for model \"Movie\""
}
```
