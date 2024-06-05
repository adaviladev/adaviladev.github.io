// 1. **Understanding Component Composition in React**:
//    Component composition is a powerful feature of React that allows you to combine multiple components together in various ways to create complex user interfaces.

// 2. **Importance of Component Thinking**:
//    When working with React, it's essential to think about your user interface in terms of components. This involves breaking down your UI into smaller, reusable building blocks, where each block represents a component. This separation of concerns helps in maintaining a clean codebase and simplifies both development and maintenance, especially for large and complex projects.

// 3. **Example Scenario**:
//    In the provided challenge, there are two functional components: `TypesOfFruit` and `Fruits`.

// 4. **Composing Components**:
//    To compose these components together:
//    - Nest the `TypesOfFruit` component within the `Fruits` component.
//    - Then, nest the `Fruits` component within another component, let's call it `TypesOfFood`.

// 5. **Result**:
//    The end result should be a child component (`TypesOfFruit`) nested within a parent component (`Fruits`), which is then nested within another parent component (`TypesOfFood`).

// By following this approach of component composition, you can create a hierarchical structure of components, allowing for better organization and reusability in your React application.

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
        <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
        </div>
      );
    }
  };