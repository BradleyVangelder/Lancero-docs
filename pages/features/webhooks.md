---
title: 'Webhooks'
---

import Callout from 'nextra-theme-docs/callout';

# Webhooks
## What are webhooks used for?
If you are looking for an easy way to run some code when an event happens then webhooks are the right tool. They allow you to give us a URL that we will trigger on certain events.

## Setting up a webhook
You can find webhooks in the <a href="https://dashboard.lancero.app/developers">developer settings</a>. From there you can navigate to the webhooks menu and create a new webhook.

In the webhook creator you need to specify at least two things.
- URL, the URL where we will send a POST-request.
- Events, toggle the events you want to receive.

## Verification
Each webhook has a unique signing secret. When a webhook is triggered we add a header called `lancero-signature` which contains this secret.
You can verify the authenticity of a request by comparing this passed signature to the one found in your webhook settings.

<Callout emoji={"⚠️"}>
    This signing secret is confidential, we suggest you store it in a safe location like a key manager or your environment variables.
</Callout>

A simple example of how to verify this header in JavaScript with Express:

```js
app.post("/", (req, res) => {
    // Load the webhook secret from a secure location
    const expectedSignature = process.env.LANCERO_WEBHOOK_SECRET;

    const signature = req.headers['lancero-signature'];

    if (signature !== expectedSignature) {
        // This is not a request made by Lancero
        return res.status(403).json({error: 'Unverified request'});
    }

    // Receive the valid event here
})
```

## Receiving events
When an event is triggered we send a POST-request to the URL you specified. In the request body we will put one variable called `event`.
You can exchange this variable for the event-data using your secret key. This can either be done through the <a href="/node/methods/webhooks">Node.js library</a> or an <a href="/public-api/endpoints/webhooks">API-call</a>.