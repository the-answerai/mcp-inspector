#!/bin/bash

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null
then
    echo "pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
fi

# Remove npm lock files
echo "Removing npm lock files..."
find . -name "package-lock.json" -type f -delete

# Clean node_modules
echo "Cleaning node_modules..."
find . -name "node_modules" -type d -exec rm -rf {} +

# Install dependencies with pnpm
echo "Installing dependencies with pnpm..."
pnpm install

echo "Conversion to pnpm completed successfully!" 