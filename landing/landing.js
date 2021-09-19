function setLanding(){
  import('../menu/menu.js')
    .then(({setMenu}) => {
  function elAdd(el, add){
    return el.innerHTML = add;
  }
  
  function getId(id){
    return document.getElementById(id)
  }
  
  function addClickId(id, fn){
    getId(id).addEventListener('click', fn)
  }

  const landingHTML =
    `<div id="landing">
      <div id="heading">Major Memory Trainer</div>
        <div id="start">click to start</div>
      </div>`
      let AppContent = getId('AppContent')
      elAdd(AppContent, landingHTML)
      addClickId('landing', setMenu);
  })   
  .catch(err => {
    console.log(err.message);
  });
}

export {
  setLanding,
}