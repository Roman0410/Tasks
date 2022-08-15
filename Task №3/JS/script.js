function matrix(a) {
    const raws = a;
    const colums = a;

    const myArray = [];
    
    for (let i = 0; i < raws; i++) {
        myArray[i] = [];
        for (let j = 0; j < colums; j++) {
            myArray[i][j] = 0; 
        }
    }
    let x = 1;
    for (let i = 0; i < a; i++){
        myArray [i][0 + i] = 2;
        myArray [i][a-1-i] = 2;
        
    }
    var isFound = false;
    var midline = Math.ceil(5/2);
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            if(i != midline - 1 ){
                if (myArray[i][j] == 2){
                    if (isFound == false){
                        isFound = true
                    } else { isFound = false }
                continue;
                
                    //console.log(`2 is here [${i},${j}]`)   
                }
                
                if (isFound == true){
                    myArray[i][j] = 1;
                }
            }
        }
    console.log(myArray)
    }
}

matrix(9);