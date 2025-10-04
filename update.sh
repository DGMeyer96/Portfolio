#!/bin/sh

# Color variables
red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
blue='\033[0;34m'
magenta='\033[0;35m'
cyan='\033[0;36m'

# Reset color
clear='\033[0m'

# Fetches latest from Github Repo, builds, and copies files to appropriate directory
echo -e "${green}Get latest changes...${clear}"
git fetch
git pull

echo "${green}Building...${clear}"
npm run build

echo "${green}Copying files...${clear}"
sudo cp -r dist/. /var/www/portfolio