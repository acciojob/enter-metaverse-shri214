//your JS code here. If required.
// function myFunction() {
// 	var para=document.querySelector("#status");
// 	para.innerHTML=`<h1>Entered Metaverse`;
// 	// para.style.cssText = "font-size:55px;font-weight:bold;"	
// }
let btn=document.querySelector("#enterBtn");
btn.addEventListener("click", ()=>{
	var para=document.querySelector("#status");
	para.innerHTML=`<h1>Entered Metaverse`;
})