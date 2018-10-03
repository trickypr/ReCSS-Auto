#!/bin/sh

echo "===  ReCSS Auto Builds  === "
echo "Make sure that this code is in a folder is called 'ReCSS-Auto'"
echo ""

echo "Duplicating"
echo ""
cd ..
cp -a ReCSS-Auto/ build/

cd build/

echo "Remove unnessasary files / folders"
echo ""
rm -rf .git/
rm _config.yml
rm .gitignore
rm firefox-build.sh
rm README.md
rm Screen\ Shot.pngs

echo "Compress and cleanup"
cd ..
zip ReCSS\ Auto.zip build/
rm -rf build/
