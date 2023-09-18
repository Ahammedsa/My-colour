

window.onload = () =>{
    main()
}
 function main( ){
    const root = document.getElementById("root");
    const btn = document.getElementById("button");
    btn.addEventListener("click", function(){
        const bgcolor = generateRgbColour()
        root.style.backgroundColor = bgcolor ;
    })
 }
 
function generateRgbColour(){
    const red = Math.floor(Math.random() * 255);
    const black =  Math.floor(Math.random() * 255);
    const blue =  Math.floor(Math.random() * 255);
    return `rgb( ${red} , ${black} , ${blue})`
}