function ResizeIt(what,maxWidth,maxHeight){var imgHeight;var imgWidth;imgWidth=what.width;imgHeight=what.height;resize=0;if(maxWidth<1 || maxHeight<1){return false;}widthorig=what.width;heightorig=what.height;if(parseInt(what.width)>maxWidth){what.height=(maxWidth/what.width)*what.height;what.width=maxWidth;resize=1;}if(parseInt(what.height)>maxHeight){what.width=(maxHeight/what.height)*what.width;what.height=maxHeight;resize=1;}if(resize==1){image=new Image();image=what;newImage=image.cloneNode(true);newImage.origHeight=image.height;newImage.origWidth=image.width;if(image.outerHTML){}else{newImage.onclick=function(){};}if(parentNode=image.parentNode){textMessage=lang_Resize+" "+imgWidth+"*"+imgHeight;elem=document.createElement("div");var newDiv=null;newDiv=document.createElement("div");newDiv.setAttribute("class", "resize");$(document).ready(function(){$(".resize_img").colorbox({rel:'resize_img',width:"75%",height:"75%",scrolling:true});});newDiv.innerHTML="<div class=\"smallfont\" id="+what.alt+"><a class=\"resize_img\" href="+what.src+" title="+what.alt+">"+textMessage+"</a></div>";elem.appendChild(newImage);elem.appendChild(newDiv);tableRow=document.createElement("div");tableRow.appendChild(elem);TableElem=document.createElement("div");TableElem.appendChild(tableRow);frag=document.createElement("div");frag.appendChild(TableElem);if(image.outerHTML){image.outerHTML=frag.innerHTML;}else{parentNode.replaceChild(TableElem,image);}}}}