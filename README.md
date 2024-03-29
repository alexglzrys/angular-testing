# Angular Pruebas

#### Preguntas antes de realizar pruebas a una Aplicación

- **Vale la pena**
Ventajas: ayuda a encontrar errores, permite probar código escrito por otros programadores, permiten detectar errores antes de que sucedan en producción, ayuda a generar un código más limpio, permite generar reportes o estadisticas de cada carácteristica probada.
- **Qué debo probar**
Todo depende del tiempo que se tenga destinado para el desarrollo de dicha aplicación. Ya que las pruebas son muy costosas en cuanto a tiempo.
Cuando se desarrolla, generalmente se hacen pruebas manuales, más sin embargo, se debería considerar realizar pruebas automáticas en aquellos componentes realmente importantes que son el corazón de la lógica de nuestra aplicación
- **Qué tipos de pruebas existen**
Pruebas manuales (prueba y error que se realiza al momento de programar)
Pruebas automáticas: Unitarias, Integración, Extremo a extremo (end to end) 
- **Para qué sirven**
Permiten probar una parte aislada presente en nuestra aplicación, por ejemplo, probar que una función declarada haga bien su trabajo, o que todo un componente haga correctamente lo que debe de hacer, o que cierto procedimiento se comporte como se espera (login)

#### Tipos de pruebas automaticas
**Pruebas unitarias**: Son pruebas aisladas sin presencia de recursos externos, como llamadas a un API u otro componente o servicio. Probar que una función haga correctamente su trabajo y no se rompa con alguna variación en el valor de sus parámetros de entrada
- Nos ayudan a probar rápidamente funciones o métodos
- Podemos escribir muchas pruebas rápidamente
- Podemos someter a pruebas de estrés nuestros métodos
- No se sabe los tiempos de respuesta de servicios o llamadas a API's

**Pruebas de integración**: Son pruebas que se realizan a todo un conjunto de elementos relacionados. Si una función está relacionada con la activación de un evento en la vista, se prueba esa carácteristica en su conjunto, es decir, que realmente se esté llamando a la función cuando se dispara el evento y que el resultado se visualice correctamente en la vista.
- Cuando la prueba se ve afectada por la respuesta de una llamada a un API, lo que se hace es hacer servicios falsos. Es decir, hardcodear las respuestas (arreglos con data plana, por ejemplo)

**Pruebas de extremo a extremo**: Son las más costosas en cuento a tiempo, su finalidad es probar todo un conjunto de procedimientos para verificar que el resultado es realmente lo que se espera obtener
- Hacer login
- Clic en registrar usuarios
- Ver interfaz para el registro de usuarios


#### Lanzar el framework de pruebas integrado en nuestra App Angular
```
ng test
```

**Jasmine** es actualmente en Framework de pruebas integrado en aplicaciones Angular. Este busca cualquier archivo con terminación **spec.ts** para lanzar las pruebas escritas en dichos archivos.

Las pruebas escritas dentro de estos archivos pueden ser de tipo: Unitaria, Integración, o End to End.

Al lanzar las pruebas, se abre una sesión del navegador Web Chrome con el informe de todas las pruebas. Si deseamos obtener mayor información sobre mensajes de logs (escritos en cada prueba), es necesario seleccionar la opción **debug** y abrir la consola de desarrollo.

#### Cancelar u omitir una prueba escrita
- Ubicar el archivo donde esta declarada dicha prueba
- anteponer una x en la función que describe el conjunto de pruebas o prueba a omitir
```
xdescribe('AppComponent todas las pruebas saltadas', () => {
    ...
}

describe('AppComponent', () => {
    it('Una prueba');
    xit('Prueba específica saltada')
}
```
- Saltarse u omitir una prueba generalmente se hace cuando la lógica de dicha sección aun no esta lista, y las pruebas que se hicieron fue con data de ejemplo o harcodeada. En este sentido, cuando la lógica este lista, se retira el prefijo **x** y se procede a revisar si esa prueba o conjunto de ellas pasa.

#### Declarar pruebas automáticas
- Crear un archivo para la declaración de pruebas con extensión **.spect.ts**
- Por lo general, este archivo de pruebas se encuentra al lado del archivo que contiene la lógica, funciones o métodos a probar
- string.ts (archivo con lógica), string.spec.ts (archivos de pruebas)
```
// Permite agrupar un conjunto de pruebas relacionadas
describe('Pruebas realizadas al nombre de un usuario')

// Son las pruebas a realizar
it('EL nombre se encuentra en minúsculas');
it('El nombre no tiene espacios en blanco al inicio y final')
it('El nombre tiene caracteres válidos')

// Expectativa de lo que se desa obtener tras realizar la prueba
expect(resultado).funcionVerbo('lo que se espera')
```

#### ¿Que hacer si las pruebas fallan?
- Lo primero es revisar que la prueba esté correctamente declarada, que sus datos de entrada sean los correctos (si aplica) para que el resultado que se desea obtener sea el correcto
- Verificar que la función o método objetivo esté correctamente programado

#### Observar el % de cobertura de pruebas en nuestra aplicación
Los frameworks de testing implementan algo que se les conoce como **code-coverage**, el cúal nos indica que tanto se a probado de la lógica declarada en una clase, funcion, método, etc.
Lo ideal sería tener cubierto el 100% en cada una de las pruebas realizadas, pero todo depende del tiempo y recursos económicos destinados a dicho desarrollo.

```
ng test --code-coverage
```

El comando anterior genera una carpeta dentro de nuestra aplicación llamada **coverage**, la cual contiene un index.html con estadisticas interesantes sobre el porcentaje de cobertura de cada una de nuestras puebas.
- Si una declaración no se encuentra al 100%, es posible que alguno de sus casos (lógica a evaluar) no este probado. **Una condición (IF-ELSE) que hasta el momento no se cumple con las pruebas actuales** 
