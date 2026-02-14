# Cómo subir tu portafolio a producción

El build ya funciona. La carpeta **`dist`** contiene tu sitio listo para publicar.

---

## Opción 1: Vercel (recomendada, gratis)

### Paso 1: Subir el proyecto a GitHub

1. Crea una cuenta en [github.com](https://github.com) si no tienes.
2. Crea un **nuevo repositorio** (por ejemplo: `portafolio`).
3. En la carpeta de tu proyecto, abre terminal y ejecuta:

```powershell
cd "c:\Users\ADMIN\Desktop\Projects\portafolio-website"
git init
git add .
git commit -m "Portafolio listo para producción"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portafolio.git
git push -u origin main
```

(Sustituye `TU_USUARIO` por tu usuario de GitHub, ej: `aryorisgarth`, y `portafolio` por el nombre del repo.)

### Paso 2: Desplegar en Vercel

1. Entra en [vercel.com](https://vercel.com) e **inicia sesión con GitHub**.
2. Clic en **Add New** → **Project**.
3. **Import** el repositorio del portafolio.
4. Vercel detecta Vite; no cambies nada.
5. Clic en **Deploy**.

En unos segundos tendrás una URL como:  
`https://portafolio-xxx.vercel.app`

---

## Opción 2: Netlify (gratis)

### Paso 1: Igual que arriba — sube el código a GitHub.

### Paso 2: Desplegar en Netlify

1. Entra en [app.netlify.com](https://app.netlify.com) e inicia sesión con GitHub.
2. **Add new site** → **Import an existing project** → **GitHub**.
3. Elige el repo del portafolio.
4. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. **Deploy site**.

Tu sitio quedará en una URL como:  
`https://nombre-aleatorio.netlify.app`

---

## Opción 3: Solo la carpeta `dist` (sin GitHub)

Si no quieres usar GitHub:

1. En tu proyecto ejecuta: **`npm run build`**
2. Entra en [vercel.com](https://vercel.com) o [app.netlify.com](https://app.netlify.com).
3. En lugar de “Import from Git”, elige **Deploy manually** / **Drag and drop**.
4. Arrastra la **carpeta `dist`** (no la raíz del proyecto) a la zona de deploy.

Cada vez que cambies el sitio, vuelve a hacer `npm run build` y a subir la carpeta `dist`.

---

## Dominio propio (opcional)

- **Vercel:** Settings → Domains → añade tu dominio.
- **Netlify:** Domain settings → Add custom domain.

---

## Resumen rápido

| Paso | Acción |
|------|--------|
| 1 | `npm run build` (ya lo hiciste) |
| 2 | Subir proyecto a GitHub (`git init`, `add`, `commit`, `remote`, `push`) |
| 3 | Conectar ese repo en Vercel o Netlify y desplegar |
| 4 | Listo: tu portafolio en una URL pública |

Si quieres, el siguiente paso puede ser hacer juntos el `git init` y el primer `push` a GitHub desde tu carpeta del proyecto.
