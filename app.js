const title = document.getElementById("title");
const author = document.getElementById("author");
const submit = document.getElementById("submit");
const header = document.getElementById("header");


submit.addEventListener("click", function(e) {
    header.innerHTML = title.value;
    e.preventDefault();
})

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greeting() {
//         return `Hello ${this.firstName} ${this.lastName}`
//     }
//     gotMarried(lastNameChange) {
//         this.lastName = lastNameChange;
//     }
// }



// const person1 = new Person("Corey", "Hiben")