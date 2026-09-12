@echo off
title Nūr al-Haramayn
cd /d "%~dp0"
if not exist package.json (
  echo package.json not found. Please run this file from the project folder.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed. Check your Node.js/npm installation and internet connection.
    pause
    exit /b 1
  )
)
echo.
echo Starting Nūr al-Haramayn at http://127.0.0.1:5500/
echo Keep this window open while using the site.
echo.
npm start
pause
