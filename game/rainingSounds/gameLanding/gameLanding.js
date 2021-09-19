function setGameLanding(){
import('../../../scripts/aggregator.js')
    .then(({elAdd, addClickId, setMenu, setBasics}) => {
      import('./gameLanding.css', {assert: {type:'css'}})
      .then(gameLanding => {
        const gameLandingHTML =
      `<div id="landing">
        <div id="heading">Raining Sounds</div>
        <div id="start">click to start</div>
      </div>`

      elAdd(AppContent, gameLandingHTML)
       addClickId('start', () => alert('start game'))
       document.adoptedStyleSheets = [gameLanding.default]; 
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
  setGameLanding,
}