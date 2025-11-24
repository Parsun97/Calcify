#!/bin/bash

# Calcify - Quick Deployment Script for Vercel
# This script helps you deploy to Vercel quickly

echo "🚀 Calcify - Vercel Deployment Script"
echo "======================================"
echo ""

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run this script from /app/frontend directory"
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI not found!"
    echo "Installing Vercel CLI globally..."
    npm install -g vercel
    echo "✅ Vercel CLI installed successfully!"
    echo ""
fi

# Ask for deployment type
echo "Select deployment type:"
echo "1) Development preview"
echo "2) Production deployment"
echo ""
read -p "Enter your choice (1 or 2): " choice

case $choice in
    1)
        echo ""
        echo "🔨 Deploying to development preview..."
        vercel
        ;;
    2)
        echo ""
        echo "🚀 Deploying to production..."
        vercel --prod
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

echo ""
echo "✅ Deployment initiated!"
echo ""
echo "📝 Next steps:"
echo "1. Wait for deployment to complete"
echo "2. Visit the provided URL to view your site"
echo "3. Configure custom domain in Vercel dashboard (optional)"
echo "4. Set up Google AdSense (replace ad placeholders)"
echo ""
echo "📖 For detailed instructions, see: /app/DEPLOYMENT_GUIDE.md"
echo ""
echo "🎉 Happy deploying!"
