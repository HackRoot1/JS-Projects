// Square star pattern program
let string = "";

for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        string += "* ";
    }
    string += " \n";
}
console.log(string);