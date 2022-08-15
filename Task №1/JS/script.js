var count = 0;

function myfunction()
    
{
    if (count < 9){
        count++;
        console.log( `Function was caled ${count} times`)
    
    } else {
        clearInterval(intervalId);
    } 
}   
intervalId = setInterval(myfunction, 1000);

myfunction();

