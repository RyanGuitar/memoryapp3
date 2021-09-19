function setGameMenu(){
  import('../scripts/aggregator.js')
      .then(({elAdd, addClickId, setMenu, getId, setGameIntro}) => {
        import('../menu/menu.css', {assert: {type:'css'}})
        .then(gameMenu => {
          const gameMenuHTML =
        `<div id="heading">Game Menu</div>
          <div id="menu">
            <div id="rainingGame">Raining Sounds</div>
            <div id="mainMenu"><b>Main Menu</b></b>
          </div>`
        
        let AppContent = getId('AppContent')
        elAdd(AppContent, gameMenuHTML)
        addClickId('rainingGame', setGameIntro)
        addClickId('mainMenu', setMenu)
         document.adoptedStyleSheets = [gameMenu.default]; 
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
  setGameMenu,
}
