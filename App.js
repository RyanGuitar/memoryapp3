import('./landing/landing.js')
    .then(({setLanding}) => {
    import('./landing/landing.css', {assert: {type:'css'}})
      .then(landing => {
      setLanding(); 
      document.adoptedStyleSheets = [landing.default]; 
    }).catch(err => {
      console.log(err.message);
    });
    }).catch(err => {
      console.log(err.message);
    });

    

