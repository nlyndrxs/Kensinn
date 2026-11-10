(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('gnav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('is-open');btn.setAttribute('aria-expanded',o?'true':'false');btn.setAttribute('aria-label',o?'メニューを閉じる':'メニューを開く');});}
  var box=document.getElementById('lightbox');if(!box)return;
  var big=box.querySelector('.big'),cap=box.querySelector('p');
  document.querySelectorAll('[data-zoom]').forEach(function(b){
    b.addEventListener('click',function(){big.textContent=b.getAttribute('data-zoom')+'（拡大画像）';cap.textContent=b.getAttribute('data-zoom');
      if(box.showModal)box.showModal();else box.setAttribute('open','');});
  });
  box.querySelector('[data-close]').addEventListener('click',function(){box.close();});
  box.addEventListener('click',function(e){if(e.target===box)box.close();});
  var h=location.hash;if(h&&/^#work-/.test(h)){var t=document.querySelector(h+' button');if(t)t.focus();}
})();
