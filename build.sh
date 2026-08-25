#!/bin/bash
set -e

echo "🚀 Starting combined build..."
python -m mkdocs build -f manual-v1/mkdocs.yml -d site/manual-v1
python -m mkdocs build -f manual-v2/mkdocs.yml -d site/manual-v2
cp index.html site/index.html

if [ -d "functions" ]; then
  cp -r functions site/functions
fi

echo "✅ Build finished!"
