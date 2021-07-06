(function() {
    /*--変数・定数を定義--*/
    const target     = document.getElementById('header'),
          height     = 56;
    let offset       = 0,
        lastPosition = 0,
        ticking      = false;
    
    /*--関数 onScroll() を定義
    lastPosition が height（56）　より大きい場合以下の処理

      lastPosition が　offset（0）より大きい(正の値の時？)
      　真：<header> にhead-animation　を追加　、offset に lastPositionの値を代入
      　偽：<header>　からhead-animationを削除　、offset に lastPositionの値を代入
    --*/

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
    
    /*--イベント処理を実行
    画面上でスクロールされたとき

    （lastPosition は垂直方向のスクロール量）

　　　ticking が　falseではない時、以下の処理
　　　
　　　関数　onScroll　を実行　
　　　　lastPosition　を引数にする
　　　　ticking = false　にする

　　　ticking = true　にする

    --*/
　　

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