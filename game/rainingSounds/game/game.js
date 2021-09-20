function setRainGame(){
    import('../../../scripts/aggregator.js')
      .then(({elAdd, getId, rainData}) => {
        import('./game.css', {assert: {type:'css'}})
        .then(rainGame => {
            let score = 0;
            let rank = "Private"
            let message = "'Click on number that matches the first sound'"
            let rainGameHTML = `<div id="score">score : <span id="newScore">0</span></div><div id="rank">Rank : <span id="newRank">Private</span></div><div id="message">${message}</div><div id="sounds"></div><div id="buttons"></div>`
            let sound = ''
            let timer = ''
            let AppContent = getId('AppContent')
            elAdd(AppContent, rainGameHTML)

        function addToSoundArray(){
          if(document.getElementById('sounds').children.length < 20){
          let randomSound = Math.floor(Math.random() * 16)
          console.log(document.getElementById('sounds').children.length)
          let addedSounds = document.getElementById('sounds').innerHTML
          let addSound = `<div class='${rainData[randomSound][1]}'>${rainData[randomSound][0]}</div>` 
          let soundGroup = addSound + addedSounds
          getId('sounds').innerHTML = soundGroup
          clearTimeout(timer)
          timer = setTimeout(addToSoundArray, 1500)
          } else {
            document.getElementById('message').textContent = `You loose ! ! !`
          }
        }

        addToSoundArray()

         function removeSound(){
          sound = getId('sounds').children 
          sound[sound.length - 1].remove()
         }
          
         function checkSound(e){
            sound = getId('sounds').children
            if(sound[sound.length - 1].className == e.target.id[1]){
              removeSound()
              score = score + 5
              if (score > 100){

              }
              document.getElementById('newScore').textContent = score;
              document.getElementById('message').textContent = `Good job`
            } else {
              score = score - 5
              document.getElementById('message').textContent = `Wrong`
              document.getElementById('newScore').textContent = score;
            }
          }

          let buttonArray = [0,1,2,3,4,5,6,7,8,9]
          
          function setButtons(){
              let buttons = ''
              for (let i = 0;i < buttonArray.length;i++){
                buttons += `<button id="b${buttonArray[i]}">${buttonArray[i]}</button>`
              }

              getId('buttons').innerHTML = buttons
              let buttonChildren = getId('buttons').children

              for(let i = 0;i < buttonChildren.length;i++){
                  buttonChildren[i].addEventListener('click', (e) => checkSound(e))
              }
          }
          
          setButtons()

           document.adoptedStyleSheets = [rainGame.default]; 
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
    setRainGame,
  }