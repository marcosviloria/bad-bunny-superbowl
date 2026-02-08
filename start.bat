@echo off
echo ========================================
echo Bad Bunny Super Bowl Setlist Predictor
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js found
echo.

REM Navigate to backend
cd backend

REM Install dependencies if not already done
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo ✓ Dependencies installed
    echo.
)

REM Check if .env exists
if not exist ".env" (
    echo.
    echo ⚠️  .env file not found!
    echo Please create .env file with your Spotify credentials:
    echo.
    echo Copy .env.example to .env and fill in:
    echo - SPOTIFY_CLIENT_ID (from https://developer.spotify.com/dashboard)
    echo - SPOTIFY_CLIENT_SECRET (from https://developer.spotify.com/dashboard)
    echo - OWNER_PASSWORD (your admin password)
    echo - SESSION_SECRET (any random string)
    echo.
    pause
    exit /b 1
)

echo ✓ Environment configured
echo.
echo Starting server...
echo http://localhost:5000
echo.
node server.js
