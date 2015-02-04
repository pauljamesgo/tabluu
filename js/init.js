$(w).resize(function(){ //Update dimensions on resize
  sw = document.documentElement.clientWidth;
  sh = document.documentElement.clientHeight;
  checkMobile();
});
  
//Check if Mobile
function checkMobile() {
  mobile = (sw > breakpoint) ? false : true;

  if (!mobile) { //If Not Mobile
    $('[role="tabpanel"],.nav,.login').show(); //Show full navigation and search
  } else { //Hide 
    if(!$('#nav-anchors a').hasClass('active')) {
      $('.nav,.login').hide(); //Hide full navigation and search
    }
  }
}