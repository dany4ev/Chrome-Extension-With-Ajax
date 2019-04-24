chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    var chromedata = JSON.stringify(request);
    console.log(chromedata);

    // Note: Make http call here
    // Note: your api's url here
    var apiUrl = 'http://localhost:6825/api/chrome/DataFromChrome';
    $.ajax({
      url: apiUrl,
      type: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      data: chromedata,
      success: function (data, textStatus, xhr) {
        console.log(data);
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log('Error in Operation');
      }
    });
  }
);
