# Guía: Mejoras del portafolio y puesta en producción

## ✅ Bugs corregidos en el código

- **Navbar**: `data-AOS` → `data-aos`, `flex-wrp` → `flex-wrap`, `hovers:text-white` → `hover:text-white`, eliminado import incorrecto de AOS.
- **Experience y Projects**: `data-aos-deplay` → `data-aos-delay`.
- **Projects**: `fase-up` → `fade-up`, `fle-wrap` → `flex-wrap`.

---

## 📋 Formas de mejorar el portafolio

### 1. Contenido y textos

- **Hero**: Sustituir el texto genérico por una frase que te describa (ej: “Desarrollador front-end enfocado en React y experiencias web rápidas”).
- **Experience**: Cambiar “ver que pondre aqui jajaja” y el párrafo de Udemy por trabajos reales, prácticas, cursos o proyectos con rol y fechas.
- **Projects**: Reemplazar el texto de Java/IntelliJ por una descripción breve de tus proyectos.
- **Título de la página** (`index.html`): Cambiar “portafolio-website” por tu nombre o “Portafolio | Tu Nombre”.

### 2. SEO y meta tags

En `index.html` añade:

```html
<meta name="description" content="Portafolio de [Tu nombre] - Desarrollador Front-end" />
<meta name="keywords" content="portafolio, desarrollador, react, frontend" />
<!-- Opcional: Open Graph para redes -->
<meta property="og:title" content="Tu Nombre | Portafolio" />
<meta property="og:description" content="Desarrollador Front-end" />
```

Y `lang="es"` si el contenido está en español: `<html lang="es">`.

### 3. Accesibilidad

- Enlaces del navbar: añadir `aria-label` donde ayude (ej: “Ir a Skills”).
- Botón “Contact” en Hero: que lleve a `#contact` o abra un formulario/modal.
- Imágenes: revisar que todos los `alt` describan bien (ej: “Foto de perfil de Adolfo Floreano”).

### 4. Sección Contact

- Crear sección `#contact` con email, LinkedIn, GitHub (y enlaces reales en el navbar).
- Opcional: formulario con servicio tipo Formspree o EmailJS.

### 5. Proyectos

- En **Projects**: dar a cada proyecto `link` (URL del sitio o repo) y usar ese `link` en “FullScreen” y en la imagen/tarjeta.
- Añadir descripción corta por proyecto.
- Usar imágenes distintas por proyecto si es posible.

### 6. Experiencia de usuario

- **Scroll suave**: en `index.css` o global:

  ```css
  html { scroll-behavior: smooth; }
  ```

- **Navbar fija**: si quieres que siempre se vea al hacer scroll, usa `fixed top-0 left-0 right-0` y un `padding-top` en el contenido para no tapar el hero.
- **Botón “Download CV”**: comprobar que `CV_RESUME.pdf` exista en la ruta usada en Skills.

### 7. Performance

- Optimizar imágenes (comprimir, formato WebP si quieres).
- En Vite, el build ya genera assets con hash; no hace falta cambiar nada para caché.

### 8. Diseño opcional

- Favicon: cambiar `vite.svg` por un icono tuyo (mismo nombre o actualizar la referencia en `index.html`).
- Modo oscuro: si te interesa, se puede añadir con una clase en `html` y variables CSS o clases de Tailwind.

---

## 🚀 Cómo llevarlo a producción

Tu proyecto es **React + Vite**. El build genera una carpeta `dist` con HTML, JS y CSS estáticos. Cualquier hosting de sitios estáticos sirve.

### Opción A: Vercel (recomendada)

1. Sube el proyecto a **GitHub** (crea un repo y haz push).
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con GitHub.
3. **Add New** → **Project** → importa el repo del portafolio.
4. **Framework Preset**: Vite (Vercel lo detecta o lo eliges).
5. **Root Directory**: dejar por defecto.
6. **Build Command**: `npm run build`
7. **Output Directory**: `dist`
8. **Deploy**. Te dará una URL tipo `tu-proyecto.vercel.app`.

Para un dominio propio: en el proyecto → **Settings** → **Domains** y añades tu dominio.

### Opción B: Netlify

1. Repo en GitHub igual que arriba.
2. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** → GitHub y el repo.
3. **Build command**: `npm run build`
4. **Publish directory**: `dist`
5. **Deploy**.

Dominio propio: **Domain settings** → **Add custom domain**.

### Opción C: GitHub Pages (gratis)

1. Añade en `package.json` la base para GitHub Pages (usa tu usuario o la org):

```json
"scripts": {
  "build": "vite build --base=/nombre-del-repo/"
}
```

(Sustituye `nombre-del-repo` por el nombre real del repositorio, ej: `portafolio-website`.)

2. Instala el paquete para desplegar:

```bash
npm install --save-dev gh-pages
```

3. Añade en `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Ejecuta:

```bash
npm run deploy
```

5. En GitHub: repo → **Settings** → **Pages** → Source: **Deploy from a branch** → branch `gh-pages`, carpeta `/ (root)`.

La web quedará en `https://tu-usuario.github.io/nombre-del-repo/`.

### Opción D: Build local y subir a cualquier hosting

1. En la raíz del proyecto:

```bash
npm run build
```

2. Se genera la carpeta **`dist`**.
3. Sube **todo el contenido de `dist`** (no la carpeta) a:
   - Un hosting compartido (por FTP en la carpeta pública, ej: `public_html`).
   - Firebase Hosting, Cloudflare Pages, etc., apuntando la salida al contenido de `dist`.

---

## Resumen rápido para producción

| Paso | Acción |
|------|--------|
| 1 | Revisar textos y contenido (Hero, Experience, Projects). |
| 2 | Ajustar `index.html`: título, descripción, favicon. |
| 3 | Añadir sección Contact y enlaces reales. |
| 4 | Subir código a GitHub. |
| 5 | Conectar el repo en Vercel o Netlify y desplegar. |
| 6 | (Opcional) Configurar dominio propio. |

Si quieres, en el siguiente paso podemos aplicar juntos las mejoras de contenido (textos y sección Contact) o preparar el `package.json` y el `index.html` exactos para GitHub Pages o Vercel.
