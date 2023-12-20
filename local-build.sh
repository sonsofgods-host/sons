#!/bin/bash

# Contenido de local_build.sh
#!/bin/bash

# Cambiar al directorio de la aplicación
cd src

# Instalar dependencias
npm install --force

# Construir la aplicación
ng build

# Regresar al directorio raíz
cd ..

# Añadir el CNAME si es necesario
# echo "33k.site" > docs/CNAME

# Añadir todos los cambios al área de preparación
git add .

# Realizar el commit
git commit -m "Build production"

# Subir los cambios al repositorio remoto
git push origin main
