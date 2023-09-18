window.onload = () => {
    main ();
}
function main (){
  const root = document.getElementById("root");
  const btn = document.getElementById("button");
  const output = document.getElementById("output");
  btn.addEventListener("click",  function(){
   const  bgclour = generateHexColour ();
   root.style.backgroundColor = bgclour;
   output.value = bgclour;
  })
}

function generateHexColour(){
    const red = Math.floor(Math.random() * 255);
    const black =  Math.floor(Math.random() * 255);
    const blue =  Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${black.toString(16)}${blue.toString(16)}`
}