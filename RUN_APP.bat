@echo off
REM SAT Prep Platform - Local Development Server Launcher
REM This script will start the development server and open it in your browser

echo.
echo ================================================
echo   SAT/PSAT Prep Platform - Dev Server Launcher
echo ================================================
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo npm found:
npm --version
echo.

REM Navigate to the project directory
cd /d "%~dp0"
echo Project directory: %cd%
echo.

echo Starting development server...
echo When you see "VITE ready in XXX ms", open http://localhost:5173 in your browser.
echo Press Ctrl+C to stop the server.
echo.

timeout /t 2 /nobreak >nul
start http://localhost:5173
npm run dev

echo.
echo Server stopped.
pause
