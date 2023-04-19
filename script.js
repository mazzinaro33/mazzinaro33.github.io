function seeMore(){
	let paragraph=document.getElementById("about");
	let anything=document.getElementById("dog");
	if(paragraph.classList.contains("hidden")){
	paragraph.classList.remove("hidden");
	anything.innerHTML="See Less...";
}
else{
	paragraph.classList.add("hidden");
	anything.innerHTML="See More...";
}
}
function seesMore(){
	let paragraphs=document.getElementById("future");
	let anythings=document.getElementById("cat");
	if(paragraphs.classList.contains("hidden")){
	paragraphs.classList.remove("hidden");
	anythings.innerHTML="See Less...";
}
else{
	paragraphs.classList.add("hidden");
	anythings.innerHTML="See More...";
}
}
function showScore(){
	let sectionDetails=document.getElementById("details").value;
	let first=document.getElementById("first");
	let second=document.getElementById("second");
	let third=document.getElementById("third");
	let fourth=document.getElementById("fourth");
	let css=document.getElementById("txt-css").value;
	let padding=document.getElementById("txt-padding").value;
	let value=document.getElementById("txt-value").value;
	let strong=document.getElementById("txt-strong").value;
	let score=document.getElementById("score");
	let count=0;
		
	details.classList.remove("hidden");
	
	if(css=="Cascading Style Sheets"){
		document.getElementById("first").innerHTML="Question 1-"+" Correct"; count=count+1;
	}
	else if(css=="Creative Style Sheets"){
		document.getElementById("first").innerHTML="Question 1-"+" Incorrect";
	}
	else if(css=="Coloring Style Sheets"){
		document.getElementById("first").innerHTML="Question 1-"+" Incorrect";
	}
	else if(css=="Computer Style Sheets"){
		document.getElementById("first").innerHTML="Question 1-"+" Incorrect";
	}

	if(padding=="All of the above"){
		document.getElementById("second").innerHTML="Question 2-"+" Correct";count=count+1;
	}
	else if(padding=="Tables"){
		document.getElementById("second").innerHTML="Question 2-"+" Incorrect";
	}
	else if(padding=="Buttons"){
		document.getElementById("second").innerHTML="Question 2-"+" Incorrect";
	}
	else if(padding=="Nav"){
		document.getElementById("second").innerHTML="Question 2-"+" Incorrect";
	}
	else if(padding=="Main"){
		document.getElementById("second").innerHTML="Question 2-"+" Incorrect";
	}
	
	if(value=="Value"){
		document.getElementById("third").innerHTML="Question 3-"+" Correct";count=count+1;
	}
	else if(value=="Receive"){
		document.getElementById("third").innerHTML="Question 3-"+" Incorrect";
	}
	else if(value=="Text"){
		document.getElementById("third").innerHTML="Question 3-"+" Incorrect";
	}
	else if(value=="Attach"){
		document.getElementById("third").innerHTML="Question 3-"+" Incorrect";
	}
	
	if(strong=="Bold"){
		document.getElementById("fourth").innerHTML="Question 4-"+" Correct";count=count+1;
	}
	else if(strong=="Underline"){
		document.getElementById("fourth").innerHTML="Question 4-"+" Incorrect";
	}
	else if(strong=="Italics"){
		document.getElementById("fourth").innerHTML="Question 4-"+" Incorrect";
	}
	else if(strong=="Nothing"){
		document.getElementById("fourth").innerHTML="Question 4-"+" Incorrect";
	}
	let score1="Score: "+count+"/4";
	document.getElementById("score").innerHTML=score1;
}

setInterval(changeSlide,5000);
function changeSlide(){
	let a=document.getElementById("light");
	let b=document.getElementById("minnie");
	let c=document.getElementById("nana");
	let d=document.getElementById("tori");
	let e=document.getElementById("kennedy");
	
	if(!a.classList.contains("hidden")){
		a.classList.add("hidden");
		b.classList.remove("hidden");
	}
	else if(!b.classList.contains("hidden")){
		b.classList.add("hidden");
		c.classList.remove("hidden");
	}
	else if(!c.classList.contains("hidden")){
		c.classList.add("hidden");
		d.classList.remove("hidden");
	}
	else if(!d.classList.contains("hidden")){
		d.classList.add("hidden");
		e.classList.remove("hidden");
	}
	else if(!e.classList.contains("hidden")){
		e.classList.add("hidden");
		a.classList.remove("hidden");
	}
}