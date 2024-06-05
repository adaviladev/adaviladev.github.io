// So far, you’ve seen how JSX differs from HTML in a key way with the use of className vs. class for defining HTML classes.

// Another important way in which JSX differs from HTML is in the idea of the self-closing tag.

// In HTML, almost all tags have both an opening and closing tag: <div></div>; the closing tag always has a forward slash before the tag name that you are closing. However, there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.

// For example the line-break tag can be written as <br> or as <br />, but should never be written as <br></br>, since it doesn't contain any content.

// In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as <div /> or <div></div>. The difference is that in the first syntax version there is no way to include anything in the <div />. You will see in later challenges that this syntax is useful when rendering React components.

// Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.

const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );

//Quiz

// ¿Cómo se denomina en HTML a las etiquetas que no requieren una etiqueta de cierre adicional antes de que otra etiqueta pueda comenzar?
// ¿Cuál es la diferencia principal entre la escritura de etiquetas auto-cerradas en HTML y en JSX?
// ¿Cómo se escribe la etiqueta de salto de línea en JSX para que sea válida?
// ¿Cuál es la importancia de la sintaxis <div /> en JSX según el texto proporcionado?

//Notes

//Utilizar className en vez de class para nombrar las clases. Ejemplo: className="clase"
//En JSX se deben cerrar todos los elementos. Por ejemplo: <br />

//Summary

// JSX vs. HTML:
// className vs. class for defining HTML classes.
// Self-closing tag concept differs.
// HTML:
// Most tags have opening and closing tags.
// Self-closing tags exist but not always required both opening and closing tags.
// Example: <br> or <br />, not <br></br>.
// JSX:
// Every element must be closed.
// Any JSX element can use self-closing tags.
// Example: <br /> always, <div /> or <div></div>.
// <div /> syntax useful for rendering React components.