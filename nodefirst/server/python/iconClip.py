#!/usr/bin/python3
# demo https://www.jianshu.com/p/bae4848664ee

import os, sys
from PIL import Image

def convertImg(agr1):
    print(agr1)

    currentPath = os.path.abspath(os.path.dirname(__file__))

    img = Image.open(currentPath+"/rocket_icon.png")
    x,y = img.size 

    # set white background
    wbImg = Image.new('RGBA', (int(img.size[0]*1.1),int(img.size[1]*1.1)), (255,255,255))
    wbImg.paste(img, (int(x*0.05),int(y*0.05)), img)


    #resize
    resizeList = [1024,180,120]
    for aSize in resizeList:
        aImg = wbImg.resize((aSize,aSize))
        aImg.save(currentPath+"/"+"icon_"+str(aSize)+".png")
        print(aImg)
        pass

convertImg(sys.argv[1])