#!/bin/bash

# Weavolution Deployment Script

echo "🚀 Starting Weavolution deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🏗️ Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "🌐 Ready for deployment!"
    echo ""
    echo "To deploy to Vercel:"
    echo "1. Push your code to GitHub"
    echo "2. Connect your repository to Vercel"
    echo "3. Vercel will automatically deploy"
    echo ""
    echo "Or deploy manually with:"
    echo "vercel --prod"
else
    echo "❌ Build failed!"
    exit 1
fi 