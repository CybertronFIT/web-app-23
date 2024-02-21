const getRegisterBody = (name: string, pid: string) => {
  const html = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Ubuntu+Mono&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: "Audiowide", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 1.5;
            color: white;
            background: linear-gradient(to bottom, #334155, black);
            background-size: cover;
            background-repeat: no-repeat;
            padding: 20px;
            height: 100vh;
            display: grid;
            place-content: center;
        }

        .container {
            max-width: 600px;
            min-height: min-content;
            margin: 0 auto;
            border-width: 3px;
            border-radius: 10px;
            border-color: black;
            background-color: #1b1b1b36;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .logo {
            text-align: center;
            margin-bottom: 40px;
        }

        .head {
            text-shadow: 0px 0px 25px cyan;
        }

        .logo img {
            width: 100px;
            height: auto;
        }

        .otp {
            text-align: center;
            font-size: xx-large;
            font-family: monospace;
            color: cyan;
        }

        .title {
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .content {
            text-align: center;
            margin-top: 30px;
            font-size: 15px;
            margin-bottom: 20px;
            padding-left: 39px;
            padding-right: 39px;
        }

        .button {
            display: block;
            width: 200px;
            height: 40px;
            margin: 0 auto;
            margin-bottom: 41px;
            margin-top: 29px;
            background-color: rgb(5, 197, 223);
            color: black;
            border: none;
            border-radius: 10px;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            text-decoration: none;
            cursor: pointer;
            box-shadow:  0px 4px 5px cyan;
        }

        .button:hover {
            color: white;
            box-shadow:  0px 5px 15px cyan;
        }
    </style>

</head>

<body>
    <div class="container">
        <div class="logo">
            <h1 class="head">Cybertron</h1>
        </div>
        <div class="title">Hello ${name}</div>
        <div class="content">
            We're excited to have you get started! First you need to login with your newly created account.
        </div>
        <p class="content">
            Your Participant ID is - 
        </p>

        <pre class="otp">${pid}</pre>
        <a href="https://cybertron.vercel.app/auth/login" class="button">Login To Cybertron</a>
    </div>
</body>

</html>
    `;

  return html;
};

export default getRegisterBody;