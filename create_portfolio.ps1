mkdir portfolio
cd portfolio

mkdir css, js, assets
mkdir assets\img, assets\cv

New-Item index.html -ItemType File
New-Item css\style.css -ItemType File
New-Item js\main.js -ItemType File
New-Item README.md -ItemType File

Write-Output "Structure du projet créée avec succès ✅"
