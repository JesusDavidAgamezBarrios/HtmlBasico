# Glosario HTML y CSS

Este repositorio contiene un glosario exhaustivo de términos y conceptos relacionados con HTML (HyperText Markup Language) y CSS (Cascading Style Sheets). El objetivo de este glosario es proporcionar una referencia completa y clara para desarrolladores web que trabajan con estas tecnologías.

## ¿Cómo Utilizar Este Glosario?

Cada sección del glosario está dividida en dos partes: HTML y CSS. Dentro de cada sección, encontrarás una lista de términos y conceptos esenciales con una descripción detallada y ejemplos de código para comprender mejor su uso.

## Glosario

### HTML (HyperText Markup Language):

1. **HTML (HyperText Markup Language):**
   - Descripción: Lenguaje de marcado utilizado para estructurar el contenido de una página web.
   - Ejemplo de código:
     ```html
     <!DOCTYPE html>
     <html lang="es">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Mi Página Web</title>
       </head>
       <body>
         <h1>Hola, Mundo!</h1>
         <p>Este es un párrafo de ejemplo.</p>
       </body>
     </html>
     ```

2. **Elemento HTML:**
   - Descripción: Bloque de construcción básico de una página web.
   - Ejemplo de código:
     ```html
     <p>Este es un elemento de párrafo.</p>
     ```

3. **Etiqueta HTML:**
   - Descripción: Marcadores que definen el inicio y el final de un elemento.
   - Ejemplo de código:
     ```html
     <strong>Texto en negrita</strong>
     ```

4. **Atributo:**
   - Descripción: Información adicional proporcionada dentro de las etiquetas para modificar o personalizar un elemento.
   - Ejemplo de código:
     ```html
     <a href="https://www.ejemplo.com" target="_blank" title="Enlace de ejemplo">Enlace de ejemplo</a>
     ```

5. **DOCTYPE:**
   - Descripción: Declaración que especifica la versión de HTML que está utilizando el documento.
   - Ejemplo de código:
     ```html
     <!DOCTYPE html>
     ```

6. **Head:**
   - Descripción: Sección de un documento HTML que contiene metadatos, enlaces a hojas de estilo y otros recursos.
   - Ejemplo de código:
     ```html
     <head>
       <meta charset="UTF-8">
       <title>Mi Página</title>
       <link rel="stylesheet" href="estilos.css">
       <script src="script.js" defer></script>
     </head>
     ```

7. **Body:**
   - Descripción: Contenedor principal que alberga el contenido visible de la página web.
   - Ejemplo de código:
     ```html
     <body>
       <h1>Encabezado</h1>
       <p>Párrafo de contenido.</p>
       <img src="imagen.jpg" alt="Descripción de la imagen">
     </body>
     ```

8. **Enlace (Link):**
   - Descripción: Elemento utilizado para vincular recursos externos, como hojas de estilo o páginas web.
   - Ejemplo de código:
     ```html
     <link rel="stylesheet" href="estilos.css">
     ```

9. **Lista ordenada (ol) y lista no ordenada (ul):**
   - Descripción: Elementos para crear listas numeradas o con viñetas, respectivamente.
   - Ejemplo de código:
     ```html
     <ul>
       <li>Elemento 1</li>
       <li>Elemento 2</li>
     </ul>
     ```

10. **Formulario (form):**
    - Descripción: Elemento que facilita la recolección de datos del usuario.
    - Ejemplo de código:
      ```html
      <form action="/procesar" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <input type="submit" value="Enviar">
      </form>
      ```

11. **Input:**
    - Descripción: Elemento de formulario para recibir información del usuario.
    - Ejemplo de código:
      ```html
      <input type="text" placeholder="Nombre completo" name="nombre">
      ```

12. **Imagen (img):**
    - Descripción: Elemento para mostrar imágenes en una página.
    - Ejemplo de código:
      ```html
      <img src="imagen.jpg" alt="Descripción de la imagen">
      ```

13. **Tabla (table):**
    - Descripción: Elemento para organizar datos en filas y columnas.
    - Ejemplo de código:
      ```html
      <table>
        <thead>
          <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
          </tr>
        </tbody>
      </table>
      ```

14. **Encabezado (header), Sección (section), Artículo (article), Barra lateral (aside), Pie de página (footer):**
    - Descripción: Elementos semánticos que definen la estructura y significado de diferentes secciones de una página.
    - Ejemplo de código:
      ```html
      <header>
        <h1>Encabezado de la Página</h1>
      </header>
      <section>
        <article>
          <h2>Artículo 1</h2>
          <p>Contenido del artículo.</p>
        </article>
        <article>
          <h2>Artículo 2</h2>
          <p>Contenido del artículo.</p>
        </article>
      </section>
      <aside>
        <h2>Barra lateral</h2>
        <p>Contenido adicional.</p>
      </aside>
      <footer>
        <p>Pie de página © 2024</p>
      </footer>
      ```

... (continuar con los demás términos de HTML)

### CSS (Cascading Style Sheets):

1. **CSS (Cascading Style Sheets):**
   - Descripción: Lenguaje de estilo utilizado para controlar la presentación de una página web.
   - Ejemplo de código:
     ```css
     body {
       font-family: 'Arial', sans-serif;
       background-color: #f0f0f0;
     }
     ```

2. **Selector:**
   - Descripción: Patrón que selecciona elementos a los que se aplicarán estilos.
   - Ejemplo de código:
     ```css
     h1 {
       color: blue;
     }
     ```

3. **Propiedad:**
   - Descripción: Característica específica que se desea cambiar en un elemento.
   - Ejemplo de código:
     ```css
     p {
       margin-bottom: 10px;
     }
     ```

