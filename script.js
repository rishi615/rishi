$(document).ready(function(){
  $('#float').on('click',(function(){
    $('#content').toggleClass("hide show"); 
    $('#toggle').toggleClass("fa-list-ul fa-times");
  }));
  $('#content a').on('click',(function(){
    $('#content').toggleClass("show hide"); 
    $('#toggle').toggleClass("fa-times fa-list-ul");
  }));
});
function openChoice(evt, certName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(certName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();