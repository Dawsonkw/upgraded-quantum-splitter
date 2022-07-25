//----------------------
//Constants
//----------------------
const button = document.querySelector("button")
const procedent = "The universe has been split, and your choice is to "
const antecedent = ". Remember, you must adhere to this decision or there may be unintended consequences."
const prompt1 = prompt("In one universe, I will now: ")
const prompt2 = prompt("In the other one, I will now:")

//-----------------------------------------
//FETCH Functions
//-----------------------------------------

button.addEventListener("click", () => {
    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=1') // Fetch makes call to api
    .then(response => response.json()) // Reads response and returns a promise that resolves to json
    .then(data => remainder(data.data)) // data.data is logging the value received from the API in the array to the console.
    .catch(error => console.log("There appears to have been an error", error))
});
    
//-----------------------------------
//Helper Functions
//-----------------------------------

// function takes the modulo of the value and returns remainder or no remainder
// if remainder then quantum state 1 if no remainder then quantum state 0
function remainder(data) {
    if(data[0] % 2 === 0) {
        document.getElementById("updaterSpot").innerHTML = procedent + prompt1 + antecedent;          
    } else {
        document.getElementById("updaterSpot").innerHTML = procedent + prompt2 + antecedent;           
    }
};


function buttonHide(hide) {
    hide.style.display = "none"                 // hides button after press so event
};                                              // does not trigger repeatedly            




