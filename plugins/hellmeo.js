javascript:(function() {
  var stylesNew = document.createElement("style");
  stylesNew.innerText = "body { background-color: #990000; transition: background-color 10s !important; } button, .cstpgbt, input[type='button'], input[type='submit'], input[type='reset'], input[type='image'], textarea { border: solid 15px #660000 !important; background-color: #ff0000 !important; color: #000000 !important; font-family: 'Creepster', cursive !important; font-size: 28px !important; padding: 20px !important; border-radius: 30px !important; box-shadow: 8px 8px 8px #666666 !important; text-transform: none !important; letter-spacing: 2px !important; transform: scale(1.1) rotate(0deg) !important; transition: background-color 0.3s, color 0.3s, border-radius 0.3s, transform 0.3s, font-family 0.3s, text-transform 0.3s !important; } button:hover, .cstpgbt:hover, input[type='button']:hover, input[type='submit']:hover, input[type='reset']:hover, input[type='image']:hover, textarea:hover { background-color: #8B0000 !important; color: #FF0000 !important; border-radius: 10px !important; transform: scale(1.5) rotate(360deg) !important; font-family: 'Creepster', cursive !important; box-shadow: 10px 10px 10px #666666 !important; text-transform: uppercase !important; } button:not(:hover), .cstpgbt:not(:hover), input[type='button']:not(:hover), input[type='submit']:not(:hover), input[type='reset']:not(:hover), input[type='image']:not(:hover), textarea:not(:hover) { transition: transform 0.3s, font-family 0.3s, text-transform 0.3s !important; transform: none !important; font-family: 'Creepster', cursive !important; text-transform: none !important; } input[type='checkbox'] { appearance: none; width: 50px; height: 50px; border: solid 20px #660000; background-color: #8B0000; border-radius: 25px; transition: background-color 0.3s, border-radius 0.3s, transform 0.3s; transform: rotate(20deg); } input[type='checkbox']:checked { background-color: #FF0000 !important; } input[type='checkbox']:hover { background-color: #8B0000; border-radius: 40px; transform: rotate(45deg); } div:not(div div) { border: solid 10px #ff00ff; background-color: #00ffff; color: #ff3333; font-family: 'Creepster', cursive; font-size: 14px; padding: 15px; border-radius: 15px; box-shadow: 5px 5px 5px #666666; text-transform: none !important; letter-spacing: 2px !important; transform: scale(1.1) !important; }";
  document.head.appendChild(stylesNew);
})();
