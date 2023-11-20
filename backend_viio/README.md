# Prueba Tecnica VIIO

Este proyecto fue desarrollado como parte de la prueba técnica para VIIO.
 Para ponerlo en marcha, sigue estas instrucciones.
 Asegúrate de tener MongoDB instalado si no el proyecto no funcionara; si aún no lo has hecho, te recomendaría instalarlo. 
 También es esencial contar con MongoDB Compass para una interfaz gráfica más amigable.


### Comandos
- `npm start`
- `npm run dev` (Inicia el servidor en modo de desarrollo.)
- `npm run dev:postman` (Este comando se utiliza para realizar pruebas con Postman y configurar los CORS.)


### Instalación de Dependencias

`npm install`


## Configuración

Crear un archivo .env en la raíz del proyecto con la siguiente estructura:


MONGO_URI = 
PORT = 
FRONTEND_URL = 

EMAIL_HOST = 
EMAIL_PORT = 
EMAIL_USER = 
EMAIL_PASS = 

JWT_SECRET = 

**Para la configuración de Mailtrap, consulta [Mailtrap](https://mailtrap.io/home) para obtener las credenciales necesarias.**

## Dependencias

- axios
- bcrypt
- colors
- cors
- dotenv
- express
- itrm-tools
- jsonwebtoken
- mongoose
- morgan
- nodemailer
- viio-project-tools


## Rutas de la API

- **Registro de Usuario**

  - Método: POST
  - Ruta: /api/auth/register
  - Estructura del cuerpo:

   ```
     {
     "name": "nombre",
     "email": "correo",
     "password": "contraseña"
     }
- **Inicio de Sesión**

   - Método: POST
   - Ruta: /api/auth/login
   - Estructura del cuerpo:

  ```
     {
     "email": "correo",
     "password": "contraseña"
     }
- **Verificación de Cuenta**

   - Método: GET
   - Ruta: /api/auth/verify/:token
   - Verifica y activa la cuenta utilizando el token de verificación.



- **Obtener Usuario Actual**

   - Método: GET
   - Ruta: /api/auth/user
   - Verifica el token JWT y devuelve la información del usuario.
