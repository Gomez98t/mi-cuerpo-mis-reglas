<div align="center">

# 🌈 Mi Cuerpo, Mis Emociones

### Educación Sexual Inclusiva para Todos

*Aplicación educativa de escritorio diseñada para niños de 1-5 años y personas con discapacidad cognitiva*

[![Electron](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)](https://www.electronjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_AAA-blue?style=for-the-badge)](https://www.w3.org/WAI/WCAG2AAA-Conformance)
[![Platform](https://img.shields.io/badge/Platform-Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://www.microsoft.com/windows)
[![Offline](https://img.shields.io/badge/Works-Offline-success?style=for-the-badge)](https://github.com)

---

[📥 Instalación](#-instalación) • [🎮 Módulos](#-módulos) • [♿ Accesibilidad](#-accesibilidad) • [🔨 Compilar](#-compilar-para-windows) • [📖 Documentación](#-uso)

</div>

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [📥 Instalación](#-instalación)
- [🔨 Compilar para Windows](#-compilar-para-windows)
- [🎮 Módulos](#-módulos)
- [♿ Accesibilidad](#-accesibilidad)
- [🎨 Tecnologías](#-tecnologías)
- [📝 Uso](#-uso)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🖼️ Capturas de Pantalla](#️-capturas-de-pantalla)
- [🔒 Seguridad y Privacidad](#-seguridad-y-privacidad)
- [👥 Público Objetivo](#-público-objetivo)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)
- [🆘 Soporte](#-soporte)

---

## ✨ Características

<div align="center">

| Característica | Descripción |
|:-------------:|:------------|
| 🎓 | **Educación sexual integral e inclusiva** adaptada a diferentes capacidades |
| 🎯 | **5 módulos interactivos** diseñados pedagógicamente |
| ♿ | **Diseño altamente accesible** cumpliendo estándares WCAG AAA |
| 🗣️ | **Síntesis de voz en español** para apoyo auditivo |
| 🎨 | **Interfaz visual intuitiva** con colores y elementos amigables |
| 🏆 | **Sistema de recompensas** para motivar el aprendizaje |
| 📴 | **Funciona sin conexión a Internet** para mayor privacidad |

</div>

---

## Instalación

### 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- ![Node.js](https://img.shields.io/badge/Node.js-16+-43853D?style=flat-square&logo=node.js&logoColor=white) Node.js versión 16 o superior
- ![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat-square&logo=npm&logoColor=white) npm o yarn

### 🚀 Pasos de Instalación

1️⃣ **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/mi-cuerpo-mis-reglas.git
cd mi-cuerpo-mis-reglas
```

2️⃣ **Instalar dependencias**
```bash
npm install
```

3️⃣ **Ejecutar en modo desarrollo**
```bash
npm start
```

> 💡 **Tip**: La aplicación se abrirá automáticamente en una ventana de Electron

---

## 🔨 Compilar para Windows

### 📦 Crear Ejecutable (.exe)

Para generar un archivo ejecutable portable:

```bash
npm run build:win
```

📁 El archivo `.exe` se generará en la carpeta `dist/`

### 💿 Crear Instalador

Para crear un instalador completo con NSIS:

```bash
npm run dist
```

📁 El instalador se generará en la carpeta `dist/`

> ⚠️ **Nota**: La compilación para Windows requiere estar en un sistema Windows o usar herramientas de compilación cruzada.

---

## 🎮 Módulos

La aplicación incluye **5 módulos educativos** cuidadosamente diseñados:

### 1. 👤 Conozco mi Cuerpo
Identificación de partes del cuerpo de manera apropiada y educativa.

### 2. 😊 Mis Emociones
Reconocimiento y expresión de emociones básicas (alegría, tristeza, enojo, miedo).

### 3. 🛡️ Mi Espacio Personal
Comprensión de límites personales y el concepto de consentimiento.

### 4. 🤝 Personas de Confianza
Identificación de figuras de apoyo y cuándo pedir ayuda.

### 5. 🏆 Recompensas
Sistema de logros y certificado de completación para motivar el aprendizaje.

---

## ♿ Accesibilidad

Esta aplicación ha sido diseñada siguiendo los más altos estándares de accesibilidad:

<table>
<tr>
<td width="50%">

### 🎯 Diseño Visual
- ✅ Botones grandes (mínimo 60x60px)
- ✅ Contraste alto (WCAG AAA)
- ✅ Textos grandes y claros
- ✅ Colores diferenciados

</td>
<td width="50%">

### 🔊 Soporte Auditivo
- ✅ Síntesis de voz en español
- ✅ Instrucciones habladas
- ✅ Control de volumen
- ✅ Repetición de audio

</td>
</tr>
<tr>
<td width="50%">

### ⌨️ Navegación
- ✅ Navegación por teclado completa
- ✅ Atajos de teclado intuitivos
- ✅ Enfoque visible
- ✅ Orden lógico de tabulación

</td>
<td width="50%">

### 🔍 Compatibilidad
- ✅ Lectores de pantalla
- ✅ Tecnologías asistivas
- ✅ Diferentes resoluciones
- ✅ Modo de alto contraste

</td>
</tr>
</table>

---

## 🎨 Tecnologías

<div align="center">

### Stack Tecnológico

| Tecnología | Uso |
|:-----------|:----|
| ![Electron](https://img.shields.io/badge/Electron-191970?style=flat-square&logo=Electron&logoColor=white) **Electron** | Framework para aplicación de escritorio multiplataforma |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) **HTML5** | Estructura y contenido de la interfaz |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) **CSS3** | Estilos y diseño visual responsivo |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **JavaScript** | Lógica de la aplicación (vanilla JS) |
| ![Web Speech API](https://img.shields.io/badge/Web_Speech_API-4285F4?style=flat-square&logo=google&logoColor=white) **Web Speech API** | Síntesis de voz en español |

</div>

---

## 📝 Uso

### ⌨️ Controles de Teclado

| Tecla | Acción |
|:------|:-------|
| `→` Flecha Derecha | Siguiente módulo |
| `←` Flecha Izquierda | Módulo anterior |
| `Home` | Volver al inicio |
| `Esc` Escape | Volver al inicio |

### 🔊 Controles de Audio

- 🔊 **Activar/Desactivar** - Control de sonido general
- 🔄 **Repetir** - Volver a escuchar la instrucción
- 🔉 **Volumen** - Ajustar nivel de audio

---

## 📁 Estructura del Proyecto

```
mi-cuerpo-mis-reglas/
│
├── 📂 src/                      # Código fuente de la aplicación
│   ├── 📄 index.html           # Página principal
│   ├── 📂 css/                 # Hojas de estilo
│   │   └── 📄 styles.css       # Estilos principales
│   ├── 📂 js/                  # Lógica de la aplicación
│   │   ├── 📄 app.js           # Controlador principal
│   │   └── � modules.js       # Lógica de módulos
│   ├── 📂 assets/              # Recursos multimedia
│   │   ├── 📂 images/          # Imágenes e iconos
│   │   └── 📂 sounds/          # Archivos de audio
│   └── 📂 data/                # Datos de configuración
│       └── 📄 content.json     # Contenido de módulos
│
├── 📂 build/                    # Recursos para compilación
│   └── 📄 icon.ico             # Icono de la aplicación
│
├── 📄 main.js                   # Proceso principal de Electron
├── 📄 package.json              # Configuración del proyecto
├── 📄 README.md                 # Este archivo
└── 📄 LICENSE                   # Licencia MIT
```

---

## 🖼️ Capturas de Pantalla

> 📸 *Próximamente: Capturas de pantalla de la aplicación en funcionamiento*

<!-- 
Descomenta y añade tus capturas de pantalla aquí:

<div align="center">

### Pantalla de Inicio
![Pantalla de Inicio](./screenshots/home.png)

### Módulo: Conozco mi Cuerpo
![Módulo 1](./screenshots/module1.png)

### Sistema de Recompensas
![Recompensas](./screenshots/rewards.png)

</div>
-->

---

## 🔒 Seguridad y Privacidad

La privacidad y seguridad de los usuarios es nuestra máxima prioridad:

- 🔐 **Cero recopilación de datos** - No se almacena información personal
- 📴 **100% Offline** - Funciona completamente sin conexión a Internet
- 🚫 **Sin telemetría** - No envía información a servidores externos
- �️ **Datos locales** - Todo se procesa en el dispositivo del usuario
- 👶 **Seguro para niños** - Diseñado con protección infantil en mente

---

## 👥 Público Objetivo

Esta aplicación está diseñada específicamente para:

<table>
<tr>
<td width="50%">

### 👶 Usuarios Principales
- Niños de 1 a 5 años
- Personas con discapacidad cognitiva
- Personas con necesidades educativas especiales

</td>
<td width="50%">

### 👨‍🏫 Facilitadores
- Padres y tutores
- Educadores y maestros
- Terapeutas ocupacionales
- Psicólogos infantiles

</td>
</tr>
</table>

> ⚠️ **Importante**: Esta aplicación debe usarse siempre bajo supervisión de un adulto responsable o profesional capacitado.

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. 🍴 Haz un Fork del proyecto
2. 🌿 Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🔃 Abre un Pull Request

### 📝 Guías de Contribución

- Mantén la accesibilidad como prioridad
- Documenta los cambios claramente
- Prueba en diferentes configuraciones
- Respeta las guías de estilo del código

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License - Uso educativo y terapéutico

Copyright (c) 2025 Mi Cuerpo, Mis Emociones

Se permite el uso, copia, modificación y distribución de este software
con fines educativos y terapéuticos.
```

---

## 🆘 Soporte

### 💬 ¿Necesitas Ayuda?

Si encuentras algún problema o tienes sugerencias:

- 🐛 [Reportar un bug](https://github.com/tu-usuario/mi-cuerpo-mis-reglas/issues)
- 💡 [Solicitar una función](https://github.com/tu-usuario/mi-cuerpo-mis-reglas/issues)
- 📧 Contactar al equipo de desarrollo

### 📚 Recursos Adicionales

- [Documentación de Electron](https://www.electronjs.org/docs)
- [Guías de Accesibilidad WCAG](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

---

<div align="center">

### 💖 Hecho con amor para la educación inclusiva

**⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub ⭐**

---

*Última actualización: Noviembre 2025*

</div>
