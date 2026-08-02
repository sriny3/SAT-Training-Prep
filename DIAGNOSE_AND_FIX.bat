@echo off
REM SAT Prep Platform - Diagnostic and Fix Script
REM This script will diagnose and fix npm/vite issues

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║        SAT Prep Platform - Diagnostic & Fix Utility            ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
echo [1/5] Checking if Node.js is installed...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is NOT installed!
    echo Please download from: https://nodejs.org/
    pause
    exit /b 1
)
echo ✓ Node.js found
node --version

REM Check if npm is installed
echo.
echo [2/5] Checking if npm is installed...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm is NOT installed!
    echo Please reinstall Node.js
    pause
    exit /b 1
)
echo ✓ npm found
npm --version

REM Navigate to project directory
echo.
echo [3/5] Navigating to project directory...
cd /d "%~dp0"
if %errorlevel% neq 0 (
    echo ❌ Failed to navigate to project directory
    pause
    exit /b 1
)
echo ✓ In project directory
echo Current directory: %cd%

REM Clean install node_modules
echo.
echo [4/5] Cleaning and reinstalling dependencies...
echo This may take 1-2 minutes...
echo.

if exist node_modules (
    echo Removing old node_modules folder...
    rmdir /s /q node_modules >nul 2>nul
    echo ✓ Old node_modules removed
)

echo Installing fresh dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ npm install failed!
    echo Please check your internet connection and try again
    pause
    exit /b 1
)
echo ✓ Dependencies installed successfully

REM Test if vite is available
echo.
echo [5/5] Verifying Vite installation...
where npx >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npx not found
    pause
    exit /b 1
)

npx vite --version
if %errorlevel% neq 0 (
    echo ❌ Vite is not working
    pause
    exit /b 1
)
echo ✓ Vite is ready!

REM All checks passed
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║              ✓ ALL CHECKS PASSED - READY TO RUN               ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
echo Next steps:
echo   1. Run: npm run dev
echo   2. Wait for "VITE ready" message
echo   3. Open: http://localhost:5173
echo.
pause
