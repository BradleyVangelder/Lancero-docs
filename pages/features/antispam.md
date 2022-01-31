---
title: 'Anti-spam'
---

# Anti-spam
Depending on the popularity of your service, people may try to submit multiple emails to the waitlist. As of now there is no automatic way to prevent this but we do offer you the ability to write a blacklist.

## Providers
If you want to limit signups to trusted email providers only then you can do that by selecting the `Major` option in the providers menu. This will only allow signups from the following domains
- gmail.com
- outlook.com
- hotmail.com
- yahoo.com
- icloud.com

## Setting up your blacklist
You can find your blacklist in the <a href="https://dashboard.lancero.app/settings/project">project settings</a>. It should contain a comma-seperated list of emails and domains you want to prevent from being added to the leads.

For example, if we want to block:
- The specific email `test@test.com`
- All emails from the domain `@mailicious.com`

```csv
test@test.com,@mailicious.com
```
