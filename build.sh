#!/bin/bash
set -e

echo "🚀 Starting combined build..."
ROOT_DIR=$(pwd)

# Build manual-v1 to root site/manual-v1
python -m mkdocs build -f manual-v1/mkdocs.yml -d "$ROOT_DIR/site/manual-v1"

# Build manual-v2 to root site/manual-v2
python -m mkdocs build -f manual-v2/mkdocs.yml -d "$ROOT_DIR/site/manual-v2"

# Copy index.html to root site/index.html
cp index.html site/index.html

if [ -d "functions" ]; then
  cp -r functions site/functions
fi

echo "✅ Build finished successfully!"
