<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# NestJS Boilerplate

Este es un boilerplate para proyectos en NestJS que incluye configuración para usar variables de entorno, conexiones a bases de datos PostgreSQL y MongoDB, y configuración personalizada de Prettier.

## Características

- **Módulo de Configuración**: Manejo de variables de entorno con `@nestjs/config`.
- **Base de Datos**: Configuración para conexiones a PostgreSQL y MongoDB.
- **Prettier**: Configuración personalizada para mantener un estilo de código consistente.
- **Swagger**: Documentación de la API con Swagger.
- **Global Pipes**: Validación de datos global usando `ValidationPipe`.
- **Logger**: Registro de actividades con el logger de NestJS.

## Requisitos Previos

- Node.js y npm instalados.
- PostgreSQL y/o MongoDB en funcionamiento (si se van a utilizar ambas bases de datos).

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura las variables de entorno:
    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables (modifícalas según tus necesidades):
    ```
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=myuser
    DATABASE_PASSWORD=mypassword
    DATABASE_NAME=mydatabase

    MONGODB_URI=mongodb://localhost/
    ```

## Uso

### Desarrollo

Para iniciar la aplicación en modo desarrollo:

```bash
npm run start:dev
```

### Formateo de Código

Para formatear tu código usando Prettier:

```bash
npm run format
```

### Estructura del Proyecto
El proyecto está estructurado de la siguiente manera:

```bash
src/
├── app.module.ts               # Módulo principal de la aplicación
├── database/
│   ├── postgres.providers.ts   # Proveedor de conexión a PostgreSQL
│   └── mongo.providers.ts      # Proveedor de conexión a MongoDB
├── main.ts                     # Punto de entrada de la aplicación
.env                            # Variables de entorno
prettier.config.js              # Configuración de Prettier
```

### `src/app.module.ts`

El módulo principal de la aplicación. Aquí se importan y configuran los módulos de configuración y de base de datos.

### `src/database/postgres.providers.ts`

Provee la configuración para la conexión a una base de datos PostgreSQL usando `TypeOrmModule`.

### `src/database/mongo.providers.ts`

Provee la configuración para la conexión a una base de datos MongoDB usando `MongooseModule`.