4. **Valor:**
   - Descripción: Configuración específica que se asigna a una propiedad.
   - Ejemplo de código:
     ```css
     h2 {
       font-size: 24px;
     }
     ```

5. **Declaración:**
   - Descripción: Combinación de propiedad y valor que define un estilo.
   - Ejemplo de código:
     ```css
     div {
       border: 1px solid #ccc;
       padding: 10px;
     }
     ```

6. **Clase (class) y ID:**
   - Descripción: Atributos que permiten seleccionar y aplicar estilos a uno o varios elementos específicos.
   - Ejemplo de código:
     ```html
     <p class="destacado">Este párrafo tiene una clase.</p>
     <div id="contenedor">Este es un contenedor con ID.</div>
     ```
     ```css
     .destacado {
       color: red;
     }

     #contenedor {
       background-color: #eee;
     }
     ```

7. **Box Model:**
   - Descripción: Modelo que describe cómo se organiza y presenta cada elemento en una página.
   - Ejemplo de código:
     ```css
     div {
       width: 200px;
       padding: 10px;
       border: 1px solid #ccc;
       margin: 20px;
     }
     ```

8. **Flexbox y Grid:**
   - Descripción: Sistemas de diseño que permiten organizar elementos en una página de manera más flexible y eficiente.
   - Ejemplo de código (Flexbox):
     ```css
     .contenedor {
       display: flex;
       justify-content: space-between;
     }
     ```
     Ejemplo de código (Grid):
     ```css
     .contenedor {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
     }
     ```

9. **Media Query:**
   - Descripción: Técnica para aplicar estilos específicos según las características del dispositivo.
   - Ejemplo de código:
     ```css
     @media screen and (max-width: 600px) {
       body {
         font-size: 14px;
       }
     }
     ```

10. **Pseudo-clases y Pseudo-elementos:**
    - Descripción: Selecciones especiales que permiten aplicar estilos a elementos en estados específicos o partes de un elemento.
    - Ejemplo de código:
      ```css
      a:hover {
        color: purple;
      }

      p::first-line {
        font-weight: bold;
      }
      ```

11. **Transiciones y Animaciones:**
    - Descripción: Métodos para agregar efectos de transición y animación a elementos.
    - Ejemplo de código (Transición):
      ```css
      div {
        transition: background-color 0.3s ease;
      }

      div:hover {
        background-color: #ddd;
      }
      ```
      Ejemplo de código (Animación):
      ```css
      @keyframes mover {
        0% { transform: translateX(0); }
        100% { transform: translateX(100px); }
      }

      div {
        animation: mover 2s infinite alternate;
      }
      ```

12. **Unidades de medida:**
    - Descripción: px (píxeles), % (porcentaje), em, rem, etc., utilizadas para especificar tamaños y distancias.
    - Ejemplo de código:
      ```css
      p {
        font-size: 16px;
        margin-bottom: 1em;
      }
      ```

13. **Color:**
    - Descripción: Especificación de color en CSS, ya sea por nombre, código hexadecimal, RGB, etc.
    - Ejemplo de código:
      ```css
      h1 {
        color: #3498db;
      }
      ```

14. **Normalize.css y Reset.css:**
    - Descripción: Estilos base utilizados para normalizar y resetear los estilos predeterminados del navegador.
    - Ejemplo de código:
      _(Puedes incluir el enlace a los archivos Normalize.css o Reset.css en tu proyecto)_

15. **Positioning (posicionamiento):**
    - Descripción: Propiedades como `static`, `relative`, `absolute`, y `fixed` utilizadas para controlar la posición de elementos.
    - Ejemplo de código:
      ```css
      .absoluto {
        position: absolute;
        top: 10px;
        left: 20px;
      }
      ```

16. **Transformaciones (transform):**
    - Descripción: Propiedad para aplicar transformaciones 2D y 3D a elementos.
    - Ejemplo de código:
      ```css
      .rotar {
        transform: rotate(45deg);
      }
      ```

17. **Fuentes y Tipografía:**
    - Descripción: Propiedades para controlar la apariencia del texto, como `font-family`, `font-size`, y `font-weight`.
    - Ejemplo de código:
      ```css
      body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
      }
      ```

18. **Sombra (box-shadow):**
    - Descripción: Propiedad para agregar sombras a elementos.
    - Ejemplo de código:
      ```css
      div {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
      }
      ```

19. **Gradientes (linear-gradient, radial-gradient):**
    - Descripción: Propiedades para crear fondos con degradados lineales o radiales.
    - Ejemplo de código:
      ```css
      div {
        background: linear-gradient(to right, #ffcc00, #ff3300);
      }
      ```

20. **Overflow:**
    - Descripción: Propiedad para controlar cómo se maneja el contenido que desborda un contenedor.
    - Ejemplo de código:
      ```css
      div {
        overflow: hidden;
      }
      ```

... (continuar con los demás términos de CSS)

## Contribuir al Glosario

Si deseas contribuir agregando nuevos términos, conceptos o mejorando las descripciones existentes, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Clona tu repositorio forked en tu máquina local.
3. Agrega o modifica términos en el archivo README.md.
4. Haz commit de tus cambios y súbelos a tu repositorio forked.
5. Crea una solicitud de extracción (pull request) para que tus cambios se revisen y se incorporen al glosario principal.

Agradecemos cualquier contribución que ayude a mejorar y expandir este recurso para la comunidad de desarrollo web.

## Licencia

Este glosario está bajo la [Licencia MIT](LICENSE).
