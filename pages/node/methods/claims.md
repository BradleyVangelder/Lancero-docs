---
title: 'Node.js Claims'
---

# Node.js Claims
## `lancero.claims.exchange()`
Method used to exchange a Lancero claim token for the lead and code

### Parameters
- token: string, the claim token you received from Lancero

### Example
```ts
const code = await lancero.claims.exchange("18553c856c0462412672d416");
```

