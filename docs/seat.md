# Seats API Spec

## Create Seats

Endpoint: POST /api/seats/

Request body:

```json
{
  "id_movie": "64c0a4393a5bd27b89fa6a89",
  "seats": [
    { "seatNumber": 1, "status": "occupied" },
    { "seatNumber": 2, "status": "empty" },
    { "seatNumber": 3, "status": "empty" },
    { "seatNumber": 4, "status": "empty" },
    { "seatNumber": 5, "status": "empty" },
    { "seatNumber": 6, "status": "empty" },
    { "seatNumber": 7, "status": "empty" },
    { "seatNumber": 8, "status": "empty" },
    { "seatNumber": 9, "status": "empty" },
    { "seatNumber": 10, "status": "empty" },
    { "seatNumber": 11, "status": "empty" },
    { "seatNumber": 12, "status": "empty" },
    { "seatNumber": 13, "status": "empty" },
    { "seatNumber": 14, "status": "empty" },
    { "seatNumber": 15, "status": "empty" },
    { "seatNumber": 16, "status": "empty" },
    { "seatNumber": 17, "status": "empty" },
    { "seatNumber": 18, "status": "empty" },
    { "seatNumber": 19, "status": "empty" },
    { "seatNumber": 20, "status": "empty" },
    { "seatNumber": 21, "status": "empty" },
    { "seatNumber": 22, "status": "empty" },
    { "seatNumber": 23, "status": "empty" },
    { "seatNumber": 24, "status": "empty" },
    { "seatNumber": 25, "status": "empty" },
    { "seatNumber": 26, "status": "empty" },
    { "seatNumber": 27, "status": "empty" },
    { "seatNumber": 28, "status": "empty" },
    { "seatNumber": 29, "status": "empty" },
    { "seatNumber": 30, "status": "empty" },
    { "seatNumber": 31, "status": "empty" },
    { "seatNumber": 32, "status": "empty" },
    { "seatNumber": 33, "status": "empty" },
    { "seatNumber": 34, "status": "empty" },
    { "seatNumber": 35, "status": "empty" },
    { "seatNumber": 36, "status": "empty" },
    { "seatNumber": 37, "status": "empty" },
    { "seatNumber": 38, "status": "empty" },
    { "seatNumber": 39, "status": "empty" },
    { "seatNumber": 40, "status": "empty" },
    { "seatNumber": 41, "status": "empty" },
    { "seatNumber": 42, "status": "empty" },
    { "seatNumber": 43, "status": "empty" },
    { "seatNumber": 44, "status": "empty" },
    { "seatNumber": 45, "status": "empty" },
    { "seatNumber": 46, "status": "empty" },
    { "seatNumber": 47, "status": "empty" },
    { "seatNumber": 48, "status": "empty" },
    { "seatNumber": 49, "status": "empty" },
    { "seatNumber": 50, "status": "empty" },
    { "seatNumber": 51, "status": "empty" },
    { "seatNumber": 52, "status": "empty" },
    { "seatNumber": 53, "status": "empty" },
    { "seatNumber": 54, "status": "empty" },
    { "seatNumber": 55, "status": "empty" },
    { "seatNumber": 56, "status": "empty" },
    { "seatNumber": 57, "status": "empty" },
    { "seatNumber": 58, "status": "empty" },
    { "seatNumber": 59, "status": "empty" },
    { "seatNumber": 60, "status": "empty" },
    { "seatNumber": 61, "status": "empty" },
    { "seatNumber": 62, "status": "empty" },
    { "seatNumber": 63, "status": "empty" },
    { "seatNumber": 64, "status": "empty" }
  ]
}
```

Response body (success):

```json
{
  "message": "Success create seats"
}
```

Response body (Failed):

```json
{
  "message": "failed create seats"
}
```

## Get All Seats

Endpoint: GET /api/seats

Response body (success):

