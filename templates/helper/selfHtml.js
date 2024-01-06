const getUserHTML = (name, email, message, website, dark) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .main {
        width: 100%;
        min-height: 100%;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
      .heading {
        font-weight: bolder;
        font-size: x-large;
        padding: 12px 0;
        text-align: center;
      }
      .content {
        padding-left: 5px;
        width: 100%;
        margin-top: 12px;
        padding-bottom: 50px;
      }
      .title {
        font-size: large;
        font-weight: 500;
        padding-bottom: 6px;
      }
      .flex-row-content {
        font-weight: lighter;
      }
      .name,
      .email,
      .message {
        padding: 4px 0;
      }
      .label {
        padding-right: 5px;
        font-weight: normal;
        flex: 1;
      }
      .data {
        padding-left: 4px;
        flex: 9;
      }
      .message-content {
        white-space: pre;
      }
      .website {
        padding-left: 4px;
      }
      .dark {
        color: #fafafa;
        background-color: #121212;
      }
      a {
        color: #0080ff;
        text-decoration: none;
      }
    </style>
  </head>
  <body class="${dark ? "dark" : null}">
    <main class="main">
      <div class="heading flex-row">
        New message from
        <a href="${website}" target="_blank" rel="noreferrer" class="website"
          >here</a
        >
      </div>
      <div class="content">
        <div class="title">Form Details:</div>
        <div class="name flex-row-content">
          <span class="label">Name:</span>
          <span class="data">${name}</span>
        </div>
        <div class="email flex-row-content">
          <span class="label">Email:</span>
          <span class="data">${email}</span>
        </div>
        <div class="message flex-row-content">
          <span class="label">Message:</span>
          <span class="message-content data">${message}</span>
        </div>
      </div>
    </main>
  </body>
</html>
`;

module.exports = getUserHTML;
