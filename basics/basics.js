function setBasics(){
  import('../scripts/aggregator.js')
      .then(({elAdd, addClickId, setMenu, setSounds1}) => {
        import('../introduction/introduction.css', {assert: {type:'css'}})
        .then(basics => {
          const basicsHTML =
          `<div id="heading">The Basics</div>
          <p>The Major Memory System works by giving a digit a specific sound.
          These sounds are then combined with vowels to make up a word. 
          The word will be something you can picture in your mind, like a person, or animal etc...</p>
          <p>It is these pictures that you will use to remember numbers.</p>
          <div id="back">back</div>
          <div id="next">next</div>`
  
        elAdd(AppContent, basicsHTML)
        addClickId('back', setMenu)
        addClickId('next', setSounds1)
         document.adoptedStyleSheets = [basics.default]; 
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
  setBasics,
}