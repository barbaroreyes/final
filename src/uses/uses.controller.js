const urls = require("../data/urls-data");
const uses = require("../data/uses-data");



function list(req, res, next){
  res.status(200).json({ data: uses })
}

function read(req, res, next){
  const { useId, urlId } = req.params;

   const numUrlId = Number(urlId)

  
  
  /* This code checks if useId is in database*/
  const foundUse = uses.find((use) => use.id == useId);
  if(!foundUse){
    next({ status: 404 })
    return;
  }
  res.status(200).json({ data: foundUse });
}
function destroy(req, res, next){
  const { useId } = req.params;
  if(!useId){
    next({ status: 404 })
    return;
  }
  const foundUse = uses.find((use, index) => {
    if (use.id == useId){
      uses.slice(index, 0)
    }
  });
    res.status(204).json({ data: {}})
}

//404 in the read for no id 

module.exports = {
  list,
  read,
  destroy
  
}






function destroy(req, res, next){
  const { useId } = req.params;
  if(!useId){
    next({ status: 404 })
    return;
  }
  const foundUse = uses.find((use, index) => {
    if (use.id == useId){
      uses.slice(index, 0)
    }
  });
    res.status(204).json({ data: {}})
}

//404 in the read for no id 

module.exports = {
  list,
  read,
  destroy
  
}