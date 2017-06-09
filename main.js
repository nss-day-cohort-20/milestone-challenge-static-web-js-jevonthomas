let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "~"];
let subButton = document.getElementsByClassName("submit_button");








//This function grabs the information from both textboxes and stores those values into variables after the submit button is clicked
subButton[0].addEventListener("click", function() {
	let number = document.getElementById("tree_height").value;
	let specChar = document.getElementById("special_character").value;
		for (var i = 0; i < specialChar.length; i++) {
		 	if (number < 10 && specChar === specialChar[i]) {
		 		return preference(number, specChar);
		 	} 
		};
});



//Takes user input and creates a single object with two key/value properties
function preference(height, character) {
	let treeDescription = {};
	treeDescription.height = height;
	treeDescription.character = character;
	return treeDescription;
};

function tree(treeDescription) {
	for (var i = 0; i <= treeDescription.height; i++) {
		console.log(treeDescription.character);
	}
};
