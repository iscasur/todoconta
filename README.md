# 🏢 Todoconta

**Sitio web profesional para servicios contables y software XMLSAT**

[![Astro](https://img.shields.io/badge/Astro-5.12.6-000000.svg?style=for-the-badge&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

## 📋 Descripción

Todoconta es un sitio web moderno y profesional desarrollado con **Astro** que presenta servicios contables integrales y software XMLSAT para empresarios. El sitio ofrece una experiencia de usuario excepcional con animaciones fluidas, diseño responsivo y optimización SEO.

### 🎯 Características Principales

- **Servicios Contables Integrales** desde $4,200/mes
- **Software XMLSAT** para gestión de facturas electrónicas
- **Asesoría fiscal en línea** con expertos certificados
- **Automatización con IA** para procesos contables
- **Garantía de tranquilidad fiscal** - cubrimos multas si no cumplimos

## 🚀 Tecnologías Utilizadas

- **[Astro](https://astro.build)** - Framework web moderno para sitios estáticos
- **TypeScript** - Tipado estático para mayor robustez
- **CSS Personalizado** - Sistema de diseño propio con variables CSS
- **Animaciones CSS** - Efectos visuales fluidos y responsivos
- **SEO Optimizado** - Meta tags y estructura semántica

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/iscasur/todoconta.git
   cd todoconta
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Vista previa de la build

# Herramientas Astro
npm run astro        # Comandos de Astro CLI
```

## 📁 Estructura del Proyecto

```
todoconta/
├── public/                 # Archivos estáticos
│   └── favicon.svg
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── sections/       # Secciones de la página
│   │   │   ├── Hero.astro
│   │   │   ├── Services.astro
│   │   │   ├── ValueProps.astro
│   │   │   ├── OnlineAdvice.astro
│   │   │   ├── AIAutomation.astro
│   │   │   ├── Stats.astro
│   │   │   └── CallToAction.astro
│   │   └── ui/            # Componentes de interfaz
│   │       ├── Button.astro
│   │       ├── Navbar.astro
│   │       ├── Footer.astro
│   │       └── ServiceCard.astro
│   ├── layouts/           # Layouts de página
│   │   └── Layout.astro
│   ├── pages/             # Páginas del sitio
│   │   └── index.astro
│   └── styles/            # Estilos CSS
│       ├── design-system.css
│       ├── global.css
│       └── reset.css
├── astro.config.mjs       # Configuración de Astro
├── package.json           # Dependencias y scripts
└── tsconfig.json          # Configuración de TypeScript
```

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño personalizado con:

- **Variables CSS** para colores, espaciado y tipografía
- **Componentes modulares** para reutilización
- **Animaciones CSS** para mejor UX
- **Diseño responsivo** para todos los dispositivos

### Paleta de Colores

```css
/* Colores principales */
--color-primary: #2563eb
--green-600: #16a34a
--color-primary: #ea580c
--color-text-primary: #111827
```

## 📱 Secciones del Sitio

### 1. **Hero Section**

- Título principal con call-to-action
- Estadísticas de la empresa
- Mockup del dashboard IA
- Animaciones de entrada

### 2. **Value Props**

- Beneficios principales del servicio
- Garantías y promesas de valor

### 3. **Services**

- Planes de servicio (Básico, Premium, Empresarial)
- Precios y características detalladas
- Comparación visual entre planes

### 4. **Online Advice**

- Servicios de asesoría en línea
- Horarios y disponibilidad

### 5. **AI Automation**

- Características de automatización con IA
- Beneficios tecnológicos

### 6. **Stats**

- Estadísticas de la empresa
- Métricas de éxito

### 7. **Call to Action**

- Formularios de contacto
- Información de contacto

## 🔧 Desarrollo

### Agregar Nuevas Secciones

1. Crear componente en `src/components/sections/`
2. Importar en `src/pages/index.astro`
3. Agregar estilos CSS personalizados

### Modificar Estilos

Los estilos se organizan en:

- `design-system.css` - Variables y sistema de diseño
- `global.css` - Estilos globales
- `reset.css` - Reset de CSS

### Animaciones

El sitio utiliza animaciones CSS con:

- `fade-in-up` - Entrada desde abajo
- `fade-in-left` - Entrada desde la izquierda
- `scale-in` - Escalado suave

## 📈 Optimización

### Performance

- **Build estático** con Astro
- **CSS optimizado** sin frameworks pesados
- **Imágenes optimizadas** en formato SVG
- **Lazy loading** para animaciones

### SEO

- Meta tags optimizados
- Estructura semántica HTML
- Open Graph tags
- Schema markup

## 🚀 Despliegue

### Netlify

```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### Vercel

```bash
npm run build
# Conectar repositorio a Vercel
```

### GitHub Pages

```bash
npm run build
# Configurar GitHub Actions para deploy
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Todoconta** - [info@todoconta.com](mailto:info@todoconta.com)

Enlace del proyecto: [https://github.com/iscasur/todoconta](https://github.com/iscasur/todoconta)

---

⭐ Si este proyecto te ayuda, ¡déjanos una estrella!
