// Returns an HTTP request object
function getRequestObject() {
    if (window.XMLHttpRequest) {
      return (new XMLHttpRequest());
    } 
    else if (window.ActiveXObject) {
      // For very old IE browsers (optional)
      return (new ActiveXObject("Microsoft.XMLHTTP"));
    } 
    else {
      global.alert("Ajax is not supported!");
      return(null); 
    }
  }
  // Makes an Ajax GET request to 'requestUrl'
  ajaxUtils.sendGetRequest = 
    function(requestUrl, responseHandler, isJsonResponse) {
      var request = getRequestObject();
      request.onreadystatechange = 
        function() { 
          handleResponse(request, 
                         responseHandler,
                         isJsonResponse); 
        };
      request.open("GET", requestUrl, true);
      request.send(null); // for POST only
    };