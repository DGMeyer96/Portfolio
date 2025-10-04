# Fetches latest from Github Repo, builds, and copies files to appropriate directory
echo "Get latest changes..."
git fetch
git pull

echo "Building..."
npm run build

echo "Copying files..."
sudo cp -r dist/. /var/www/portfolio