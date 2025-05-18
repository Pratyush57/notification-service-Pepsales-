function sendEmail(message) {
  console.log(`[EMAIL] ${message}`);
}

function sendSMS(message) {
  console.log(`[SMS] ${message}`);
}

function sendInApp(message) {
  console.log(`[IN-APP] ${message}`);
}

module.exports = { sendEmail, sendSMS, sendInApp };
