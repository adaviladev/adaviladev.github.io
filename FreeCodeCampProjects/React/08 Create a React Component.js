//Crear un componente de react usando clases quedaba mejor de título

// Defining React Components with ES6 Classes:
// In React, components can be defined using ES6 class syntax. This syntax provides a way to create reusable UI components with encapsulated functionality.

// Example: Kitten Component:
// Let's consider an example of defining a React component called Kitten using ES6 class syntax:

// class Kitten extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <h1>Hi</h1>
//     );
//   }
// }

// Explanation:

// Kitten extends React.Component: By extending React.Component, the Kitten class inherits various useful features from React, such as local state and lifecycle hooks.
// constructor: The constructor method is used for initializing objects created with the class keyword. In the Kitten class, the constructor calls super() to invoke the constructor of the parent class (React.Component) and initializes the component's properties.
// render(): This method defines what the component will render on the screen. In this example, it returns a simple <h1> element with the text "Hi".
// Best Practices:

// Always call the constructor of a component class with super() and pass props to it. This ensures proper initialization of the component.
// It's standard practice to include a constructor, even if it's empty, in ES6 class components.
// Applying Knowledge:

// Now, let's apply this understanding to another component called MyComponent. We need to complete the render() method of MyComponent so that it returns a <div> element containing an <h1> with the text "Hello React!".

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
      return (
        <div><h1>Hello React!</h1></div>
      )
      // Change code above this line
    }
  };

//Quiz

// ¿Qué sintaxis se utiliza en React para definir componentes utilizando clases ES6?
  //Se utiliza la sintaxsis class NombreComponente extends React.Component { ... }
// ¿Qué hereda una clase de componente al extender React.Component en React?
  //Cosas como estado local y los hooks de ciclos de vida
// ¿Para qué se utiliza el método constructor en una clase de componente en React?
  //El método constructor se utiliza para inicializar los objetos creados con la palabra clave class. En react se usa para llamar a super() y pasarle props para inicializar las propiedades del componente.
// ¿Qué método define qué renderizará el componente en la pantalla en React?
  //El método render() define qué renderizará a la pantalla. Retorna los elementos JSX del componente.
// ¿Cuál es una buena práctica al definir clases de componentes en React con ES6?
  //Siempre llamar al constructor de una clase de componente con super() y pasarle props para garantizar una inicialización adecuada del componente.