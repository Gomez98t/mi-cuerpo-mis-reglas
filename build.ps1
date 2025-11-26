# Build script for Windows (.exe) with lock handling and fallback
$ErrorActionPreference = 'SilentlyContinue'

function Kill-IfRunning($name) {
    taskkill /F /IM $name /T 2>$null | Out-Null
}

Write-Host "[1/5] Cerrando procesos que pueden bloquear el build..."
Kill-IfRunning "Mi Cuerpo Mis Emociones.exe"
Kill-IfRunning "electron.exe"
Kill-IfRunning "app-builder.exe"
Kill-IfRunning "node.exe"
Kill-IfRunning "OneDrive.exe"
Start-Sleep -Seconds 2

Write-Host "[2/5] Limpiando carpeta dist..."
Remove-Item -Recurse -Force "./dist" -ErrorAction SilentlyContinue

Write-Host "[3/5] Verificando dependencias (npm ci si es necesario)..."
if (-not (Test-Path "./node_modules")) {
  npm ci
  if ($LASTEXITCODE -ne 0) { throw "Fallo 'npm ci'" }
}

Write-Host "[4/5] Compilando hacia carpeta original 'dist'..."
npx electron-builder --win --x64 --publish never
if ($LASTEXITCODE -ne 0) {
  Write-Warning "Build en 'dist' falló. Intentando fallback a 'dist-build'..."

  # Fallback a salida alternativa
  npx electron-builder --win --x64 --config.directories.output="dist-build" --publish never
  if ($LASTEXITCODE -ne 0) { throw "Fallo build en 'dist-build'" }

  Write-Host "[5/5] Copiando artefactos a 'dist'..."
  if (-not (Test-Path "./dist")) { New-Item -ItemType Directory "./dist" | Out-Null }
  Copy-Item -Force ./dist-build/*.exe ./dist/ 2>$null
  Copy-Item -Force ./dist-build/*.blockmap ./dist/ 2>$null
}

Write-Host "✅ Build finalizado. Revisa la carpeta 'dist'."

