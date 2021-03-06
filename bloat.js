function loadlights(){
  var x = document.cookie;

  if (x == "lights=off"){
    document.documentElement.style.setProperty('--text', '#FFFFFF');
    document.documentElement.style.setProperty('--nottext', '#000000');

  } else {
    document.documentElement.style.setProperty('--text', '#000000');
    document.documentElement.style.setProperty('--nottext', '#FFFFFF');
  }
}

function togglelights(){
  var x = document.cookie;
  
  if (x == "lights=off"){
  	document.cookie = "lights=on; path=/cookbox";
  } else {
  	document.cookie = "lights=off; path=/cookbox";
  }
  loadlights();
}

loadlights();
