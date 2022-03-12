#!/bin/sh
rm output.out
touch output.out
gnome-terminal -- tail -f output.out
gnome-terminal -- pwd > output.out
nohup nodemon server/server.js > output.out
