<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[![Versión NPM](https://img.shields.io/npm/v/@nestjs/core.svg)](https://www.npmjs.com/~nestjscore)
[![Licencia](https://img.shields.io/npm/l/@nestjs/core.svg)](https://www.npmjs.com/~nestjscore)
[![Descargas NPM](https://img.shields.io/npm/dm/@nestjs/common.svg)](https://www.npmjs.com/~nestjscore)
[![CircleCI](https://img.shields.io/circleci/build/github/nestjs/nest/master)](https://circleci.com/gh/nestjs/nest)
[![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)](https://discord.gg/G7Qnnhy)

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
git clone <URL_DEL_REPOSITORIO>
cd notes-api
```

2. Instalar Dependencias
```bash
npm install
```

3. Iniciar la base de datos MySQL con Docker
```bash
npm install
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


