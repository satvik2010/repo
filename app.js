const charVal = document.getElementById("textarea");
let totalchar = document.getElementById("charcount");
let remainingVal=document.getElementById("char-count");

let char = 0
charVal.addEventListener("keyup", () => updatecounter())

const updatecounter = () =>{
    userChar= charVal.value.length;
    console.log(char);
    totalchar.innerHTML = userChar;
    remainingVal.innerHTML = 150-charVal.value.length;
}

const copyText = () => {
charVal.select();
charVal.setSelectionRange(0 ,9999);
navigator.clipboard.writeText(charVal.value);
alert("Text Copied")
}

fetch("https://grammarbot.p.rapidapi.com/check", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "grammarbot.p.rapidapi.com",
		"x-rapidapi-key": "null"
	},
	"body": {
		"text": "Susan go to the store everyday",
		"language": "en-US"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});