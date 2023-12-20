#!/bin/bash

# Contenido de local_build.sh
npm install
ng build
# echo "33k.site" > docs/CNAME  # Ajusta "your-app-name" al nombre de tu aplicación Angular
git add .
git commit -m "Build production"
git push origin main
