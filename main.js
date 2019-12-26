module.exports=(libname,cb)=>{
  let request=require("request")
  request.get("https://repo.l.co.ua/"+libname,(err,res)=>{
    if(err){
      throw "Error while connecting to server."
    }else
    if(res.statusCode==404){
      throw "Library not found."
    } else
    if(res.statusCode!=200){
      throw "Server returned incorrect status code"
    } else {
      cb(res.body)
    }

  })
}
