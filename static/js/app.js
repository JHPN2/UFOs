// This is where we'll keep the code that builds the HTML table and fills it with data from data.js

// The table we generate with JS.
// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody") // <-- 1.) Declare a variable, 'tbody'
                               //     2.) Use 'd3.select' to tell JS to look for the <tbody> tags in the HTML


// FUNCTIONS PRACTICE!                               
// // ******************************
// // Example code:
// // Take two numbers and adds them
// function addition(a,b){ // <-- the items within the () are reerred to as parameters
//     return a + b;
// }

// console.log(addition(4,5));

// // or...

// addition(4,5); // <-- condensed version

// // ******************************
// // Example code: (Arrow Functions)
// // Simple JS log statement
// function printHello(){
//     return "Hello There!";
// }

// // ... same as...
// printHello = () => "Hello There!"; // <-- the arrow symbol (=>) indicates that this block (or line) of code is a function

// // ******************************
// // Example code: (More Arrow Functions)
// // Original addition function
// function addition(a, b){
//     return a + b;
// }

// // Converted to arrow function
// addition = (a, b) => a + b;

// // ******************************
// // Example code: (Yet MORE Arrow Functions)
// // Original doubleAddition function
// function doubleAddition(c, d){
//     var total = addition(c, d) * 2;
//     return total;
// }

// // Converted to arrow function
// doubleAddition = (c, d) => addition(c, d) * 2; 

// // ******************************
// // For Loops
// // Starting Array
// let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// function listLoop(userList){
//     for(var i = 0; i < userList.length; i++){
//         console.log(userList[i]);
//     }
// }

// listLoop(friends); // <-- prints array

// // ******************************

function buildTable(data){
    tbody.html(""); // <-- 'tbody.html' references the table, pointing JS directly
                    //     to the table; in other words, create a blank canvas.

    // Next, loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr"); // <-- let is used instead of var because this
                                      //     variable is limited to just this block of code
                                      //     instead of being available globally. This
                                      //     block of code tell JS to find '<tbody>' within
                                      //     HTML abd add a table row 'tr'.
                                      //    *Note: each object in the array will be wrapped
                                      //     in a <tr> tag.
        
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => { // <-- Object.values tells JS to reference one object form the array,
            let cell = row.append("td");          //     adding (dataRow) as the argument, we are saying that we want
            cell.text(val);                       //     the values to go into the dataRow.                                     
            }
        );
    });
}






