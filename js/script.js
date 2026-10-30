jQuery(document).ready(function($){
  (function(){
    var btn=document.querySelector('.menu-btn'),nav=document.getElementById('gnav');
    function set(open){nav.classList.toggle('is-open',open);btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');}
    btn.addEventListener('click',function(){set(!nav.classList.contains('is-open'));});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('is-open')){set(false);btn.focus();}});
  })();
});
