function sendSettle(aDate, aSettle) {
  var myTitleString = "__**Settle for game on: " + aDate + "**__\n";
  var myEndingString = "\nPlease reply to this message if you believe there is a mistake!"
  var myWebHook = "<YOUR_WEBHOOK_HERE>";
  var myJson = {"content": myTitleString + aSettle + myEndingString}
  var myOptions = {
    method: "POST",
    payload: myJson,
    contentType: 'application/x-www-form-urlencoded'
  };
  var myResponse = UrlFetchApp.fetch(myWebHook, myOptions);
}