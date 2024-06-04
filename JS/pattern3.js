
// method 1:
// Right triangle pattern

let string = "";

for(var i = 0; i < 10; i++){              
    for(var j = 10; j > 0; j--){          
        if(j <= i){
            string += "* ";
        }else{
            string += "  ";
        }
    }
    string += "\n";
}


console.log(string);

