#!/bin/sh

# Color variable
green='\033[0;32m'
# Reset color
clear='\033[0m'

# Fetches latest from Github Repo, builds, and copies files to appropriate directory
echo "${green}Get latest changes...${clear}"
git fetch
git pull

echo "${green}Building...${clear}"
npm run build

echo "${green}Copying files...${clear}"
sudo cp -r dist/. /var/www/portfolio