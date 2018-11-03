function playclip() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all){
  document.all.sound.src = "Mouse Click Sound-23037-Free-Loops.com.mp3";
 }
}
else {
{
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}
}
