// 1. **Composing React Components**:
//    In React, you can compose multiple components together to build complex UIs. This involves creating parent components that render child components as part of their structure.

// 2. **Example Scenario**:
//    Let's consider an example where you're building an app consisting of three components: Navbar, Dashboard, and Footer.

// 3. **Composing Components**:
//    To compose these components together, you would typically create a parent component, often named `App`, which renders each of the child components. This is achieved by including the child component names as custom HTML tags within the JSX of the parent component.

// 4. **Rendering Child Components**:
//    In the `render` method of the parent component, you would write something like:
//    ```javascript
//    return (
//      <App>
//        <Navbar />
//        <Dashboard />
//        <Footer />
//      </App>
//    );
//    ```
//    Here, each child component (Navbar, Dashboard, Footer) is enclosed within the `<App>` tag, indicating that they are children of the `App` component.

// 5. **Understanding Rendering**:
//    When React encounters a custom HTML tag referencing another component (like `<Navbar />`, `<Dashboard />`, `<Footer />`), it renders the markup for that component in place of the tag. This establishes a parent-child relationship between the parent component (`App`) and its children (Navbar, Dashboard, Footer).

// 6. **Applying the Concept**:
//    In the provided code editor, there are two components: `ParentComponent` (a class component) and `ChildComponent` (a functional component defined with an ES6 arrow function). To compose them together, render `ChildComponent` within `ParentComponent`, ensuring to close the `ChildComponent` tag with a forward slash.

// By following this pattern of composition, you can effectively structure and organize your React application into modular, reusable components.

const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
          <ChildComponent />
          { /* Change code above this line */ }
        </div>
      );
    }
  };

//Quiz
// ¿Qué significa "componer componentes" en React?
  //Significa juntar varios componentes para crear interfaces de usuario complejas.
// ¿Cuál es un ejemplo de situación en la que se podría componer componentes en React?
  //Un ejemplo sería construir una app con componentes como Navbar, Dashboard y Footer.
// ¿Cómo se componen los componentes en React?
  //Se componen creando un compontente padre que renderiza los componentes hijos. Para lograrlo, se incluyen etiquetas con los nombres de los componentes dentro de las etiquetas JSX.
// ¿Qué se incluye dentro del método render de un componente padre para componer componentes en React?
  //Se incluyen los nombres de los componentes hijos como etiquetas HTML personalizadas dentro del JSX del componente padre.
// ¿Qué establece la relación entre un componente padre y sus componentes hijos en React?
  //La relación se establece cuando React encuentra una etiqueta HTML personalizada que hace referencia a otro componente.