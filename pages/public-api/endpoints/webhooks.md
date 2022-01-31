---
title: 'Claims API'
---

import Callout from 'nextra-theme-docs/callout';

# Claims
## POST `/webhooks/construct`
This route is used to retrieve the data from a webhook-event.

### Request body
- event: The event you receive from Lancero

```json
{
    "event": "fdbc0cc8-7718-4e4f-a8cb-c969d31b543e"
}
```