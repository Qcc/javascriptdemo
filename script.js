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

function Foo(name,color) {
  this.name = name;
  this.color = color;
  this.whatYouAre =function(){
    return "I\'am "+this.name +" " + this.color;
  }
}

;Foo.prototype = {
  sex:"man",
  say:function () {
    return "I\'am"+this.name+" "+this.color+" and "+this.sex;
  },
  sayhello:function(){return this.name+" hello!"}
}

;Foo.prototype = {
  sex:"man",
  say:function () {
    return "I\'am"+this.name+" "+this.color+" and "+this.sex;
  },
  sayhello:function(){return this.name+" hello!"}
}