import React from 'react'

 function Login() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <style dangerouslySetInnerHTML={{__html: "\n        #grad1 {\n            height: 590px;\n            background-color: red; /* For browsers that do not support gradients */\n            background-image: url(\"/images/a.png\");\n        }\n        .button {\n            position: relative;\n            left: 1050px;\n            bottom: 550px;\n            background-color: orangered;\n            border: 10px;\n            color: black;\n            padding: 15px 32px;\n            text-align: center;\n            text-decoration: none;\n            display: inline-block;\n            font-size: 20px;\n            font-family: Arial, Helvetica, sans-serif;\n            margin: 2px 2px;\n            cursor: pointer;\n            -webkit-transition-duration: 0.4s; /* Safari */\n            transition-duration: 0.4s;\n        }\n        .button2:hover {\n            box-shadow: 0 120px 120px 0 rgba(100,0,200,100),0 170px 150px 0 rgba(100,0,200,190);\n        }\n\n    " }} />
        <title>Avengers</title>
        <div id="grad1" />
        <button onclick="location.href='login.html'"  id="button" className="button button2">Login</button>
    </div>
  );
}

export default Login
