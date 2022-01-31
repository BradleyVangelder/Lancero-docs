---
title: 'Node.js Webhooks'
---

# Node.js Leads
## `lancero.webhooks.construct()`
Method used to retrieve the data from a webhook event.

### Parameters
- event: The event received from Lancero

### Example
```ts
const event = await lancero.webhooks.construct("fdbc0cc8-7718-4e4f-a8cb-c969d31b543e");

// Get the type of the event
if (event.data.event === 'LEAD_CREATION') {
    // This webhook was triggered because a lead was created
}

if (event.data.event === 'CODE_CLAIM') {
    // This webhook was triggered because a code was claimed
}
```