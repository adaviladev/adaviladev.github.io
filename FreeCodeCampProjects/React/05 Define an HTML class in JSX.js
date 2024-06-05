// Now that you're getting comfortable writing JSX, you may be wondering how it differs from HTML.

// So far, it may seem that HTML and JSX are exactly the same.

// One key difference in JSX is that you can no longer use the word class to define HTML classes. This is because class is a reserved word in JavaScript. Instead, JSX uses className.

// In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is onClick, instead of onclick. Likewise, onchange becomes onChange. While this is a subtle difference, it is an important one to keep in mind moving forward.

// Apply a class of myDiv to the div provided in the JSX code.

const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );

//Quiz

// ¿Qué palabra no se puede usar en JSX para definir clases HTML y por qué?
  //No se puede utilizar "class" porque es una palabra reservada. Se debe utilizar className.
// ¿Qué atributo se usa en lugar de class en JSX?
  //className
// ¿Cuál es la convención de nombres para los atributos HTML y las referencias de eventos en JSX?
  //La convención utilizada es camelCase
// ¿Cómo se define un evento de clic en JSX?
  //Se utiliza onClick