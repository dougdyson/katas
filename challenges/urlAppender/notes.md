After creating a MVP canvas and sketch User Journey, and also cursory reviews of Eventbright API and QR code scanner documentation and tutorials, here are some first PoC tasks:

* function to check attendee's check-in status for an event
* QR code scan to capture order #, attendee_id

1. Setup test harness and write tests
2. Create seperate repos for services

1. Purchase domain, or find free one for dev
2. Create eventbrite team account and event (free ticket price)
3. Pull event data using eventbrite api

1. Create backend database
2. Call api using data from database

1. Create backend service which uses eventbrite third-party auth

1. Create eventbrite attendee account and purchase $0 ticket
2. Pull event meta data via eventbright api

1. Scan QR code and check if attendee has checked-in
2. If they have checked-in, unlock store