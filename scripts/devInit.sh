#!/bin/sh

rm logs/transpilers.out
touch logs/transpilers.out
gnome-terminal -- tail -f logs/transpilers.out

# Transpilador SASS
scripts/sassTranspiler.sh > logs/transpilers.out &

rm logs/server.out
touch logs/server.out
gnome-terminal -- tail -f logs/server.out
nodemon server/server.js > logs/server.out