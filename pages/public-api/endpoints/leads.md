---
title: 'Leads API'
---

import Callout from 'nextra-theme-docs/callout';

# Leads
## GET `/leads`
This route is used to get all leads.

- Method: `GET`
- Endpoint: `https://api.lancero.app/leads`

## GET `/leads/email/:email`
This route is used to find information about a lead.

- Method: `GET`
- Endpoint: `https://api.lancero.app/leads/email/:code`

## POST `/leads/create`
This route is used to create a new lead.

<Callout>
  This route can be accessed with both your public and secret key
</Callout>

- Method: `POST`
- Endpoint: `https://api.lancero.app/leads/create`

### Request body
- email: The email of the lead
- firstname: Optional, the first name of the lead
- lastname: Optional, the last name of the lead
- referralCode: Optional, the referral code of another lead
- notes: Optional, any notes you wish to add to this lead
- waitlist: Optional, default `false`, should this user automatically be added to the waitlist?

```json
{
    "firstname": "Dries",
    "lastname": "Augustyns",
    "email": "dries@lancero.app",
    "waitlist": true
}
```

## POST `/leads/delete`
This route is used to delete a lead.

<Callout type={"error"} emoji={"🛑"}>
  Deleting a lead is permanent and cannot be reversed. This leads will lose access.
</Callout>

- Method: `POST`
- Endpoint: `https://api.lancero.app/leads/delete`

### Request body
- email: The email that you want to delete

```json
{
    "email": "dries@lancero.app",
}
```

