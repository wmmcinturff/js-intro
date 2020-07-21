//console.log("Arrays!")

//SPLIT

//const bestFriend = "Trinity, Remle, Olivia"; 

//const bestFriendArray = bestFriend.split(",");

//console.log("My best friend in array format", bestFriendArray)

//JOIN
//const array2 = ["cow", "dog", "gerbil"];
//const string = array2.join(", ")
//console.log(string.split(", "))

//POP

//const animals = ["cow", "dog", "gerbil"];

//const lastAnimal = animals.pop();
//console.log("animals", animals);

//animals.unshift("bear");
//console.log(animals);

//animals.push("hamster");
//console.log(animals);

//const arrayAndIndex = (array, index) => {
    //return array[index]; 
//}

//console.log(arrayAndIndex([animals,], 3));


const names = ["Alex", "Steve", "Gina"] 

const nameInArray = (names) => {
    if (names.includes("Greg") ) {
    return 'Hi, Greg!' 
}
    else {
    return 'Where is Greg?'
} 
}
console.log(nameInArray(names));
