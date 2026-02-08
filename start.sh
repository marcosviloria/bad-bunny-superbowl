#!/bin/bash

echo "========================================"
echo "Bad Bunny Super Bowl Setlist Predictor"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js found"
echo ""

# Navigate to backend
cd backend

# Install dependencies if not already done
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo "✓ Dependencies installed"
    echo ""
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo ""
    echo "⚠️  .env file not found!"
    echo "Please create .env file with your Spotify credentials:"
    echo ""
    echo "Copy .env.example to .env and fill in:"
    echo "- SPOTIFY_CLIENT_ID (from https://developer.spotify.com/dashboard)"
    echo "- SPOTIFY_CLIENT_SECRET (from https://developer.spotify.com/dashboard)"
    echo "- OWNER_PASSWORD (your admin password)"
    echo "- SESSION_SECRET (any random string)"
    echo ""
    exit 1
fi

echo "✓ Environment configured"
echo ""
echo "Starting server..."
echo "http://localhost:5000"
echo ""
node server.js
