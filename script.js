function loacXML() {
  var xmlhttp;
  if(window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest
    console.log(xmlhttp + " 支持XMLHttpRequest ");
  }else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    console.log(xmlhttp + " 支持ActiveXObject ");
}
  xmlhttp.onreadystatechange
}
loacXML();