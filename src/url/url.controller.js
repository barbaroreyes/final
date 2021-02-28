const urls = require("../data/urls-data")
const uses = require("../data/uses-data")

function recorded(req, res, next){
   const  urlId  = Number(req.params.urlId);
   const record = {
    id: uses.length + 1,
    time: Date.now(),
    urlId
  }
     uses.push(record)
     next()
}

function read(req, res, next){
  const { urlId } = req.params;
  const foundId = urls.find((url) => url.id == urlId);
  if(!foundId){
    next({ status: 404 })
  }
  res.status(200).json({ data: foundId })
}


function put(req, res, next){
  const { data: { href, id } } = req.body
 
  const foundId = urls.find((url) => url.id == id);
  if(foundId === undefined){
    next({ status: 404 })
  }
  foundId["href"] = href;
  foundId["id"] = id
  urls.push(foundId)
  console.log(foundId)
  res.status(200).json({ data: foundId })
}

function list(req, res, next){  
  res.status(200).json({ data: urls })
}

function create(req, res, next){
 const  { data: { href } }  = req.body;
  console.log(href, req.body, "tests")
  if (!href){
    next() 
  }
  const id = urls.length += 1;
  const newUrlData = {
    href,
    id: id
  };
   urls.push(newUrlData)
   res.status(201).json({ data: newUrlData })
}

function checkUrlId(req, res, next){
  const { urlId } = req.params;
  const foundId = urls.find((url) => url.id == urlId);
  if(!foundId){
    next({ status: 404, message: urlId})
  }
  next()
}








module.exports = {
  list:  list,
  create: create,
  read: [recorded, read],
  put: put,
  checkUrlId
}