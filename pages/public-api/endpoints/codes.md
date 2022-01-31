---
title: 'Codes API'
---

import Callout from 'nextra-theme-docs/callout';

# Codes
## GET `/codes/:code`
This route is used to find information about a code.

- Method: `GET`
- Endpoint: `https://api.lancero.app/codes/:code`

## POST `/codes/claim`
This route is used to claim a code.

<Callout>
  This route can be accessed with both your public and secret key
</Callout>

- Method: `POST`
- Endpoint: `https://api.lancero.app/codes/claim`

### Request body
- code: The code that you want to claim
- email: The email of the customer that wants to claim this code

```json
{
    "code": "fantastic-apple",
    "email": "hello@lancero.app"
}
```


## POST `/codes/generate`
This route is used to generate new codes on-demand

- Method: `POST`
- Endpoint: `https://api.lancero.app/codes/generate`

### Request body
- amount: The amount of codes you want to generate
- validFrom: Optional, when is this code allowed to be claimed
- validUntil: Optional, when is this code allowed to be claimed
- allowedClaims: Optional, default 1, how many customers are allowed to claim this code
- reservedFor: Optional, the email of the lead you want to reserve this code for
- type: Optional, default `"creative"`, what type of code do you want to generate
    - `"creative"`, a random adjective and noun (e.g. `curious-pineapple`)
    - `"alphanumeric"`, a 6 character combination of lowercase letters and digits
    - `"numeric"`, 6 random digits

```json
{
    "amount": 2,
    "validFrom": "2021-11-29T17:42:07.647Z",
    "allowedClaims": 10,
    "reservedFor": "hello@lancero.app"
}
```

## POST `/codes/send`
This route is used to send an email containing a code to leads

- Method: `POST`
- Endpoint: `https://api.lancero.app/codes/send`

### Request body
- code: The code you want to send
- emails: The leads you want to send this code to

```json
{
    "code": "fantastic-apple",
    "emails": ["hello@lancero.app", "thelegend27@lancero.app"]
}
```

## POST `/codes/delete`
This route is used to delete a code.

<Callout type={"error"} emoji={"🛑"}>
  Deleting a code is permanent and cannot be reversed. All associated claims will also be deleted and any user that has claimed the code will lose access.
</Callout>

- Method: `POST`
- Endpoint: `https://api.lancero.app/codes/delete`

### Request body
- code: The code that you want to delete

```json
{
    "code": "fantastic-apple",
}
```