```json
{
  [
    {
  "id_movie": "64c0a4393a5bd27b89fa6a89",
  "seats": [
    { "seatNumber": 1, "status": "occupied" },
    { "seatNumber": 2, "status": "empty" },
    { "seatNumber": 3, "status": "empty" },
    { "seatNumber": 4, "status": "empty" },
    { "seatNumber": 5, "status": "empty" },
    { "seatNumber": 6, "status": "empty" },
    { "seatNumber": 7, "status": "empty" },
    { "seatNumber": 8, "status": "empty" },
    { "seatNumber": 9, "status": "empty" },
    { "seatNumber": 10, "status": "empty" },
    { "seatNumber": 11, "status": "empty" },
    { "seatNumber": 12, "status": "empty" },
    { "seatNumber": 13, "status": "empty" },
    { "seatNumber": 14, "status": "empty" },
    { "seatNumber": 15, "status": "empty" },
    { "seatNumber": 16, "status": "empty" },
    { "seatNumber": 17, "status": "empty" },
    { "seatNumber": 18, "status": "empty" },
    { "seatNumber": 19, "status": "empty" },
    { "seatNumber": 20, "status": "empty" },
    { "seatNumber": 21, "status": "empty" },
    { "seatNumber": 22, "status": "empty" },
    { "seatNumber": 23, "status": "empty" },
    { "seatNumber": 24, "status": "empty" },
    { "seatNumber": 25, "status": "empty" },
    { "seatNumber": 26, "status": "empty" },
    { "seatNumber": 27, "status": "empty" },
    { "seatNumber": 28, "status": "empty" },
    { "seatNumber": 29, "status": "empty" },
    { "seatNumber": 30, "status": "empty" },
    { "seatNumber": 31, "status": "empty" },
    { "seatNumber": 32, "status": "empty" },
    { "seatNumber": 33, "status": "empty" },
    { "seatNumber": 34, "status": "empty" },
    { "seatNumber": 35, "status": "empty" },
    { "seatNumber": 36, "status": "empty" },
    { "seatNumber": 37, "status": "empty" },
    { "seatNumber": 38, "status": "empty" },
    { "seatNumber": 39, "status": "empty" },
    { "seatNumber": 40, "status": "empty" },
    { "seatNumber": 41, "status": "empty" },
    { "seatNumber": 42, "status": "empty" },
    { "seatNumber": 43, "status": "empty" },
    { "seatNumber": 44, "status": "empty" },
    { "seatNumber": 45, "status": "empty" },
    { "seatNumber": 46, "status": "empty" },
    { "seatNumber": 47, "status": "empty" },
    { "seatNumber": 48, "status": "empty" },
    { "seatNumber": 49, "status": "empty" },
    { "seatNumber": 50, "status": "empty" },
    { "seatNumber": 51, "status": "empty" },
    { "seatNumber": 52, "status": "empty" },
    { "seatNumber": 53, "status": "empty" },
    { "seatNumber": 54, "status": "empty" },
    { "seatNumber": 55, "status": "empty" },
    { "seatNumber": 56, "status": "empty" },
    { "seatNumber": 57, "status": "empty" },
    { "seatNumber": 58, "status": "empty" },
    { "seatNumber": 59, "status": "empty" },
    { "seatNumber": 60, "status": "empty" },
    { "seatNumber": 61, "status": "empty" },
    { "seatNumber": 62, "status": "empty" },
    { "seatNumber": 63, "status": "empty" },
    { "seatNumber": 64, "status": "empty" }
  ]
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

## Reserve Seats

Endpoint: PUT /api/seats/:seatId/reserve

Request body:

```json
{
  "movieIdToUpdate": "64c0a4393a5bd27b89fa6a89",
  "seatNumbersToUpdate": [4, 5]
}
```

Response body (success):

```json
{
  "message": "Seat successfully reserved"
}
```

Response body (Failed):

```json
{
  "errors": "failed to reserve"
}
```

## Unreserve Seats

Endpoint: PUT /api/seats/:seatId/unreserve

Request body:

```json
{
  "movieIdToUpdate": "64c0a4393a5bd27b89fa6a89",
  "seatNumbersToUpdate": [4, 5]
}
```

Response body (success):

```json
{
  "message": "Seat successfully unreserved"
}
```

Response body (Failed):

```json
{
  "errors": "failed to unreserve"
}
```
