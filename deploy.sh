#!/bin/bash

# 🚀 TechFlow Deployment Script
# This script helps you deploy your website to various platforms

echo "🚀 TechFlow Deployment Helper"
echo "=============================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📋 Available deployment options:"
echo "1. Build for production"
echo "2. Deploy to Vercel"
echo "3. Deploy to Netlify"
echo "4. Deploy to GitHub Pages"
echo "5. Preview build locally"
echo ""

read -p "Choose an option (1-5): " choice

case $choice in
    1)
        echo "🔨 Building for production..."
        npm run build
        echo "✅ Build complete! Files are in the 'dist' directory."
        ;;
    2)
        echo "🚀 Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "Installing Vercel CLI..."
            npm install -g vercel
        fi
        npm run build
        vercel --prod
        ;;
    3)
        echo "🚀 Deploying to Netlify..."
        if ! command -v netlify &> /dev/null; then
            echo "Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        npm run build
        netlify deploy --prod --dir=dist
        ;;
    4)
        echo "🚀 Deploying to GitHub Pages..."
        if ! npm list gh-pages &> /dev/null; then
            echo "Installing gh-pages..."
            npm install --save-dev gh-pages
        fi
        npm run build
        npx gh-pages -d dist
        ;;
    5)
        echo "👀 Building and previewing locally..."
        npm run build
        npm run preview
        ;;
    *)
        echo "❌ Invalid option. Please choose 1-5."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment process completed!"
echo "📖 For more detailed instructions, check DEPLOYMENT.md"