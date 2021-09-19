function setSounds1(){
  import('../scripts/aggregator.js')
      .then(({elAdd, addClickId, setMenu, setSounds2}) => {
        import('../sounds1/sounds1.css', {assert: {type:'css'}})
        .then(sounds1 => {
          const sounds1HTML =
          `<div id="heading">Sounds 0 - 4</div>
          <p>We will start with the first 5 sounds: 0 - 4. The important thing to note here is that we are working with the sounds of words and not the spelling.         
          So the sound will be given like <b>z</b> <sub>ero</sub> which means the z-sound in the word zero.</p>
       
      <table style="width:100%" id="table">
         <tr style="width:100%">
           <th style="width:30%">Digit</th>
           <th colspan="2" style="width:70%">Sounds</th>
         </tr>
         <tr>
           <td style="width:30%" class="number">0</td>
           <td style="width:35%"><b>s</b> <sub>o</sub></td>
           <td style="width:35%"><b>z</b> <sub>ero</sub></td>
        </tr>
        <tr>
          <td class="number">1</td>
          <td><b>t</b> <sub>o</sub></td>
          <td><b>d</b> <sub>o</sub></td>
        </tr>
        <tr>
          <td class="number">2</td>
          <td colspan="2"><b>n</b> <sub>o</sub></td>
        </tr>
        <tr>
          <td class="number">3</td>
          <td colspan="2"><b>m</b> <sub>e</sub></td>
        </tr>
        <tr>
          <td class="number">4</td>
          <td colspan="2"><b>r</b> <sub>ow</sub></td>
        </tr>
      </table>
      <p id="hint">" Click a number for more information "</p>
           <div id="next">next</div>
            <div id="back">back</div>`
            
        function showPopup(popup){
          elAdd(AppContent, popup)
        }
        
        function goBack(){
          elAdd(AppContent, sounds1HTML)
          addClickId('back', setMenu)
          addClickId('next', setSounds2)
          addTableListener()
        }
        
        function addTableListener(){
          addClickId('table', (e) => getRow(e))
        }
            
        function getRow(e){
          let number = e.target.textContent
          switch(number){
            case '0':{
          let popup = 
          `<div id="popup">
           <div id="heading">0 - Sound</div>
            <p>When you see the number <b>0</b> think of the word <i>zero</i>.
            The sound <b>z</b> <sub>ero</sub> sounds like <b>s</b> <sub>o</sub>.</p>
            <div id="back">back</div>
          </div>`
          
              showPopup(popup)
              addClickId('back', goBack)
              break;
            }
            case '1':{
           let popup = 
          `<div id="popup">
           <div id="heading">1 - Sound</div>
            <p>The number <b>1</b> has a single downward stroke like the letter <b>T</b>.
            The sound is <b>t</b> <sub>o</sub> and it sounds like <b>d</b><sub>o</sub>.
            <div id="back">back</div>
          </div>`
              
            showPopup(popup)
            addClickId('back', goBack)
              break;
            }
            case '2':{
              let popup = 
          `<div id="popup">
           <div id="heading">2 - Sound</div>
            <p>The number <b>2</b> has a two downward strokes like the letter <b>n</b>.
            The sound is <b>n</b><sub>o</sub>.
            <div id="back">back</div>
          </div>`
          
            showPopup(popup)
            addClickId('back', goBack)
              break;
            }
            case '3':{
          let popup = 
          `<div id="popup">
           <div id="heading">3 - Sound</div>
            <p>The number <b>3</b> turned on its side looks likes the letter <b>m</b>.
            The sound is <b>m</b><sub>e</sub>.
            <div id="back">back</div>
          </div>`
          
            showPopup(popup)
            addClickId('back', goBack)
              break;
            }
            case '4':{
              let popup = 
          `<div id="popup">
           <div id="heading">4 - Sound</div>
            <p>When you think of the number <b>4</b> then think of the word <i>four</i>.
            The fourth letter of the word <i>four</i> is <b>r</b>.
            The sound is <b>r</b><sub>ow</sub>.
            <div id="back">back</div>
          </div>`
          
            showPopup(popup)
            addClickId('back', goBack)
              break;
            }
            default: return
          }
        }
  
        elAdd(AppContent, sounds1HTML)
        addClickId('back', setMenu)
        addClickId('next', setSounds2)
        addTableListener()
         document.adoptedStyleSheets = [sounds1.default]; 
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
  setSounds1,
}