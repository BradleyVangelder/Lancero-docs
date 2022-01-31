---
title: 'Node.js Codes'
---

import Callout from 'nextra-theme-docs/callout';

# Node.js Codes
## `lancero.codes.find()`
Method used to find information about a code

### Parameters
- code: string, the code you want to look up

### Example
```ts
const code = await lancero.codes.find("fantastic-apple");
```

## `lancero.codes.generate()`
Method used to generate new codes on-demand

### Parameters
- amount: The amount of codes you want to generate
- validFrom: Optional, when is this code allowed to be claimed
- validUntil: Optional, when is this code allowed to be claimed
- allowedClaims: Optional, default 1, how many customers are allowed to claim this code
- reservedFor: Optional, the email of the lead you want to reserve this code for
- type: Optional, default `"creative"`, what type of code do you want to generate
    - `"creative"`, a random adjective and noun (e.g. `curious-pineapple`)
    - `"alphanumeric"`, a 6 character combination of lowercase letters and digits
    - `"numeric"`, 6 random digits

### Example
```ts
const codes = await lancero.codes.generate({
    "amount": 2,
    "validFrom": "2021-11-29T17:42:07.647Z",
    "allowedClaims": 10,
    "reservedFor": "hello@lancero.app",
    "type": "creative",
});
```

## `lancero.codes.claim()`
Method used to claim a code

### Parameters
- email: The email of the customer that wants to claim this code
- code: The code they want to claim

### Example
```ts
const claim = await lancero.codes.claim({
    "email": "dries@lancero.app",
    "code": "fantastic-apple"
});
```

## `lancero.codes.send()`
Method used to send an email containing a code to leads

### Parameters
- code: The code you want to send
- leads: The leads you want to send this code to

### Example
```ts
const result = await lancero.codes.send({
    "code": "fantastic-apple",
    "leads": [
        "hello@lancero.app",
        "thelegend27@lancero.app"
    ]
});
```

## `lancero.codes.delete()`
Method used to delete a code

<Callout type={"error"} emoji={"🛑"}>
  Deleting a code is permanent and cannot be reversed. All associated claims will also be deleted and any user that has claimed the code will lose access.
</Callout>

### Parameters
- code: string, the code you want to delete

### Example
```ts
const code = await lancero.codes.delete("fantastic-apple");
```
