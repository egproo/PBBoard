function get_cookie(cookie_name){cname=cookie_name+'=';cpos=document.cookie.indexOf(cname);if(cpos!=-1){cstart=cpos+cname.length;cend=document.cookie.indexOf(";",cstart);if(cend==-1){cend=document.cookie.length}return unescape(document.cookie.substring(cstart,cend))}return null}function multiquote_add(id){saved=new Array();clean=new Array();add=1;if(tmp=get_cookie('mqtids')){saved=tmp.split(",")}for(i=0;i<saved.length;i++){if(saved[i]!=""){if(saved[i]==id){add=0}else{clean[clean.length]=saved[i]}}}if(add){clean[clean.length]=id;eval("document.getElementById('mad_"+id+"').className=removequotebutton")}else{eval("document.getElementById('mad_"+id+"').className=addquotebutton")}pbb_setcookie('mqtids',clean.join(','));return false}function pbb_delcookie(){document.cookie="mqpid=0; expires=Fri, 27 Jul 2001 02:47:11 UTC; path=/"}function pbb_setcookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate()+exdays);var c_value=escape(value)+((exdays==null)?"":"; expires="+exdate.toUTCString());document.cookie=c_name+"="+c_value}