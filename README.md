# Simple login and userslist

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Versión de Node: 12.16.1 o superior
Versión de NPM: 6.13.4 o superiror
Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari)

## Entorno de desarrollo local

### `npm install`

Para instalación de dependencias

### `npm start`

Entorno de desarrollo

## Memoria

El proyecto está realizado con las siguientes tecnologias: React, React Router, JavaScript, Styled Components, Redux, Redux-Thunk.

**DEMO**: https://prueba-laliga-js.web.app/

REST API conectada: https://reqres.in/

El proyecto contiene las siguentes vistas:

- Login `/login`. Demo credenciales: Email _¨eve.holt@reqres.in¨_ y contraseña _¨cityslicka¨_ (disponible solo para no autenticados)
- Listado de usuarios `/users` (disponible solo para autenticados)
- Página 404 `/404`

### Estilos

- Todos los estilos están realizados con la libreria `styled-components`.
- **`<GlobalStyle />`**: Estilos globales, incluyen definición de la paleta de colores.
- Los demás estilos están definidos en sus componentes.

### Componentes UI

- **`<Layout></Layout>`** : Wrapper para las páginas. Contiene _Header_ y _Footer_. Props aceptados:

| Props      | Descripción                                                                                                           | Tipo                             |
| :--------- | :-------------------------------------------------------------------------------------------------------------------- | :------------------------------- |
| `centered` | Centrado horizontal y vertical de todo el contenido de `<Layout>` (por defecto está alineado a la izquierda y arriba) | _boolean_ (por defecto: `false`) |

- **`<Button></Button>`**: El botón estándar, todos los atributos se pasan por los `props`. Props adicionales aceptados:

| Props   | Descripción     | Tipo                           |
| :------ | :-------------- | :----------------------------- |
| `width` | Ancho del botón | _string_ (por defecto: `100%`) |

- **`<Card></Card>`**: Wrapper-tarjeta para los elementos como articulos, formularios etc. Props aceptados:

| Props      | Descripción                                         | Tipo                                      |
| :--------- | :-------------------------------------------------- | :---------------------------------------- |
| `width`    | Ancho de la tarjeta                                 | _string_ (por defecto: `null` (=`auto`) ) |
| `maxWidth` | Ancho máximo de la tarjeta                          | _string_ (por defecto: `400px`)           |
| `centered` | Centrado del texto y elementos dentro de la tarjeta | _boolean_ (por defecto: `false`)          |

- **`<Input></Input>`**: Input estándar, todos los atributos se pasan por los `props` (`ref` incluido).
- **`<Loader />`**: Loader (spinner) con fondo no transparente.

### Componentes funcionales

- **`<Login />`**: Formulario para iniciar sesión.
- **`<Users />`**: Listado de usuarios
- **`<User />`**: Tarjeta de un solo usuario. Props aceptados:

| Props  | Descripción      | Tipo                                                              |
| :----- | :--------------- | :---------------------------------------------------------------- |
| `user` | Datos de usuario | _object_ con valores `{ avatar, first_name, last_name, email }` ) |

- **`<Pagination />`**: Componente con el listado de paginación. Props aceptados:

| Props         | Descripción                    | Tipo                                          |
| :------------ | :----------------------------- | :-------------------------------------------- |
| `currentPage` | Número de la página actual     | _number_                                      |
| `totalPages`  | Cantidad de páginas en total   | _number_                                      |
| `goToPage`    | Función para cambiar la página | _function_ con parametro para pasar el número |

### Estado en Redux Store

El estado global se controla con el `store.js`

#### Reducers:

- **`authReducer`**: Control de la autentificación, asignación de _token_ (tipos de acciones:: `LOGIN`, `LOGOUT`, `SET_AUTH_ERROR`)
- **`usersReducer`**: Petición de la lista de usuarios y paginación por el API (tipos de acciones: `SET_USER_DATA`)
- **`loadingReducer`**: Activación de `<Loader/>` desde cualquier componente/acción (tipos de acciones: `LOADING_START`, `LOADING_END`)

\*Todos los tipos de acciones están guardados como constantes en `store/actions/actionTypes.js`

#### Acciones:

- **`auth-actions`**:

| Acción                   | Funciones                                                      |
| :----------------------- | :------------------------------------------------------------- |
| `login(email, password)` | Iniciar sesión y registrar el token en `localStorage`          |
| `logout()`               | Cerrar sesión y borrar el token de `localStorage`              |
| `checkAuth()`            | Recuperar el token guardado en `localStorage` y iniciar sesión |

- **`users-actions`**:

| Acción                   | Funciones                                                                                        |
| :----------------------- | :----------------------------------------------------------------------------------------------- |
| `fetchUsers(pageNumber)` | Pedir el listado de usuarios por el API (una petición por página) y guardarlos en el Redux Store |

- **`loading-actions`**:

| Acción           | Funciones                 |
| :--------------- | :------------------------ |
| `startLoading()` | Activar el `<Loader/>`    |
| `stopLoading()`  | Desactivar el `<Loader/>` |

\*Todas las acciones están importadas en un solo archivo y están listas para exportarse desde `store/actions/index.js`

## Autor

Desarrollado por Nastia Zhyrnova https://github.com/nastiazhyrnova
