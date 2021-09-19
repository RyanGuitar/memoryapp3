function setMenu(){
  import('../scripts/aggregator.js')
    .then(({getId, elAdd, addClickId, setIntroduction, setSounds1, setBasics, setSounds2, setGameMenu}) => {
      import('./menu.css', {assert: {type:'css'}})
      .then(menu => {
        const menuHTML = 
        `<div id="heading">Main Menu</div>
        <div id="menu">
          <div id="introduction">Introduction</div>
          <div id="basics">The Basics</div>
          <div id="sounds1">Sounds 0 - 4</div>
          <div id="sounds2">Sounds 5 - 9</div>
          <div id="gameMenu"><b>Game Menu</b></div>
        </div>`

       let AppContent = getId('AppContent')
       elAdd(AppContent, menuHTML)
       addClickId('introduction', setIntroduction)
       addClickId('basics', setBasics)
       addClickId('sounds1', setSounds1)
       addClickId('sounds2', setSounds2)
       addClickId('gameMenu', setGameMenu)
       document.adoptedStyleSheets = [menu.default]; 
      })
      .catch(err => {
        console.log(err.message);
      });
    })
    .catch(err => {
      console.log(err.message);
    });
}

export {
  setMenu,
}