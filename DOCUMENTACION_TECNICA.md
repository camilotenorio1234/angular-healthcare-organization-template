# Documentación técnica — Sitio institucional genérico

## 1. Descripción

Esta es una plantilla frontend construida con Angular, componentes standalone, TypeScript y SCSS. Su contenido es deliberadamente neutral para que pueda adaptarse a una organización, empresa o proyecto.

Incluye:

- Sitio público con información institucional.
- Biblioteca pública de documentos PDF.
- Panel administrativo de demostración.

No utiliza backend. Los datos se almacenan en el navegador.

## 2. Estructura

```text
src/
├── app/
│   ├── core/
│   │   ├── guards/
│   │   └── services/
│   ├── layout/
│   ├── pages/
│   ├── app.config.ts
│   └── app.routes.ts
├── index.html
├── main.ts
└── styles.scss
```

Las páginas públicas se muestran dentro de `PublicLayout`. Las rutas `/login` y `/admin` usan vistas independientes. `adminGuard` restringe el panel a una sesión administrativa local.

## 3. Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación y valores |
| `/quienes-somos` | Descripción, misión, visión y datos |
| `/que-hacemos` | Programas y proceso de trabajo |
| `/presencia` | Contacto, ubicación y mapa |
| `/documentos` | Biblioteca pública de PDF |
| `/login` | Acceso de demostración |
| `/admin` | Gestión local |

## 4. Servicios

### `AuthService`

Gestiona una sesión administrativa local. El acceso de demostración usa `admin@organizacion.org` y cualquier contraseña no vacía. Esta implementación no es segura para producción.

### `DocumentsService`

Guarda archivos PDF y metadatos en la base IndexedDB `institutional-site`, almacén `documents`. Permite crear, listar, cambiar visibilidad y eliminar documentos.

### `AnalyticsService`

Registra visitas, páginas vistas y clics del navegador actual. Excluye las rutas administrativas.

## 5. Personalización

Reemplaza los datos de ejemplo en las plantillas HTML:

- Nombre y sigla
- Mensaje principal
- Misión y visión
- Programas o servicios
- Datos legales
- Ciudad, dirección, correo y mapa

Actualiza los títulos y metadatos en `app.routes.ts` e `index.html`. Los estilos globales y variables visuales están en `styles.scss`.

## 6. Comandos

| Comando | Función |
| --- | --- |
| `npm start` | Inicia el servidor local |
| `npm run build` | Genera la versión de producción |
| `npm run watch` | Compila al detectar cambios |
| `npm test` | Ejecuta las pruebas |

## 7. Limitaciones

- No existe backend.
- La autenticación es demostrativa.
- Los documentos y métricas solo existen en el navegador actual.
- Los administradores agregados en el panel no son cuentas reales persistentes.
- Un guard de frontend no sustituye la autorización de un servidor.

## 8. Requisitos de producción

Antes de publicar, implementa una API, base de datos, almacenamiento de archivos, autenticación segura, autorización por roles, métricas con consentimiento y pruebas automatizadas.
