# Actividad 1 de la Segunda Semana de jQuery

Para la siguiente actividad clona este repositorio y trabaja en cada una de las carpetas respectivas.

Revisa el archivo [readme](./readme.md), el cual contiene toda la información relevante para poder realizar el ejercicio.

## Ejercicios a desarrollar

### 1. Arregla el código JS Intrusivo

El javascript obstrusivo en este archivo dificulta la lectura del código y repite una misma sentencia muchas veces. Modifícalo para lograr que el evento click se gatille en todas las imágenes desde una misma función y, de esa forma, permitir que el código sea más legible y permita encontrar los errores de forma más sencilla.

Recuerda que no solo puedes escribir el código JS antes que cierre el body si no que también puede ser en un archivo externo.
	
### 2. Trabajo con el DOM y jQuery

Las siguientes instrucciones deben hacerse solo con JS, sin modificar el código html ni modificar/agregar clases.
	
Además utilizaremos traversing, eso significa que nos moveremos entre los elementos del DOM sin necesidad de seleccionar elementos por sus clases si no que solo seleccionaremos por etiquetas.
	
Puedes revisar los siguientes links para obtener más información:

**Traversing:**

- [Introducción al traversing](info_extra_act/traversing.pdf) **(Español)**
- [https://api.jquery.com/category/traversing/](https://api.jquery.com/category/traversing/) **(Inglés)**

**Selectores CSS:**

- [https://www.w3schools.com/cssref/css_selectors.asp](https://www.w3schools.com/cssref/css_selectors.asp) **(Inglés)**
- [https://code.tutsplus.com/es/tutorials/the-30-css-selectors-you-must-memorize--net-16048](https://code.tutsplus.com/es/tutorials/the-30-css-selectors-you-must-memorize--net-16048) **(Español)**

Se busca:

01. Cambiar el texto que se encuentra dentro del cuarto artículo, el
	tercer link y que dice Snapchat. Se busca que ahora diga Pinterest
	y que también se le cambie el atributo `href` para que ahora vaya a la
	dirección de Pinterest (http://pinterest.com).
02. Seleccionar todos los link vacíos (que su href sea '#') y prevenir
	su comportamiento por defecto, o sea que al hacerle click no nos
	lleve al top de la página.
03. Modificar el tamaño de todos los `<h2>` que sean hijos directos de la
	clase `header__main` y hacerlos el doble de su tamaño.

### 3. Before/After, Prepend/Append

En clases hemos visto dos métodos (funciones) de jQuery que nos han ayudado a insertar código html en el lugar correcto: append y prepend.
	
En este ejercicio trabajaremos con ambos y además descubriremos dos nuevos métodos que son similares pero tienen resultados distintos: before y after.
	
Primero que nada te entregaré los links para revisar la documentación:

- [http://api.jquery.com/before/](http://api.jquery.com/before/) **(Inglés)**
- [https://www.anerbarrena.com/jquery-before-5381/](https://www.anerbarrena.com/jquery-before-5381/) **(Español)**
- [http://api.jquery.com/after/](http://api.jquery.com/after/) **(Inglés)**
- [https://www.anerbarrena.com/jquery-after-5364/](https://www.anerbarrena.com/jquery-after-5364/) **(Español)**


1.- Seleccionar el cuarto `<li>` y por medio de un `append` agrega este string: 

```html
'<ul><li><a href="#">link 4.a</a></li></ul>'
```

*Revisa en el inspector de elementos qué resultado has obtenido*

2.- Por medio de la misma selección anterior inserta, usando un `before`
	este otro string:
	
```html
'<li><a href="#">link 3.5</a></li>'
```

*Revisa la diferencia entre los métodos append y before, ¿logras notar la diferencia?*

3.- Seleccionar el `<li>` que contiene el link número 6 e inserta por medio del método `prepend` el string con el emoji: '😎' *(emoji de la cara con los anteojos de sol)*

4.- Con la misma selección utilizaremos el método `after` para insertar este string: '🙂'

*Tip: Para realizar la selección puedes utilizar varias opciones sin necesidad de hacer algún cambio en en el html. Por ejemplo puedes utilizar cualquier selector de CSS como: `'li:nth-child(9)'`, que seleccionará el noveno elemento que tenga el tag `<li>`. De hecho, es más versátil que eso y también podríamos seleccionar las etiquetas `<li>` con número par `('li:nth-child(2n)')`.*

*Tip2: Si al principio del código JS creas 2 variables y les asignas las correspodientes selecciones de elementos del DOM que utilizarás en el ejercicio, no solo evitarás tener que seleccionar el sexto `<li>` como si fuera el séptimo hijo, si no que también estarás mejorando tu código y haciendo que funcione más rápido porque el navegador no deberá recorrer constantemente el DOM para encontrar los elementos.*

### 4. Delegación de Eventos

Para comenzar a practicar con la delegación de eventos, lo que haremos será crear una lista de nombres donde se le pedirá al usuario que ingrese un nombre y además tendrá la posibilidad de eliminar alguno cuando lo requiera.

Para conseguir eso deberemos seguir estos pasos:

1.- Cuando se le haga click al botón con clase `add_name` guardaremos en una variable el retorno de la función `prompt()` *(explicado en el tip)*.

2.- Hacer un `append` en el tag `'.names'`, donde crearemos un string que contenga:

- Un `<li>` que englobe toda la información
- Un `<span>` que contenga la información recibida desde el `prompt()`
- Un link con clase `remove_name`, que nos permitirá eliminar el elemento de la lista

3.- Mediante delegación de eventos le agreguemos a todos los links vacíos una prevención de eventos para que cuando le hagamos click no aparezca en la URL el signo '#'.

4.- Crear una función que escuche el click del botón remove_name y seleccionará el li en cuestión para luego borrarlo por medio del método remove() de jQuery.
    
*HINT: Recuerda lo aprendido de traversing, si no; puedes repasarlo en estas direcciones:*

- [Introducción al traversing](info_extra_act/traversing.pdf) **(Español)**
- [https://api.jquery.com/category/traversing/](https://api.jquery.com/category/traversing/) **(Inglés)**

*Tip: con la función prompt() podremos lanzar un modal donde el usuario ingresará cada uno de los nombres. Esta función requiere son dos parámetros:* 

*a) El primero hace referencia al texto que le dirá al usuario qué hacer.*

*b) El segundo parámetro se refiere al valor por defecto del retorno de la función, cosa que también puede ser tomada como una sugerencia para el usuario. Esta función retorna un valor que puede ser almacenado en una variable y, posteriormente, puede ser utilizado en cualquier otro lugar.*

Por favor, toma como ejemplo éste código:

```javascript
var data = prompt('Por favor agrega un nombre a la lista', 'Harry Potter');
```

### 5. Bubbling

Es importante recalcar que deberemos detener la propagación del evento para que no se siga gatillando la misma acción en elementos interiores.

Para este ejercicio es necesario crear las acciones de click para ambos botones que se encuentran en la franja blanca.
  
El botón con clase `social__like` debe hacer un `toggle `de la clase `social__like--clicked`. Es decir, que si la tiene, la debe eliminar y si no agregarla.
  
El botón con clase `social__link` debe mostrar un `alert` con el `alt` de la imagen en donde se encuentra. Eso significa que por medio de traversing vas a acceder a esa información.

*Tip: recuerda que son dos botones, uno dentro de otro. Por ende es posible gatillar las acciones de ambos botones en vez de solo una.*

*Es importante recalcar que deberemos detener la propagación del evento para que no se siga gatillando la misma acción en elementos interiores.*
