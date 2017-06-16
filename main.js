//This function grabs the information from both textboxes 
//stores those values into variables after the submit button is clicked
//Calls the next function with the inputs as its arguments
let subButton = document.getElementsByClassName("submit_button");
subButton[0].addEventListener("click", function() {
	let height = document.getElementById("tree_height").value;
	let specChar = document.getElementById("special_character").value;
	preference(height, specChar);
});

//This function allows for the user to press enter after typing into the textboxes
window.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
    	let height = document.getElementById("tree_height").value;
			let specChar = document.getElementById("special_character").value;
			preference(height, specChar);
    }
});

//This function takes the user inputs and turns them into a single object with two key/value properties
function preference(height, character) {
	let treeDescription = {};
	treeDescription.height = height;
	treeDescription.character = character;
	tree(treeDescription);
};


//The tree function that accepts a single argument with two key/value pairs
//and builds a pine tree
function tree(treeDescription) {
	//Allows storage of increased number of special characters
	let buildingBlocks = treeDescription.character;
	//Allows storage of decreased number of spaces 
	let spaces = "";
	//If statement to test whether both fields have had text input
	if (treeDescription.character !== "" && treeDescription.height !== "") {
		//for loop that loops as many times as depicted by user input
		for (let i = 0; i < treeDescription.height; i++) {
			//Initially store in a variable a number of spaces equal to the height number minus 1
			//Decrease the amount of spaces by 1 after each full function interval
			for (let j = 0; j < treeDescription.height - i; j++) {
				spaces += " ";
			}
			//logs the stored amount of spaces and buildingBlocks after each full iteration
			console.log(spaces + buildingBlocks);
			//increases buildingBlocks by 2 after each full iteration
			buildingBlocks += treeDescription.character + treeDescription.character;
			//returns spaces to equal no spaces after each full iteration
			spaces = "";
		}
	} else {
		alert("Both fields must have a value");
	}
};

