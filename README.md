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

15. **Enlace de Anclaje (a):**
    - Descripción: Elemento para crear hipervínculos, permitiendo la navegación entre páginas o recursos.
    - Ejemplo de código:
      ```html
      <a href="https://www.ejemplo.com">Visitar Ejemplo</a>
      ```

16. **Lista de Descripción (dl, dt, dd):**
    - Descripción: Elementos para crear listas de descripción donde se proporciona un término y su descripción asociada.
    - Ejemplo de código:
      ```html
      <dl>
        <dt>Término 1</dt>
        <dd>Descripción 1</dd>
        <dt>Término 2</dt>
        <dd>Descripción 2</dd>
      </dl>
      ```

17. **Elemento de Marca de Tiempo (time):**
    - Descripción: Elemento para representar fechas y horas.
    - Ejemplo de código:
      ```html
      <p>La fecha actual es <time datetime="2024-01-30">30 de enero de 2024</time>.</p>
      ```

18. **Elemento de Detalles (details) y Resumen (summary):**
    - Descripción: Elementos para crear un área de detalles que se puede mostrar u ocultar.
    - Ejemplo de código:
      ```html
      <details>
        <summary>Mostrar más</summary>
        <p>Contenido adicional.</p>
      </details>
      ```

19. **Elemento de Artículo de Detalles (summary):**
    - Descripción: Elemento de resumen utilizado dentro de un elemento `<details>` para proporcionar un encabezado.
    - Ejemplo de código:
      ```html
      <details>
        <summary>Mostrar más</summary>
        <p>Contenido adicional.</p>
      </details>
      ```

20. **Elemento de Área de Encabezado (headings - h1, h2, ..., h6):**
    - Descripción: Elementos para definir encabezados de diferentes niveles, indicando la jerarquía de la información.
    - Ejemplo de código:
      ```html
      <h1>Encabezado de Nivel 1</h1>
      <h2>Encabezado de Nivel 2</h2>
      ```

21. **Elemento de Línea Horizontal (hr):**
    - Descripción: Elemento para representar una línea horizontal, útil para separar secciones.
    - Ejemplo de código:
      ```html
      <p>Texto antes de la línea horizontal</p>
      <hr>
      <p>Texto después de la línea horizontal</p>
      ```

22. **Comentario HTML:**
    - Descripción: Comentario que no se muestra en la página pero es útil para dejar notas en el código.
    - Ejemplo de código:
      ```html
      <!-- Este es un comentario en HTML -->
      ```

23. **Elemento de Imagen Map (map):**
    - Descripción: Elemento para asociar áreas específicas de una imagen con enlaces o acciones.
    - Ejemplo de código:
      ```html
      <img src="plano.png" alt="Mapa de un edificio" usemap="#edificioMapa">
      <map name="edificioMapa">
        <area shape="rect" coords="34,44,270,350" alt="Área 1" href="area1.html">
        <area shape="circle" coords="290,172,20" alt="Área 2" href="area2.html">
      </map>
      ```

24. **Elemento de Marco (iframe):**
    - Descripción: Elemento para insertar un marco que puede mostrar contenido de otra página.
    - Ejemplo de código:
      ```html
      <iframe src="otra_pagina.html" width="600" height="400" title="Contenido embebido"></iframe>
      ```

25. **Elemento de Audio (audio) y Video (video):**
    - Descripción: Elementos para insertar contenido de audio y video respectivamente.
    - Ejemplo de código (Audio):
      ```html
      <audio controls>
        <source src="audio.mp3" type="audio/mp3">
        Tu navegador no soporta el elemento de audio.
      </audio>
      ```
      Ejemplo de código (Video):
      ```html
      <video width="320" height="240" controls>
        <source src="video.mp4" type="video/mp4">
        Tu navegador no soporta el elemento de video.
      </video>
      ```

26. **Elemento de Cita (blockquote) y Cita Corta (q):**
    - Descripción: Elementos para representar citas, ya sea una cita extensa o una cita corta.
    - Ejemplo de código:
      ```html
      <blockquote>
        <p>Este es un bloque de cita extensa.</p>
      </blockquote>
      <p>El autor dijo <q>Esta es una cita corta</q>.</p>
      ```

27. **Elemento de Marca de Progreso (progress):**
    - Descripción: Elemento para representar la finalización de una tarea, como una barra de progreso.
    - Ejemplo de código:
      ```html
      <progress value="70" max="100">70%</progress>
      ```

28. **Elemento de Lista Desplegable (select) y Opción de Lista Desplegable (option):**
    - Descripción: Elementos para crear listas desplegables.
    - Ejemplo de código:
      ```html
      <select>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
      </select>
      ```

29. **Elemento de Detención de Texto (br):**
    - Descripción: Elemento para indicar un salto de línea dentro de un texto.
    - Ejemplo de código:
      ```html
      <p>Este es un texto con un <br> salto de línea.</p>
      ```

30. **Elemento de Definición de Abreviatura/Acrónimo (abbr):**
    - Descripción: Elemento para definir una abreviatura o acrónimo.
    - Ejemplo de código:
      ```html
      <p>La <abbr title="Organización de las Naciones Unidas">ONU</abbr> es una organización internacional.</p>
      ```

# Términos más específicos

**Atributo "alt" (Alternativo) para Imágenes:**
- Descripción: Proporciona un texto alternativo para describir la imagen, útil para accesibilidad y en caso de que la imagen no se cargue.
- Ejemplo de código:
  ```html
  <img src="foto.jpg" alt="Familia disfrutando de un día soleado en el parque">


Este glosario cubre una amplia variedad de términos y conceptos en HTML. Puedes personalizar cualquier sección según tus necesidades o agregar más ejemplos si es necesario. ¡Espero que esta información sea útil para los nuevos programadores!


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
