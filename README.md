<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


<p align="center">
Una API REST para gestionar notas, construida con <a href="http://nestjs.com/" target="_blank">NestJS</a>, <a href="https://typeorm.io/">TypeORM</a> y <a href="https://www.mysql.com/">MySQL</a>.
</p>

---

## Contenido
- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecutar la aplicación](#ejecutar-la-aplicación)
- [Endpoints de la API](#endpoints-de-la-api)
- [Pruebas](#pruebas)


---

## Descripción
`notes-api` es una API sencilla para crear, listar y eliminar notas.  
Utiliza **NestJS** como framework, **TypeORM** como ORM y **MySQL** como base de datos.  
Soporta operaciones CRUD excepto la actualización, ya que no es requerida.

---

## Tecnologías
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [Docker & Docker Compose](https://www.docker.com/)
- [Jest](https://jestjs.io/) (pruebas unitarias y e2e)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/ElPanchopoh/nucleoFactory.git
cd nucleoFactory
```

<<<<<<< HEAD
2. Asegúrate de tener Docker y Docker Compose instalados.

## Configuración

Crea un archivo `.env` en la raíz con:

```
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=notesdb
```

## Despliegue con Docker Compose

Este proyecto se despliega con un único `docker-compose.yml` que:
- Levanta MySQL con credenciales ya definidas en `.env` (no modificar).
- Construye y levanta la API NestJS desde el `Dockerfile` sin necesidad de `npm install` ni `npm run` en tu máquina.

Parámetros por línea de comandos (opcionales) para Compose:
- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE`, `PORT`.

Ejemplos:
```bash
# Despliegue por defecto (usa valores de .env y/o los defaults del compose)
docker-compose up -d --build

# Overriding solo el puerto HTTP
PORT=4000 docker-compose up -d --build

# Overriding de conexión a DB (si no usas la de compose)
DB_HOST=otrohost DB_USERNAME=appuser DB_PASSWORD=secret DB_DATABASE=notesdb \
  docker-compose up -d --build
```

Endpoints/URLs:
- API: `http://localhost:${PORT-3000}/api/notes`
- Swagger UI: `http://localhost:${PORT-3000}/api/docs`


## Endpoints de la API

- `GET /api/notes` Lista todas las notas
- `GET /api/notes/{id}` Obtiene una nota por id
- `POST /api/notes` Crea una nueva nota
- `DELETE /api/notes/{id}` Borra una nota

PUT o PATCH no requeridos en la prueba.

## Ejecutar pruebas e2e (opcional entorno local):
```bash
npm run test:e2e
```
=======
2. Instalar Dependencias
```bash
npm install
```

3. Abrir docker desktop en pc!

4. Iniciar la base de datos MySQL con Docker
```bash
docker-compose up -d
```

## Configuracion

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=notesdb

## Ejecutar la aplicación
# Modo desarrollo
npm run start:dev

# Modo producción
npm run start:prod


La API estará disponible en: http://localhost:3000

## Endpoints de la API


 GET  /api/notes Lista todas las notas
 GET /api/notes/{id}  lista el valor buscado
 POST /api/notes Crea un nuevo registro
 DELETE /api/notes/{id} Borra el registro

PUT o PATCH no requeridos en la prueba.

## Ejecutar prueba para el ejercicio:
```bash
npm run test:e2e
```


>>>>>>> 70c16706184966d63e205a0ac4d0099cdd7bf179
