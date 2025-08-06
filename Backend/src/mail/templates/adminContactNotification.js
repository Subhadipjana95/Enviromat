exports.adminContactNotification = (
  email,
  firstname,
  lastname,
  message,
  phoneNo,
  countrycode
) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>New Contact Form Submission</title>
      <style>
          body {
              background-color: #f4f4f4;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              color: #333;
              margin: 0;
              padding: 0;
          }

          .container {
              max-width: 650px;
              margin: 40px auto;
              background: #fff;
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }

          .header {
              text-align: center;
              margin-bottom: 30px;
          }

          .header img {
              max-width: 150px;
              margin-bottom: 10px;
          }

          .title {
              font-size: 22px;
              font-weight: 600;
              color: #222;
          }

          .info {
              font-size: 16px;
              line-height: 1.6;
              margin-bottom: 20px;
          }

          .info p {
              margin: 10px 0;
          }

          .highlight {
              font-weight: 600;
              color: #000;
          }

          .message-box {
              background-color: #f0f0f0;
              padding: 15px;
              border-left: 4px solid #007bff;
              margin: 15px 0;
              font-style: italic;
              white-space: pre-line;
              border-radius: 5px;
          }

          .footer {
              font-size: 14px;
              color: #999;
              text-align: center;
              margin-top: 30px;
              border-top: 1px solid #eee;
              padding-top: 20px;
          }

          @media (max-width: 600px) {
              .container {
                  padding: 20px;
              }
              .title {
                  font-size: 20px;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <img src="https://i.ibb.co/7Xyj3PC/logo.png" alt="StudyNotion Logo" />
              <div class="title">📬 New Contact Form Submission</div>
          </div>

          <div class="info">
              <p><span class="highlight">Name:</span> ${firstname} ${lastname}</p>
              <p><span class="highlight">Email:</span> ${email}</p>
              <p><span class="highlight">Phone:</span> ${countrycode} ${phoneNo}</p>
              <p><span class="highlight">Message:</span></p>
              <div class="message-box">${message}</div>
          </div>

          <div class="footer">
              This is an automated message sent from the StudyNotion platform.
              <br/>
              Please do not reply directly to this email.
          </div>
      </div>
  </body>
  </html>`;
};
