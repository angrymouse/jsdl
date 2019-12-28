# JavaScript Downloader
JavaScript Downloader is a simple library for help you to download other js libraries.
It is very simple in use:
```bash
cd /user/me/my-awesome-project/
jsdl jquery.min.js
```
or
```bash
cd /user/me/my-awesome-project/
npx jsdl jquery.min.js #this command will work even without installing jsdl CLI!
```
After this command you can find jQuery library in root of your project (in example root of project is ``/user/me/my-awesome-project/``).
Also it have a NodeJS api.
Usage:
```javascript
const jsdl=require("jsdl");
jsdl("library you need",callback);
```
Callback calls with one argument - code of library.
Example - Usage with express:
```javascript
let app=require("express");
let jsdl=require("jsdl");
app.get("/",(req,res)=>{
  res.sendFile("index.html")
})
app.get("/js/jquery.min.js",(req,res)=>{
  jsdl("jquery.min.js",(code)=>{
    res.send(code)
  })
})
app.listen(8080)
```
To use CLI (jsdl command) you need install this library globally.
Windows users:
```bash
npm install -g jsdl
```
Linux/MacOS users:
```bash
sudo npm i -g jsdl
```
To use API in your project install it locally:
```bash
cd my-project
npm i jsdl
```
But you can use CLI without installing!
Just use npx command instead native jsdl CLI.
(``npx jsdl`` instead ``jsdl``, arguments like with CLI).
