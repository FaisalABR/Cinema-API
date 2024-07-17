# Tickets API Spec

## Create Ticket

Endpoint: POST /api/tickets/

Request body:

```json
{
  "movieId": "64c0a4393a5bd27b89fa6a87",
  "username": "Dinda Almira",
  "selectedSeats": [15, 16, 17],
  "total_price": 300000,
  "status": "pending"
}
```

Response body (success):

```json
{
  "status": "Success",
  "message": "Create ticket is successful",
  "savedTicket": {
    "movieId": "64c0a4393a5bd27b89fa6a87",
    "username": "Dinda Almira",
    "selectedSeats": [15, 16, 17],
    "total_price": 300000,
    "status": "pending",
    "_id": "669734957c066a2edd49c856",
    "createdAt": "2024-07-17T03:03:49.895Z",
    "updatedAt": "2024-07-17T03:03:49.895Z",
    "__v": 0
  }
}
```

Response body (Failed):

```json
{
  "message": "failed create Tickets"
}
```

## Get All Tickets

Endpoint: GET /api/Tickets

Response body (success):

```json
{
  [
    {
        "_id": "64c0a913bbd224d12e939e5e",
        "movieId": "64c0a4393a5bd27b89fa6a87",
        "username": "Faisal Abu Bakar Riza",
        "selectedSeats": [
            12,
            13,
            14
        ],
        "total_price": 210000,
        "status": "successfull",
        "createdAt": "2023-07-26T05:03:15.968Z",
        "updatedAt": "2023-07-26T05:17:19.765Z",
        "__v": 0
    },
    {
        "_id": "64cafc82b3f91f79c0dc51a1",
        "movieId": "64c0a4393a5bd27b89fa6a87",
        "username": "Dinda Almira",
        "selectedSeats": [
            15,
            16,
            17
        ],
        "total_price": 300000,
        "status": "pending",
        "createdAt": "2023-08-03T01:01:54.436Z",
        "updatedAt": "2023-08-03T01:01:54.436Z",
        "__v": 0
    }
]
}
```

Response body (Failed):

```json
{
  "errors": "errors message"
}
```

## Update Ticket

Endpoint: PUT /api/tickets/:ticketId

Request body:

```json
{
  "status": "successfull"
}
```

Response body (success):

```json
{
  "status": "Success",
  "message": "Your ticket succesfully paid"
}
```

Response body (Failed):

```json
{
  "errors": "failed"
}
```

## Remove Ticket

Endpoint: DELETE /api/tickets/:ticketId

Response body (success):

```json
{
  "status": "Success",
  "message": "Ticket successfully delete"
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
  "message": "Cast to ObjectId failed for value \"64bfdca7ceef352a08ac114\" (type string) at path \"_id\" for model \"Ticket\""
}
```
