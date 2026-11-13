@echo off

:: Open PowerShell and start the Python HTTP server
start "" powershell -NoExit -Command ^
"python -m http.server 8000"

:: Wait a few seconds for the server to start
timeout /t 3 /nobreak >nul

:: Open the site in your default browser
start "" "http://localhost:8000"