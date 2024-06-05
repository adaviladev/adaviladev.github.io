// // Components are the core of React. Everything in React is a component and here you will learn how to create one.

// // There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)

// // To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter. Here's an example of a stateless functional component that assigns an HTML class in JSX:

// // const DemoComponent = function() {
// //   return (
// //     <div className='customClass' />
// //   );
// // };
// // After being transpiled, the <div> will have a CSS class of customClass.

// // Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.

// // The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

// // Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.

const MyComponent = function() {
    return (
        <div className="MyComponent">Text</div>
    )
}

// //Quiz

//¿Qué es un componente en React?
  //Es la unidad básica de construcción de interfaces de usuario en React. Todo en react es un componente.
//¿Cuál es una de las dos formas de crear un componente en React?
  //Una de las formas es mediante una función de JavaScript
//¿Qué es un componente funcional sin estado en React?
  //Es un componente que recibe datos y los renderiza pero no los gestiona ni les hace seguimiento a sus cambios.
//¿Cuál es una de las reglas importantes al crear un componente con una función en React?
  //El nombre del componente debe comenzar con mayúscula. Por ejemplo: MiComponente
//¿Cuál es una ventaja clave de la arquitectura de componentes en React?
  //Que permite componer elementos de UI en forma aislada y es más facil construir  y mantener interfaces de usuario más complejas.

// //Resumen

// - Components in React:
//   - Core of React.
//   - Everything in React is a component.
//   - Two ways to create a React component:
//     - First way: using a JavaScript function.
//       - Creates a stateless functional component.
//       - Stateless component: Can receive data and render it but does not manage or track changes to the data.
//     - Second way (covered later).
//   - Creating a component with a function:
//     - Write a JavaScript function returning JSX or null.
//     - Function name must begin with a capital letter.
//   - Example of a stateless functional component:
//     ```javascript
//     const DemoComponent = function() {
//       return (
//         <div className='customClass' />
//       );
//     };
//     ```
//     After transpilation, the `<div>` will have a CSS class of customClass.
//   - JSX components represent HTML, allowing composition of complex HTML pages from multiple components.
//   - Advantage of React's component architecture:
//     - Compose UI from separate, isolated components.
//     - Easier to build and maintain complex user interfaces.
// - Challenge:
//   - Function called MyComponent needs completion.
//   - Return a single `<div>` element containing some text string.
//   - Note: Text is considered a child of the `<div>`, so self-closing tag cannot be used.