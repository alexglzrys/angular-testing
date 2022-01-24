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

#### Cancelar u omitir una prueba escrita
- Ubicar el archivo donde esta declarada dicha prueba
- anteponer una x en la función que describe dicha prueba
```
xdescribe('AppComponent', () => {
    ...
}
```

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