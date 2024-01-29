# Peter-David-Aringo-Portfolio
Questions

1.) What is NPM?
Node Package Manager is a package manager for JavaScript programming language. It facilitates the installation, sharing, and management of code packages or libraries for Node.js.

2.) What is SPA?
SPA stands for Single Page Application. It is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This results in a more fluid and responsive user experience.

3.) What is the event loop?
The event loop is a programming construct that continually checks for and dispatches events or messages in a program.

4.) What is the difference between export x and export default x? How do you import them differently?
The export x syntax is used to export a specific variable, function, or object from a module, while export default x is used to export a default export. When importing, export x requires curly braces for named imports, while export default x is imported without curly braces.

5.) Why do you use className as a property in React and not class?
In React, the attribute for defining CSS classes is className instead of class. This is because class is a reserved keyword in JavaScript, and using it directly in JSX would result in a syntax error. Therefore, React uses className to associate HTML elements with CSS classes.

6.) Why should you not write the following? What will happen?
<button onClick={setCounter(counter + 1)}> +1 </button>
 In the provided code, the onClick handler is directly invoking setCounter(counter + 1) when rendering. This leads to an issue as it causes the function to be called on every render instead of waiting for a button click.

7.) What is object deconstruction and how is it connected to React components (example)?
Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a concise way. In React, it is often used in function components to destructure props for easier access.
// Without destructuring
const MyComponent = (props) => {
  const name = props.name;
  const age = props.age;
  // component logic
};

// With destructuring
const MyComponent = ({ name, age }) => {
  // component logic using name and age directly
};

8.) How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
This is possible in React components through JSX, a syntax extension that looks similar to XML or HTML. JSX allows you to write HTML elements and include JavaScript expressions within curly braces. Browsers don't understand JSX directly, so it is transpiled into regular JavaScript using tools like Babel before being executed.

9.) What is async/await? Bring an example
It is a syntax in JavaScript used with functions declared with the async keyword. It provides a way to work with asynchronous code in a more synchronous fashion, making it easier to read and write.
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

10,) What is a Promise? Bring an example
 A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It has states (pending, fulfilled, or rejected) and is used to handle asynchronous operations more effectively.
 const myPromise = new Promise((resolve, reject) => {
  // asynchronous operation
  if (/* operation successful */) {
    resolve('Operation completed successfully');
  } else {
    reject('Operation failed');
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
