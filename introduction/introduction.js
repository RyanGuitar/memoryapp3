function setIntroduction(){
import('../scripts/aggregator.js')
    .then(({elAdd, addClickId, setMenu, setBasics}) => {
      import('../introduction/introduction.css', {assert: {type:'css'}})
      .then(introduction => {
        const landingHTML =
        `<div id="heading">Introduction</div>
          <p>The Major Memory System is a memory technique used to remember numbers and ordered lists. 
          The same techniques can be used to teach you how to remember anything.</p>
          <div id="back">back</div>
          <div id="next">next</div>`

      elAdd(AppContent, landingHTML)
      addClickId('back', setMenu)
      addClickId('next', setBasics)
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
  setIntroduction,
}