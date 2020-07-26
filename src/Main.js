function onOpen() {
  var mySpreadsheet = SpreadsheetApp.getActive();
  var myMenuItems = [
    {name: 'Settle', functionName: 'run'}
  ];
  mySpreadsheet.addMenu('SettleBot', myMenuItems);
}

function run() {
  var myDate = SpreadsheetApp.getActive().getActiveSheet().getName();
  var mySettle = getSettle(myDate);
  var myResult = generateTransferString(mySettle);
  sendSettle(myDate, myResult);
}