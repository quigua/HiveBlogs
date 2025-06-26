Guía Básica: Cambia el Esquema de Colores de tu Sitio con Variables CSS
En tu sitio web, hemos implementado un sistema de variables CSS (también conocidas como Propiedades Personalizadas CSS). Esto es como tener un panel de control central para todos los colores de tu sitio. En lugar de buscar y cambiar cada color individualmente en miles de líneas de código, solo necesitas modificar unos pocos valores en un solo lugar.

¿Qué son las Variables CSS?
Imagina que quieres que todos los botones de tu sitio sean de un color específico. Normalmente, tendrías que ir a cada botón en tu código CSS y cambiar su color. Si luego decides que quieres otro color, tendrías que repetir el proceso.

Las variables CSS resuelven esto. Piensa en ellas como nombres que guardan valores de color. Por ejemplo, creamos una variable llamada --color-primary y le asignamos un valor, digamos #a333c8 (un morado). Luego, en lugar de poner #a333c8 en todos tus botones, pones var(--color-primary).

Así, si más tarde decides que --color-primary debe ser rojo, solo cambias el valor de la variable en un sitio, y todos los elementos que usan --color-primary se actualizarán automáticamente a rojo.

¿Dónde se Definen y Usan las Variables en tu Sitio?
En tu proyecto, las variables de color están definidas en el archivo:

src/styles/_variables.css

Y luego se utilizan en tus archivos de estilos principales, como:

src/styles/global.css
src/styles/post.css
Cómo Manipular el Esquema de Colores (Paso a Paso)
Cambiar la paleta de colores de tu sitio es muy fácil siguiendo estos pasos:

Abre el archivo src/styles/_variables.css.

Este es tu "panel de control" de colores.
Identifica las variables clave para el tema principal:
Dentro de este archivo, verás un bloque como este (con tus colores actuales):

CSS

/* Paleta Principal del Tema (ej. inspirada en HiveBlogs) */
--color-primary: #a333c8; /* Morado Oscuro - Para elementos principales, títulos, etc. */
--color-secondary: #f29e1f; /* Naranja Brillante - Para acentos, CTA, categorías */
--color-tertiary: #5d3ebc; /* Morado Medio - Complemento */

/* Colores Funcionales (basados en la paleta) */
--color-text-body: #333333; /* Texto principal del cuerpo */
--color-text-light: #ffffff; /* Texto claro (para fondos oscuros) */
--color-text-muted: #888888; /* Texto secundario, descripciones */

/* Colores de Fondo Específicos */
--color-background-body: #f4f4f4; /* Fondo general del cuerpo de la página */
--color-background-card: #ffffff; /* Fondo para tarjetas, secciones con contenido claro */
--color-background-header-footer: var(--color-primary); /* El header y footer usarán el color primario */
--color-background-dark: var(--color-dark-gray); /* Fondo oscuro general, como el footer */
--color-primary: Este es el color principal de tu marca. Afectará títulos, enlaces, el header, y otros elementos clave.
--color-secondary: Este es el color de acento, usado para botones de llamada a la acción (CTA), categorías de posts, y elementos que quieres que destaquen.
--color-tertiary: Un color complementario que puede usarse para acentos secundarios o elementos de diseño.
--color-text-body, --color-text-light, --color-text-muted: Controlan los colores del texto en diferentes contextos.
--color-background-body, --color-background-card, --color-background-header-footer, --color-background-dark: Definen los colores de fondo de distintas secciones del sitio.
Cambia los valores hexadecimales de los colores:

Para cambiar un color, simplemente modifica el código hexadecimal (ej., #a333c8) que está después de cada variable.
Puedes usar herramientas online como un selector de colores HTML para encontrar nuevos códigos hexadecimales que te gusten.
Ejemplo: Si quieres cambiar el color primario a un azul brillante:

CSS

--color-primary: #007bff; /* ¡Nuevo color azul! */
Guarda el archivo src/styles/_variables.css.

Reinicia el servidor de desarrollo de Astro (si está corriendo) en tu terminal:

Bash

npm run dev
Abre tu navegador y ve a tu sitio (http://localhost:4321/). Verás los cambios de color aplicados automáticamente en todo el sitio donde se usen esas variables.

Consejos para Elegir Paletas de Colores:
Herramientas de Paleta: Usa generadores de paletas de colores online como Coolors.co o Paletton.com para encontrar combinaciones armoniosas.
Contraste: Asegúrate de que los colores de texto y fondo tengan suficiente contraste para ser legibles (especialmente importante para la accesibilidad).
Menos es más: Una paleta de 3 a 5 colores principales suele ser suficiente para la mayoría de los sitios web.
¡Ahora tienes el control total sobre la estética de color de tu sitio! Si alguna vez quieres experimentar con un nuevo aspecto, este es el lugar para empezar.