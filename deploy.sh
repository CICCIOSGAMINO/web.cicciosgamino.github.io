#!/bin/bash

# abort on errors
set -e

npm run build

cd dist

# git init
# git remote add origin https://github.com/CICCIOSGAMINO/cicciosgamino.github.io.git

git add -A
git commit -m 'deploy'

git push -u origin master

cd -

# deploy on firebase hosting too (.firebaserc for setting the project)
firebase deploy --only hosting