#!/bin/bash

# SAT Prep Platform - Local Development Server Launcher
# This script will start the development server and open it in your browser

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║   SAT/PSAT Prep Platform - Local Development Server           ║"
echo "║                Starting Application...                         ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ ERROR: npm is not installed or not in PATH"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✓ npm found"
echo ""
echo "Installing dependencies (if needed)..."
echo ""

# Navigate to the script directory
cd "$(dirname "$0")"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing npm packages..."
    npm install
    echo ""
fi

echo "✓ Starting development server..."
echo ""
echo "🚀 The app will open at http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the dev server and open browser
if command -v open &> /dev/null; then
    # macOS
    open http://localhost:5173
elif command -v xdg-open &> /dev/null; then
    # Linux
    xdg-open http://localhost:5173
else
    # Fallback
    echo "📂 Opening browser manually at: http://localhost:5173"
fi

npm run dev
