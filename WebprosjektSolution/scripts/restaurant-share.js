const shareBtn = document.querySelector("#share");

// illustrate a sharing fucntionability
let parameters = "menubar=no,toolbar=no,status=no,width=570,height=570";

shareBtn.addEventListener("click", function () {
	let shareurl = `https://twitter.com/intent/tweet?data`;
	window.open(shareurl, "NewWindow", parameters);
})