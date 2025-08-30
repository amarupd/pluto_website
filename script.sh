#!/bin/bash

ROOT_DIR='/var/www/website/'


cd $ROOT_DIR
git stash
echo "stashed changes"
git pull origin master
echo "pulled the latest code"
npm i
echo "package installed"
npm run prod
echo "build generated and service reloaded"
pm2 save
exit 1