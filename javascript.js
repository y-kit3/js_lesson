(function() {
    const target     = document.getElementById('header'),
          height     = 56;
    let offset       = 0,
        lastPosition = 0,
        ticking      = false;
        
    function onScroll() {
      if (lastPosition > height) {
        if (lastPosition > offset) {
          target.classList.add('head-animation');
        } else {
          target.classList.remove('head-animation');
        }
        offset = lastPosition;
      }
    }
    
    window.addEventListener('scroll', function(e) {
      lastPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          onScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }

      console.log(onScroll);
      console.log (offset);
      console.log (lastPosition);
      console.log (ticking);

    });
  })();