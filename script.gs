function doGet(request) {
  var result = "";
  switch(request.parameter.path) {
    default:
      result = index_get(request.parameter);
      break;
  }
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(request) {
  var result = "";
  switch(request.parameter.path) {
    default:
      result = index_post(request.parameter);
      break;
  }
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

function index_get(params) {
  return "";
}

function index_post(params) {
  return "";
}
