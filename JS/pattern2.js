// Hollow square pattern

var string = "";

for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        if(i == 0 || i == 9 || j == 0 || j == 9){
            string += "* ";
        }else{
            string += "  ";
        }
    }
    string += "\n";
}

console.log(string);