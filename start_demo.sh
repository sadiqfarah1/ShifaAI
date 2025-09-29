#!/bin/bash

# Shifa AI Demo Startup Script

echo "🚀 Starting Shifa AI Demo..."
echo ""

# Set environment variables
export PILOT_NO_PHI=true
export DEMO_ACCELERATE=true

# Kill any existing process on port 8000
echo "📋 Checking for existing backend on port 8000..."
lsof -ti:8000 | xargs kill -9 2>/dev/null || true

# Start the demo backend
echo "✅ Starting demo backend on port 8000..."
cd "$(dirname "$0")"
uvicorn demo_backend:app --reload --port 8000 &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Check if backend is running
if curl -s http://localhost:8000/healthz > /dev/null; then
    echo "✅ Demo backend is running!"
    echo "   - Web UI: http://localhost:8000"
    echo "   - API Docs: http://localhost:8000/docs"
    echo "   - Health: http://localhost:8000/healthz"
    echo ""
    echo "🎯 Ready to demo! Press Ctrl+C to stop."
    echo ""
    
    # Open browser (optional)
    # open http://localhost:8000  # macOS
    # xdg-open http://localhost:8000  # Linux
    
    # Wait for user to stop
    wait $BACKEND_PID
else
    echo "❌ Failed to start backend"
    exit 1
fi
