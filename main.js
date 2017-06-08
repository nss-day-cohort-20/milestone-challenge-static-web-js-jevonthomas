let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "~"];
let subButton = document.getElementsByClassName("submit_button");
console.log("Submit Button", subButton);








//This function grabs the information from both textboxes and stores those values into variables after the submit button is clicked
subButton[0].addEventListener("click", function() {
	let number = document.getElementById("tree_height").value;
	let specChar = document.getElementById("special_character").value;
		for (var i = 0; i < specialChar.length; i++) {
		 	if (number < 10 && specChar === specialChar[i]) {
				console.log("Special Character", specChar);
		 		console.log("Tree Height", number);
		 	} else {
		 		alert("Enter a number between 1 - 10, and enter a special character!");
		 	}
		};
});


