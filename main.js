let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "~"];
let subButton = document.getElementsByClassName("submit_button");

//An empty string for the special characters to go into
var buildingBlocks = "";


//This function grabs the information from both textboxes 
//stores those values into variables after the submit button is clicked
//Calls the next function with the inputs as its arguments
subButton[0].addEventListener("click", function() {
	let height = document.getElementById("tree_height").value;
	let specChar = document.getElementById("special_character").value;
	preference(height, specChar);
});

//This function takes the user inputs and turns them into a single object with two key/value properties
function preference(height, character) {
	let treeDescription = {};
	treeDescription.height = height;
	treeDescription.character = character;
	tree(treeDescription);
};

function tree(treeDescription) {
	for (var i = 0; i <= treeDescription.height; i++) {
		buildingBlocks += (treeDescription.character);
		if (i === 0 || i % 2 === 0) {	
		console.log(buildingBlocks);
		};
	}
};
