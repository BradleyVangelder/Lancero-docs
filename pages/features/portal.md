---
title: 'No-code Portal'
---
import Image from 'next/image'
import lanceroPortal from '../../public/assets/lancero_portal.png'

# Lancero Portal
Lancero Portal is the perfect tool for anyone that is looking to keep the code minimal. A Lancero Portal operates from your own Lancero.app subdomain. You can claim this domain in <a href={'https://dashboard.lancero.app'}>your dashboard</a>

## Tutorial
<iframe width="560" height="315" src="https://www.youtube.com/embed/bX8UBc0dWZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## How it works
After you have claimed your unique subdomain, you can start gathering emails. All you need to do in your application is redirect users to your Portal and we will take care of the rest.

<Image src={lanceroPortal} alt="Hello" layout={'responsive'} placeholder={'blur'} width={4696} height={2724} />

### What happens after a waitlist signup
After a potential user has signed up for the waitlist we show them a button which they can click to go back to your site (the URL you specified during the creation of your project).

### What happens after a code claim
We show the user a success page and what happens after depends on your configuration.

- If you have configured a redirect URL, we will automatically redirect the user to the URL you have specified and append a claim token as a query parameter. This token can be exchanged for the user's data using your secret key.
An example of what your redirect url may look like is `https://dashboard.lancero.app/?lancero_token=18553c856c0462412672d416`.
- If you have not configured a redirect URL, we will do nothing and just show the user a success screen.