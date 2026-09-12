Set-Location $PSScriptRoot
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { Write-Host 'Node.js 20+ is required.'; exit 1 }
if (-not (Test-Path 'node_modules')) { npm install; if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE } }
if (-not (Test-Path '.env')) { Copy-Item '.env.example' '.env' }
Write-Host 'Starting Nūr al-Haramayn secure server at http://127.0.0.1:5500/'
Write-Host 'Do NOT use VS Code Live Server for this build.'
npm start
