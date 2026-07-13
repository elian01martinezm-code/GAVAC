# Modelo de Datos - GAVAC

## 1. Introducción

El presente documento describe el modelo de datos del sistema GAVAC (Sistema de Gestión Ganadera).

Su finalidad es definir las entidades principales, sus relaciones y las reglas de negocio antes de iniciar el desarrollo de la base de datos utilizando Prisma ORM y PostgreSQL.

Este documento servirá como guía para el desarrollo del backend, frontend y la aplicación móvil, garantizando una estructura organizada, escalable y fácil de mantener.

---

# 2. Objetivo del Sistema

GAVAC es un sistema de gestión ganadera diseñado para facilitar la administración de una finca.

El sistema permitirá gestionar:

- Información de la finca.
- Usuarios y permisos.
- Registro de animales.
- Catálogo de razas.
- Productividad.
- Reproducción.
- Historial de pesajes.
- Sanidad.
- Inventario.
- Reportes administrativos.

Toda la información registrada por los trabajadores deberá ser validada por el administrador antes de almacenarse definitivamente en la base de datos.

---

# 3. Roles del Sistema

## Administrador

Responsabilidades:

- Crear la finca.
- Crear usuarios.
- Asignar roles.
- Asignar permisos.
- Validar la información enviada por los trabajadores.
- Administrar el inventario.
- Consultar reportes.
- Gestionar toda la información del sistema.

---

## Trabajador

Responsabilidades:

- Registrar animales.
- Registrar productividad.
- Registrar reproducción.
- Registrar información del campo.

La información registrada quedará en estado **Pendiente** hasta ser revisada por el administrador.

---

## Veterinario

Responsabilidades:

- Registrar vacunas.
- Registrar tratamientos.
- Registrar medicamentos.
- Consultar el historial sanitario de los animales.

---

# 4. Flujo General del Sistema

1. El administrador inicia sesión.

2. Registra la finca.

3. Crea los usuarios.

4. Asigna el rol a cada usuario.

5. Asigna los permisos correspondientes.

6. Los trabajadores registran información del campo.

7. La información queda en estado Pendiente.

8. El administrador revisa la información.

9. Si la aprueba, se almacena definitivamente en la base de datos.

10. Si la rechaza, el trabajador podrá corregirla y enviarla nuevamente.

11. El veterinario registra tratamientos, vacunas y procedimientos sanitarios.

---

# 5. Módulos del Sistema

## Administración

- Fincas
- Usuarios
- Roles
- Permisos
- Aprobación de información

---

## Ganado

- Razas
- Animales
- Potreros
- Historial de Pesajes
- Productividad
- Reproducción

---

## Sanidad

- Veterinarios
- Tratamientos
- Vacunas
- Medicamentos

---

## Inventario

- Insumos
- Entradas
- Salidas

---

## Reportes

- Reportes de animales
- Reportes sanitarios
- Reportes de productividad
- Reportes de inventario

---

# 6. Entidades Principales

## Finca

Representa la finca donde se administrará toda la información.

---

## Rol

Define la función del usuario dentro del sistema.

---

## Permiso

Controla las acciones permitidas para cada rol.

---

## Usuario

Representa las personas autorizadas para ingresar al sistema.

---

## Potrero

Representa las divisiones o lotes de la finca donde se encuentran los animales.

Permitirá conocer la ubicación actual de cada animal y controlar los movimientos entre potreros.

---

## Raza

Catálogo de razas disponibles para registrar animales.

---

## Animal

Representa cada animal registrado en la finca.

---

## Historial de Pesajes

Almacena todos los registros de peso realizados a un animal.

---

## Productividad

Registra la producción del animal según su finalidad (leche, carne o doble propósito).

---

## Reproducción

Controla el ciclo reproductivo de los animales.

---

## Veterinario

Información de los médicos veterinarios.

---

## Sanidad

Registra vacunas, tratamientos y procedimientos sanitarios realizados a los animales.

---

## Insumo

Representa cada producto disponible en el inventario.

---

## Movimiento de Inventario

Controla las entradas y salidas de los insumos.

---

# 7. Relaciones Generales

Finca

├── Usuarios

│ ├── Roles

│ └── Permisos

│

├── Potreros

│ └── Animales

│ ├── Razas

│ ├── Historial de Pesajes

│ ├── Productividad

│ ├── Reproducción

│ └── Sanidad

│

├── Veterinarios

│

├── Inventario

│ └── Movimientos

│

└── Reportes

---

# 8. Estado Actual del Proyecto

## Sprint 1 Finalizado

- Estructura del proyecto.
- Backend con Express y TypeScript.
- PostgreSQL configurado.
- Prisma ORM configurado.
- Primera migración realizada.
- Tabla Raza creada correctamente.
- Git y GitHub configurados.

## Sprint 2 En desarrollo

- Diseño del modelo de datos.
- Definición de entidades.
- Definición de relaciones.
- Definición de reglas de negocio.

Posteriormente se iniciará la implementación de todos los modelos en Prisma.