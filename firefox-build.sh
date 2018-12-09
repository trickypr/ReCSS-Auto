#!/bin/sh

echo "===  ReCSS Auto Builds  === "
echo "Make sure that this code is in a folder is called 'ReCSS-Auto'"
echo ""

cd ..
cp -a ReCSS-Auto/ build/

cd build/

rm ReCSS\ Auto.zip
rm -rf .git/
rm _config.yml
rm .gitignore
rm firefox-build.sh
rm README.md
rm Screen\ Shot.png

cd ..
zip ReCSS-Auto/ReCSS\ Auto.zip build/*
zip ReCSS-Auto/ReCSS\ Auto.zip build/**/*
rm build/
