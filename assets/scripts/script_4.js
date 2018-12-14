function unhide(divID) {
  var item = document.getElementById(divID);
  if (item) {
    item.className='unhidden';
  }
  else {
    document.title = "other";
  }
}

function hide(divID) {
  var item = document.getElementById(divID);
  if (item) {
    item.className='hidden';
  }
}

function showHide(what) {
  if (what == "top") {
    showPageElement("nation");
    showPageElement("region");
    showPageElement("state-level");
    return false;
  }
  if (what == "nation") {
    showPageElement("nation");
    hidePageElement("region");
    hidePageElement("state-level")
    return false;
  }
  if (what == "region") {
    hidePageElement("nation");
    showPageElement("region");
    hidePageElement("state-level");
    return false;
  }
  if (what == "state-level") {
    hidePageElement("nation");
    hidePageElement("region");
    showPageElement("state-level");
    return false;
  }
  return false;
}
function showPageElement(what)  
{  
    var obj = typeof what == 'object'  
        ? what : document.getElementById(what);  
  
    obj.style.display = 'block';  
    return false;  
}  
  
function hidePageElement(what)  
{  
    var obj = typeof what == 'object'  
        ? what : document.getElementById(what);  
  
    obj.style.display = 'none';  
    return false;  
}  
  
function togglePageElementVisibility(what)  
{  
    var obj = typeof what == 'object'  
        ? what : document.getElementById(what);  
  
    if (obj.style.display == 'none')  
        obj.style.display = 'block';  
    else  
        obj.style.display = 'none';  
    return false;  
}  
