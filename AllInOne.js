const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user?.address?.city); 

console.log(user?.job?.title);

const config = {
  settings: {
    theme: "dark"
    
  }
};


console.log(config.settings.layout.type);

console.log(config.settings?.layout?.type); 

// 2. Arrow Functions & this
const square = n => n * n;
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); 
const obj = {
  value: 50,
  test: function () {
    console.log(this.value);
  }
};

obj.test(); 


//3. Rest, Spread & Copying Objects

const product = { name: "Pen", price: 10 };
const copy = { ...product };

console.log(copy); // { name: "Pen", price: 10 }
const a = { x: 1 };
const b = { y: 2 };

const merged = { ...a, ...b };

console.log(merged); // { x: 1, y: 2 }
const maxValue = (...nums) => Math.max(...nums);

console.log(maxValue(10, 5, 8, 20)); 


//4. Destructuring & Optional Chaining
// === a) Destructure to extract a and b from array ===
const arr = [10, 20, 30];
const [a, b] = arr;
console.log("a:", a); // 10
console.log("b:", b); // 20

// === b) Destructure the object to extract brand ===
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log("brand:", brand); // Dell

// === c) Safely access using optional chaining ===
const info = {};
console.log("info.name:", info?.name); // undefined
console.log("info.address.city:", info?.address?.city); // undefined

//5. Scoping (let/var/const)

// === a) What will this print? ===
for (var i = 0; i < 3; i++) {}
console.log("a) i:", i); // Output: 3

// Explanation:
// 'var' is function-scoped, not block-scoped.
// So 'i' is accessible outside the loop and its final value is 3.

// === b) What will this print? ===
for (let j = 0; j < 3; j++) {}
// console.log("b) j:", j); // ❌ ReferenceError: j is not defined

// Explanation:
// 'let' is block-scoped, so 'j' is not accessible outside the loop.
// Uncommenting the line above will throw an error.

// === c) Why is 'const' used for values that should not be reassigned? ===

// Explanation:
const pi = 3.14159;
// pi = 3.14; // ❌ TypeError: Assignment to constant variable

console.log("c) const value:", pi);

// 'const' ensures the variable binding cannot be reassigned.
// It’s ideal for values that should remain constant throughout the program.
