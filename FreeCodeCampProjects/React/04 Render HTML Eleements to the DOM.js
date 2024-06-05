// So far, you've learned that JSX is a convenient tool to write readable HTML within JavaScript. With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.

// ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode), where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.

// As you would expect, ReactDOM.render() must be called after the JSX element declarations, just like how you must declare variables before using them.

// The code editor has a simple JSX component. Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.

const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line
  ReactDOM.render(JSX, document.getElementById('challenge-node'))

//Quiz
// ¿Qué es JSX en React?
  // JSX es una extensión de JavaScript que permite escribir HTML directamente dentro de los archivos de JS.
// ¿Cuál es el propósito del método ReactDOM.render() en React?
  //Renderizar los elementos de React en el DOM HTML.
// ¿Cuál es el formato correcto para usar ReactDOM.render()?
  //El formato correcto es usar ReactDOM.render(componentToRender, targetNode)
// ¿Qué debe hacerse antes de llamar a ReactDOM.render()?
  //Antes de llamar a ReactDOM.render() se deben declarar los elementos JSX.

//Notas

//ReactDOM ofrece un método para renderizar componentes de JSX en el DOM.
//Funciona con dos argumentos. En el primero, se indica el nombre del componente que se quiere renderizar, y en el segundo, el nodo del DOM donde se quiere renderizar el componente.
//ReactDOM se debe llamar después de las declaraciones de elementos JSX (algo así como declarar variables antes de usarlas).

