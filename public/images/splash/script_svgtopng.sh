#!/bin/bash
# modify the svg files, set the background and create the png files 
for i in *.[Ss][Vv][Gg];do

# set the background you need into the splash-screen
inkscape $i --export-background="#ff9c08" --export-type=png

done