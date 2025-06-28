# 🚀 Pablo Garay – Portfolio 2025

> Rock & Code – porque la actitud también se programa.

Mi sitio personal y profesional, construido con un stack moderno, enfoque progresivo, rendimiento optimizado y estética clara.  
Una SPA (Single Page Application) que también es una PWA (Progressive Web App), rápida, instalable, accesible… y con estilo.

<p>
  <a href="https://pablogaray.netlify.app" target="_blank">
    <img alt="Ir al portfolio" src="https://img.shields.io/badge/✨%20Ver%20Portfolio%20Online-000000?style=for-the-badge&logo=netlify&logoColor=white" />
  </a>
</p>

---

## ✨ Características

- ✅ **SPA** con navegación fluida vía React Router
- ✅ **PWA**: instalable, usable sin conexión
- ✅ **Multilenguaje** (ES/EN) vía `i18next`
- ✅ **Animaciones suaves** con Framer Motion
- ✅ **Estilado moderno** con TailwindCSS + Shadcn/UI
- ✅ **Accesibilidad cuidada**
- ✅ **Performance optimizada con Vite**
- ✅ **SEO básico incluido** (sitemap, robots.txt, manifest)

---

## 🧠 Stack Técnico

| Herramienta | Uso |
|-------------|-----|
| `React` + `Typescript` | Base de la SPA |
| `Vite` | Empaquetado ultrarrápido |
| `TailwindCSS` + `Shadcn/UI` | Estilado y componentes |
| `Framer Motion` | Animaciones |
| `react-i18next` | Soporte multilenguaje |
| `React Router DOM` | Ruteo client-side |
| `vite-plugin-pwa` | Service Worker + manifest |
| `Netlify` | Hosting y deploy |

---

## 🛠 Instalación y uso local

```bash
# Clonar el repo
git clone https://github.com/pablogaray/portfolio-2025.git
cd portfolio-2025

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev
```

## 📁 Estructura del proyecto

```txt
src/
├── assets/        # Imágenes y multimedia
├── components/    # Componentes reutilizables
├── hooks/         # Hooks personalizados
├── interfaces/    # Interfaces necesarias
├── lib/           # Traducciones y configuración
├── pages/         # Secciones del portfolio
├── router/        # Rutas
├── services/      # Servicios externos
├── utils/         # Utilidades reutilizables
└── main.tsx       # Punto de entrada
```

## 🧱 Funcionalidad PWA

- `vite-plugin-pwa` configurado para:
  - Precargar imágenes clave
  - Generar `manifest.webmanifest`
  - Habilitar cache offline básico

- Archivos incluidos:
  - `favicon.ico`, `apple-touch-icon.png`, `manifest.webmanifest`
  - `robots.txt` y `sitemap.xml` para SEO

> 💡 **Tip:** Si navegás a la derecha de la barra de direcciones en tu navegador, vas a ver el botón para instalar la app.

## 👨‍💻 Autor

🤘 **Pablo Garay**  

Desarrollador web orientado al backend con sólida experiencia en frontend.  
Fan del código limpio, el software bien pensado y el rock.

Algo de front tambien se, ¿no?

📍 *Córdoba, Argentina*

## 📝 Licencia

**MIT** – Usalo, forkealo, mejoralo.  