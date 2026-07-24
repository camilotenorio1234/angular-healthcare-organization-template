# Angular Healthcare Organization Template

Plantilla institucional responsive desarrollada con Angular, TypeScript y SCSS. Está pensada como una base reutilizable para organizaciones, fundaciones, centros de salud y proyectos sociales.

## Características

- Sitio público responsive.
- Páginas de inicio, organización, programas y contacto.
- Biblioteca de documentos PDF con búsqueda y filtros.
- Visualizador de PDF integrado.
- Panel administrativo de demostración.
- Gestión local de documentos y visibilidad.
- Métricas básicas de navegación.
- Paleta visual inspirada en salud: turquesa, azul petróleo y menta.

## Tecnologías

- Angular 21
- TypeScript
- SCSS
- Angular Router
- IndexedDB
- Local Storage y Session Storage
- Vitest

## Instalación

```bash
git clone https://github.com/TU_USUARIO/angular-healthcare-organization-template.git
cd angular-healthcare-organization-template
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200`.

## Comandos

```bash
npm start
npm run build
npm run watch
npm test
```

## Acceso de demostración

- Correo: `admin@organizacion.org`
- Contraseña: cualquier texto no vacío

> La autenticación es únicamente demostrativa y no debe utilizarse en producción.

## Personalización

Los textos institucionales se encuentran en:

- `src/app/layout/public-layout/public-layout.html`
- `src/app/pages/home/home.html`
- `src/app/pages/about/about.html`
- `src/app/pages/programs/programs.html`
- `src/app/pages/presence/presence.html`

La identidad visual se configura desde `src/styles.scss`. Los títulos y metadatos están en `src/app/app.routes.ts` y `src/index.html`.

## Almacenamiento

El proyecto funciona sin backend:

- IndexedDB almacena los PDF.
- Local Storage conserva la sesión, el perfil y las métricas.
- Session Storage identifica la visita actual.

Por esta razón, los datos solamente existen en el navegador donde se crean.

## Consideraciones para producción

Antes de publicar una implementación real se debe incorporar:

- API y base de datos.
- Autenticación y autorización seguras.
- Almacenamiento externo de documentos.
- Gestión real de usuarios.
- Analítica con consentimiento.
- Variables de entorno y pruebas adicionales.

## Documentación

Consulta [DOCUMENTACION_TECNICA.md](DOCUMENTACION_TECNICA.md) para conocer la arquitectura y las responsabilidades de cada módulo.

## Licencia

Puedes adaptar esta plantilla para proyectos personales o institucionales. Agrega una licencia formal al repositorio antes de distribuirla públicamente.
