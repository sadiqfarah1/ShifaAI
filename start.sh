#!/bin/bash
set -e

echo "Starting CTC Backend..."

# Run database migrations
echo "Running database migrations..."
alembic upgrade head

# Seed the database if needed
echo "Seeding database..."
python scripts/simple_seed.py

# Start the application
echo "Starting FastAPI server..."
uvicorn app.main:app --host 0.0.0.0 --port $PORT
