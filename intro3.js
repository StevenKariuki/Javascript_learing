const person = {
    name: "Steven",
    age: 20,
    school: "Muranga",
    game:"Basketball"
}
console.log(person);
console.log(person.age)
console.log(person.name)

const person1 = {
    name :"Steven",
    age :20-30
}
const person2 = {
    name :"kim",
    age : 10-19
}
function suggestMusic(person){
    if(person.ageRange === 20-30){
        console.log("Listen to Roddy rich.Nice vibe");
    }else if(person.ageRange){
        console.log("Listen to charlie Puth");
    }else("Listen to Fave")
}
suggestMusic(person1)
suggestMusic(person2)