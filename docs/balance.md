# Balance API Spec

## Create Balance

Endpoint: POST /api/balance/

Response body (success):

```json
{
  "balance": 300000,
  "_id": "669736437c066a2edd49c85b",
  "createdAt": "2024-07-17T03:10:59.286Z",
  "updatedAt": "2024-07-17T03:10:59.286Z",
  "__v": 0
}
```

Response body (Failed):

```json
{
  "message": "failed create balance"
}
```

## Get balance

Endpoint: GET /api/balance

Response body (success):

```json
{
  [
    {
        "_id": "64c0aefe1ceafc737171c363",
        "balance": 100000,
        "createdAt": "2023-07-26T05:28:30.585Z",
        "updatedAt": "2023-08-03T01:00:25.195Z",
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

## Top Up Balance

Endpoint: PUT /api/balance/:balanceId/topup

Request body:

```json
{
  "balance": 200000
}
```

Response body (success):

```json
{
  "status": "Success",
  "message": "Top up is success"
}
```

Response body (Failed):

```json
{
  "errors": "failed to top up"
}
```

## Refund Balance

Endpoint: PUT /api/balance/:balanceId/refund

Request body:

```json
{
  "balance": 200000
}
```

Response body (success):

```json
{
  "status": "Success",
  "message": "Refund is success"
}
```

Response body (Failed):

```json
{
  "errors": "failed to top up"
}
```

## Withdraw Balance

Endpoint: PUT /api/balance/:balanceId/withdraw

Request body:

```json
{
  "balance": -400000
}
```

Response body (success):

```json
{
  "status": "Success",
  "message": "Withdraw is success"
}
```

Response body (Failed):

```json
{
  "errors": "failed to withdraw"
}
```
