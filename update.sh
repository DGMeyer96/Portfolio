# Fetches latest from Github Repo, builds, and copies files to appropriate directory
git fetch
git pull
npm run build
sudo cp -r dist/. /var/www/portfolio