function setGameIntro(){
import('../../../scripts/aggregator.js')
    .then(({elAdd, addClickId, setMenu, setGameLanding}) => {
      import('./gameIntro.css', {assert: {type:'css'}})
      .then(introduction => {
        const gameIntroHTML =
        `<div id="heading">Growing Sounds</div>
          <p>The object of this game is to click on the number that matches the first sound. 
          If the sounds list becomes to big you loose. Sounds will be added quicker and quicker the longer you play.
          The goal is to be able to clear all the sounds at maximum speed.</p>
          <div id="back">back</div>
          <div id="next">next</div>`

      elAdd(AppContent, gameIntroHTML)
      addClickId('back', setMenu)
      addClickId('next', setGameLanding)
       document.adoptedStyleSheets = [introduction.default]; 
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
  setGameIntro,
}