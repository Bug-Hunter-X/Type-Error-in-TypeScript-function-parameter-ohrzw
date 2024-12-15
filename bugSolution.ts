function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access the first element of the array
console.log(greeter(user[0]));

// Solution 2: Modify the function to accept an array
function greeterArray(people: string[]): string {
    return "Hello, " + people.join(' ');
}
console.log(greeterArray(user));

// Solution 3: Type Assertion (Use with caution)
console.log(greeter(user as string)); // This bypasses type checking, use only if you're certain of the data type