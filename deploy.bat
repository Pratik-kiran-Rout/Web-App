@echo off
REM 🚀 TechFlow Deployment Script for Windows
REM This script helps you deploy your website to various platforms

echo 🚀 TechFlow Deployment Helper
echo ==============================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the project root.
    pause
    exit /b 1
)

echo 📋 Available deployment options:
echo 1. Build for production
echo 2. Deploy to Vercel
echo 3. Deploy to Netlify
echo 4. Deploy to GitHub Pages
echo 5. Preview build locally
echo.

set /p choice="Choose an option (1-5): "

if "%choice%"=="1" (
    echo 🔨 Building for production...
    call npm run build
    echo ✅ Build complete! Files are in the 'dist' directory.
) else if "%choice%"=="2" (
    echo 🚀 Deploying to Vercel...
    where vercel >nul 2>nul
    if errorlevel 1 (
        echo Installing Vercel CLI...
        call npm install -g vercel
    )
    call npm run build
    call vercel --prod
) else if "%choice%"=="3" (
    echo 🚀 Deploying to Netlify...
    where netlify >nul 2>nul
    if errorlevel 1 (
        echo Installing Netlify CLI...
        call npm install -g netlify-cli
    )
    call npm run build
    call netlify deploy --prod --dir=dist
) else if "%choice%"=="4" (
    echo 🚀 Deploying to GitHub Pages...
    call npm list gh-pages >nul 2>nul
    if errorlevel 1 (
        echo Installing gh-pages...
        call npm install --save-dev gh-pages
    )
    call npm run build
    call npx gh-pages -d dist
) else if "%choice%"=="5" (
    echo 👀 Building and previewing locally...
    call npm run build
    call npm run preview
) else (
    echo ❌ Invalid option. Please choose 1-5.
    pause
    exit /b 1
)

echo.
echo 🎉 Deployment process completed!
echo 📖 For more detailed instructions, check DEPLOYMENT.md
pause