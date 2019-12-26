#!/usr/bin/node
process.on('uncaughtException', function (error) {
   console.log(error);
});
const fs = require('fs');
const jsdl=require('./main');
console.log("Downloading started...");
try {
  jsdl(process.argv[2],(code)=>{
    fs.writeFileSync(process.cwd()+"/"+process.argv[2])
  })
} catch (err) {
return console.error(err.text)
}
