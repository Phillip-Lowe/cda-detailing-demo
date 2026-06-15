# CDA Mobile Detailing — Demo Project Notes

**Date:** 2026-06-15  
**Status:** Demo built, pitched, no response from client

---

## What Was Built

### Live Demo Site
- **URL:** https://phillip-lowe.github.io/cda-detailing-demo/
- **Repo:** https://github.com/Phillip-Lowe/cda-detailing-demo
- **Tech:** Static HTML/CSS/JS (GitHub Pages), no build step

### Features
- 3 service packages (Exterior, Interior, Full Detail)
- Vehicle size selector (Small/Medium/Large)
- Date/time picker with 24h advance requirement
- Add-ons (Engine Bay Detail +$60)
- Live price summary with 9.52% tax
- Flat webhook payload for n8n

### Webhooks Configured
- `POST https://n8n.systack.net/webhook/cda-booking`
- `POST https://n8n.systack.net/webhook/cda-booking-confirmed`
- Reminder endpoints: T-24h, T-2h

### Database
- **Table:** `cda_bookings` in `systack_noshow`
- **Created:** 2026-06-15
- **Schema:** Full CDA-specific fields (vehicle size, add-ons, pricing breakdown)

---

## Pitch Delivered

Told them:
- Two 18-year-olds building a real business, impressive
- Phone bookings waste time — every minute on phone = minute not detailing
- Built them a live demo with online booking + auto-confirmations + reminders
- Setup $1,500 + $149/mo for hosting/maintenance
- Full refund if it doesn't save time in first month

**Response:** None. Client not answering.

---

## Notes
- This was a cold outreach demo — no prior relationship
- Client uses Google Sites (free) — may not want to pay for booking system
- Young entrepreneurs may not see value in automation yet
- Could follow up in 1-2 weeks or move on

---

## If They Come Back Later
Everything is built and ready:
- Site is deployed
- Database schema is ready
- n8n workflows are partially built (need completion)
- Can activate in ~30 minutes
