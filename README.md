# Fanduel Value Viewer

## Overview

This extension computes and displays the value of a pick when viewing a live or historical lineup. It's in very early stages and the code is shit, so it's all a WIP.

## Installation
Click the "Clone or Download" button and clone the repository or download the ZIP file.

Go to `chrome://extensions`.

Turn on "Developer Mode" at the top-right.

Click on "Load Unpacked" in the top-left and select the "fanduel\_viewer_extension" folder.

## How to use

Once the lineup pages loads, wait ~~5~~ 4 seconds (it's hardcoded in, I told you the code was shit). Then you have to click on the little arrow in the bottom right:
![example](assets/example.png)

Wait another ~~2~~ 1.5 seconds (yupp, another one) and then the value should appear next to the score.

## Issues
* Once the FanDuel website autorefreshes your live lineup scores, the values will disappear and you'll have to refresh the page to calculate them again. 
* If you resize the webpage causing the player's card to adjust its layout, you'll need to refresh the page
