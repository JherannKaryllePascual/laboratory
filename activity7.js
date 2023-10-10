//prompt for user input
var inputpass = prompt("Enter password:");
const password = "p@sswOrd@2023";

//conditon for password validity
if(inputpass.length >= 8 || inputpass.includes("p@sswOrd@2023")){

console.log("Valid password");

}else{
    console.log("Invalid password");
}
