function duplicate(letters){
    //console.log(letters);
    const newArray = []
    for(const letter of letters){
        if(newArray.indexOf(letter) == -1){
            newArray.push(letter)
        }
    }
    return newArray
}

const letters= ['a','b','c','d','e','a','e','c','f','g','d']
const result = duplicate(letters)
console.log(result);