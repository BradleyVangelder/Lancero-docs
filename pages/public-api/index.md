---
title: 'API'
---

# Public API
If you don't want to use any of the provided libraries or none are available, we also offer you the ability to manually call the API.

## Authentication
To authenticate your request you will have to pass your project's API key as a bearer token.
If no correct token is passed, your request will respond with a `401, Incorrect Bearer token specified`.

An example with JavaScript fetch
```js
const res = await fetch('https://api.lancero.app/leads/create', {
    method: 'POST',
    body: JSON.stringify({
      email,
      waitlist: true,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer YOUR_PK_HERE`,
    },
});
```