function elAdd(el, add){
  return el.innerHTML = add;
}

function getId(id){
  return document.getElementById(id)
}

function addClick(el, fn){
  el.addEventListener('click', fn)
}

function addClickId(id, fn){
  getId(id).addEventListener('click', fn)
}

export {
  elAdd,
  getId,
  addClick,
  addClickId,
}