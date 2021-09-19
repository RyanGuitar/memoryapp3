function setSounds2(){
  import('../scripts/aggregator.js')
      .then(({elAdd, addClickId, setSounds1, setGameMenu}) => {
        import('../sounds2/sounds2.css', {assert: {type:'css'}})
        .then(sounds2 => {
          const sounds2HTML =
          `<div id="heading">Sounds 5 - 9</div>
          <p>We will now do the last 5 numbers 5 - 9. 
          And then we can get to the fun part - learning the images!</p>
       
      <table style="width:100%" id="table">
         <tr style="width:100%">
           <th style="width:30%">Digit</th>
           <th colspan="3" style="width:70%">Sounds</th>
         </tr>
         <tr>
           <td style="width:30%" class="number">5</td>
           <td colspan="3"><b>l</b> <sub>ow</sub></td>
        </tr>
        <tr>
          <td class="number">6</td>
          <td style="width:23.33%"><b>j</b> <sub>ump</sub></td>
          <td style="width:23.33%"><b>ch</b> <sub>urch</sub></td>
          <td style="width:23.33%"><b>sh</b> <sub>e</sub></td>
        </tr>
        <tr>
          <td class="number">7</td>
          <td><b>k</b> <sub>ick</sub></td>
          <td colspan="2"><b>g</b> <sub>ood</sub></td>
        </tr>
        <tr>
          <td class="number">8</td>
           <td><b>f</b> <sub>ee</sub></td>
           <td colspan="2"><b>v</b> <sub>ictor</sub></td>
        </tr>
        <tr>
          <td class="number">9</td>
          <td><b>p</b> <sub>ut</sub></td>
          <td colspan="2"><b>b</b> <sub>ook</sub></td>
        </tr>
      </table>
      <p id="hint">" You are almost ready to start playing the games "</p>
           <div id="next">next</div>
            <div id="back">back</div>`
            
        function showPopup(popup){
          elAdd(AppContent, popup)
        }
        
        function goBack(){
          elAdd(AppContent, sounds2HTML)
          addClickId('back', setSounds1)
          addClickId('next', setGameMenu)
          addTableListener()
        }
        
        function addTableListener(){
          addClickId('table', (e) => getRow(e))
        }
            
        function getRow(e){
          let number = e.target.textContent
          switch(number){
            case '5':{
          let popup = 
          `<div id="popup">
           <div id="heading">5 - Sound</div>
            <p>For the number <b>5</b> look at the back of your left hand (five fingers).
            Now hold your fingers together and stretch out your thumb. See how it forms a <b>L</b>-shape?
            The sound for <b>5</b> is <b>l</b><sub>ow</sub>.</p>
            <div id="back">back</div>
          </div>`
          
              showPopup(popup)
              addClickId('back', goBack)
              break;
            }
            case '6':{
           let popup = 
          `<div id="popup">
           <div id="heading">6 - Sound</div>
            <p>For the number <b>6</b> we need to get a little more creative. If you look at the number in a mirror it looks a little like a cursive <b>j</b>.
            The sounds are <b>j</b> <sub>ump</sub> and it sounds like <b>ch</b> <sub>urch</sub> and <b>sh</b> <sub>e</sub>.
            <div id="back">back</div>
          </div>`
              
            showPopup(popup)
            addClickId('back', goBack)
              break;
            }
            case '7':{
              let popup = 
          `<div id="popup">
           <div id="heading">7 - Sound</div>
            <p>For the number <b>7</b> we will need to rely on our creativity once more.
            If you look at the letter <b>k</b> see how it is made up of two <b>7</b>s? Can you see it?
            The sounds are <b>k</b> <sub>ick</sub> and <b>g</b> <sub>ood</sub>.
            <div id="back">back</div>
          </div>`
          
            showPopup(popup)
            addClickId('back', goBack)
              break;
            }
            case '8':{
          let popup = 
          `<div id="popup">
           <div id="heading">8 - Sound</div>
            <p>The number <b>8</b> is like our cursive friend number 6. 
            Notice how the number looks like a cursive <b>f</b>. 
            The sounds are <b>f</b> <sub>ee</sub> and <b>v</b> <sub>ictor</sub>.
            <div id="back">back</div>
          </div>`
          
            showPopup(popup)
            addClickId('back', goBack)
              break;
            }
            case '9':{
              let popup = 
          `<div id="popup">
           <div id="heading">9 - Sound</div>
            <p>The number <b>9</b> when viewed in a mirror looks like the letter <b>p</b>.
            The sounds are <b>p</b> <sub>ut</sub> and it sounds like <b>b</b> <sub>ook</sub>.</p>
            <p>Weldone! That is all the sounds we will need.</p>
            <div id="back">back</div>
          </div>`
          
            showPopup(popup)
            addClickId('back', goBack)
              break;
            }
            default: return
          }
        }
  
        elAdd(AppContent, sounds2HTML)
        addClickId('back', setSounds1)
        addClickId('next', setGameMenu)
        addTableListener()
         document.adoptedStyleSheets = [sounds2.default]; 
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
  setSounds2,
}