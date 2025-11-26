# crear-estructura.ps1
# Script para crear la estructura de carpetas y archivos del proyecto "mi-cuerpo-mis-reglas"

$root = "mi-cuerpo-mis-reglas"

# --- Carpetas ---
$folders = @(
    "$root",
    "$root\src",
    "$root\src\css",
    "$root\src\js",
    "$root\src\assets",
    "$root\src\assets\images",
    "$root\src\assets\audio",
    "$root\src\assets\audio\narrations",
    "$root\src\data",
    "$root\build",
    "$root\dist"
)

foreach ($f in $folders) {
    if (-not (Test-Path -Path $f)) {
        New-Item -ItemType Directory -Path $f | Out-Null
        Write-Host "Carpeta creada: $f"
    } else {
        Write-Host "Ya existe: $f"
    }
}

# --- Archivos de texto ---
$files = @{
    "$root\package.json" = @'
{
  "name": "mi-cuerpo-mis-reglas",
  "version": "1.0.0",
  "description": "Proyecto educativo interactivo",
  "main": "main.js",
  "scripts": {
    "start": "node main.js"
  },
  "author": "",
  "license": "MIT"
}
'@
    "$root\main.js" = @'
// main.js - punto de entrada
console.log("Mi Cuerpo, Mis Reglas iniciado");
'@
    "$root\README.md" = @'
# Mi Cuerpo, Mis Reglas

Estructura base del proyecto educativo interactivo.
'@
    "$root\.gitignore" = @'
node_modules/
dist/
build/
*.log
.DS_Store
'@
    "$root\src\index.html" = @'
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi Cuerpo, Mis Reglas</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <h1>Bienvenido a Mi Cuerpo, Mis Reglas</h1>
  <script src="js/app.js"></script>
</body>
</html>
'@
    "$root\src\css\styles.css" = @'
/* Estilos principales */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
}
'@
    "$root\src\js\app.js" = @'
// app.js - inicializa la app
console.log("Aplicación cargada correctamente");
'@
    "$root\src\js\modules.js" = "// modules.js - módulos del proyecto"
    "$root\src\js\audio.js" = "// audio.js - control de sonidos"
    "$root\src\js\navigation.js" = "// navigation.js - navegación"
    "$root\src\data\scenarios.json" = "[]"
    "$root\src\data\config.json" = "{}"
    "$root\dist\README.txt" = "Archivos compilados (.exe) se generan aquí."
}

foreach ($entry in $files.GetEnumerator()) {
    $path = $entry.Key
    $content = $entry.Value
    $dir = Split-Path $path -Parent

    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }

    $content | Out-File -FilePath $path -Encoding UTF8 -Force
    Write-Host "Archivo creado: $path"
}

# --- Archivos placeholder vacíos ---
$placeholders = @(
    "$root\src\assets\images\logo.png",
    "$root\src\assets\images\background.png",
    "$root\src\assets\audio\bienvenida.mp3",
    "$root\src\assets\audio\feedback-correcto.mp3",
    "$root\src\assets\audio\feedback-incorrecto.mp3",
    "$root\src\assets\audio\narrations\modulo1-intro.mp3",
    "$root\src\assets\audio\narrations\modulo2-intro.mp3",
    "$root\src\assets\audio\narrations\modulo3-intro.mp3",
    "$root\src\assets\audio\narrations\modulo4-intro.mp3",
    "$root\src\assets\audio\narrations\modulo5-intro.mp3",
    "$root\build\icon.ico"
)

foreach ($file in $placeholders) {
    if (-not (Test-Path $file)) {
        New-Item -ItemType File -Path $file | Out-Null
        Write-Host "Archivo vacío creado: $file"
    }
}

Write-Host ""
Write-Host "✅ Estructura completada en: $(Resolve-Path $root)"
