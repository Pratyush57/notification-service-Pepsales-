# Notification Service

## Objective
Build a system to send notifications to users through Email, SMS, and in-app channels.

---

## Features

- **Send Notification**: API to send notifications via Email, SMS, or in-app.
- **Get User Notifications**: API to fetch all notifications for a specific user.
- **Asynchronous Processing**: Optionally integrates a queue (e.g., RabbitMQ, Kafka) to handle notification processing asynchronously.
- **Retry Mechanism**: Automatic retries for failed notification attempts.

---

## API Endpoints

### POST `/notifications`
Send a new notification.

**Request Body:**
```json
{
  "userId": "123",
  "type": "email", // or "sms", "in-app"
  "message": "Your message here"
}
