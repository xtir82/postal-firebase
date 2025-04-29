# Postal Firebase - Una Aplicación de Publicaciones en Redes Sociales

Postal Firebase es una aplicación moderna de React que permite a los usuarios crear, ver e interactuar con publicaciones en redes sociales. Construida con React 19, React Router y Firebase, proporciona una experiencia fluida para compartir pensamientos e ideas con persistencia de datos en tiempo real.
- **Enlace a la Versión Desplegada**:

## Funcionalidades

- **Ver Publicaciones**: Navega a través de una lista de publicaciones en la página de inicio
- **Crear Publicaciones**: Agrega nuevas publicaciones con tu nombre y mensaje
- **Ver Detalles de Publicación**: Haz clic en cualquier publicación para ver sus detalles completos
- **Diseño Responsivo**: Funciona en dispositivos de escritorio y móviles
- **Datos en Tiempo Real**: Impulsado por Firebase Firestore para actualizaciones instantáneas

## Tecnologías Utilizadas

### Frontend
- **React 19**: Última versión de React para construir la interfaz de usuario
- **React Router 7**: Para navegación y enrutamiento con patrones de loader/action
- **React Icons**: Para elementos visuales e íconos
- **CSS Modules**: Para estilos con ámbito a nivel de componente sin conflictos

### Backend e Infraestructura
- **Firebase**: Plataforma de Google para construir aplicaciones web y móviles
    - **Firestore**: Base de datos en la nube NoSQL para almacenar y sincronizar datos de publicaciones
    - **Firebase Analytics**: Para rastrear la interacción del usuario y el rendimiento de la app
- **Vite 6**: Herramienta de construcción moderna y servidor de desarrollo con recarga en caliente (HMR)

### Herramientas de Desarrollo
- **ESLint 9**: Para análisis de código y mantenimiento de la calidad del mismo
- **TypeScript**: Para verificación de tipos y mejor experiencia de desarrollo

## Uso

Después de iniciar el servidor de desarrollo:

1. Abre tu navegador y navega a `http://localhost:5173` (o el puerto que se muestra en tu terminal)
2. Navega por las publicaciones existentes en la página de inicio
3. Haz clic en una publicación para ver sus detalles
4. Haz clic en el botón "Crear Publicación" para añadir una nueva publicación
5. Rellena tu nombre y mensaje, luego envíalo
6. Tu publicación se guardará instantáneamente en Firebase y se mostrará en la aplicación

## Estructura del Proyecto

```
postal-firebase/
├── public/             # Recursos estáticos
├── firebase/
│   └── firebaseConfig.js # Configuración e inicialización de Firebase
├── src/
│   ├── components/     # Componentes reutilizables de la interfaz
│   │   ├── Modal.jsx   # Componente modal para superposiciones
│   │   ├── Post.jsx    # Componente individual de publicación
│   │   └── PostsList.jsx # Componente de lista de publicaciones
│   ├── routes/         # Rutas de la aplicación
│   │   ├── NewPost.jsx # Página para crear publicación con integración de Firebase
│   │   ├── PostDetails.jsx # Página de detalles de publicación con recuperación de documento de Firebase
│   │   ├── Posts.jsx   # Página principal de publicaciones con consulta a la colección de Firebase
│   │   └── RootLayout.jsx # Diseño raíz con elementos comunes
│   ├── index.css       # Estilos globales
│   └── main.jsx        # Punto de entrada de la aplicación con enrutamiento
├── package.json        # Dependencias y scripts del proyecto
└── vite.config.js      # Configuración de Vite
```

## Integración con Firebase

Este proyecto utiliza Firebase Firestore como solución de base de datos:

- **Estructura de la Colección**: Las publicaciones se almacenan en una colección llamada "posts"
- **Campos del Documento**: Cada publicación contiene los campos author y body
- **Operaciones de Lectura**: Usa `getDocs` para colecciones y `getDoc` para documentos individuales
- **Operaciones de Escritura**: Usa `addDoc` para crear nuevas publicaciones