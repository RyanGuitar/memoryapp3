function setGameIntro(){
import('../../../scripts/aggregator.js')
    .then(({elAdd, addClickId, setMenu, setBasics, setGameLanding}) => {
      import('./gameIntro.css', {assert: {type:'css'}})
      .then(introduction => {
        const gameIntroHTML =
        `<div id="heading">Raining Sounds</div>
          <p>The objective of this game is to prevent the falling letter-sounds from hitting the ground.
          You do this by clicking on the number that matches the letter-sound closest to the ground.</p>
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