function getSettle(aDate) {
  var mySheets = SpreadsheetApp.openById(<YOUR_SPREADSHEET_APP_ID>)
  var mySheet = mySheets.getSheetByName(aDate);
  var myPlayers = mySheet.getRange("A:A1").getValues();
  var myPlayerSettles = {};
  for (var i = 0; i < myPlayers.length; i++) {
    var myPlayer = myPlayers[i].join();
    if (myPlayer != '') {
      myPlayerSettles[myPlayer] = +mySheet.getRange(i+1, 4).getValue().toFixed(2);
    }
  }
  return myPlayerSettles;
}