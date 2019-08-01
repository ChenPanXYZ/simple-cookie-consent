function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

window.onload = function(){
	
	if(getCookie("cookieConsent") != 'seen') {
		setTimeout(function () {
			$("#cookie_consent").fadeIn(200);
		 }, 1000);
		$(".seen_cookie").click(function() {
			$("#cookie_consent").fadeOut(200);
			document.cookie = "cookieConsent=seen";
		}); 
	}
	
};