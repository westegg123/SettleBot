// In: Map<player,net>
// return: String representing total transfers to be made
function generateTransferString(aPlayerNetValues) {
  if (verify(aPlayerNetValues) != true) {
    return "Amounts don't sum to 0! Please check numbers and try again";
  }
  var myCumulativeTransfers = "";

  for (var myPlayerIndex in aPlayerNetValues) {
    var myCurrentPlayerNet = aPlayerNetValues[myPlayerIndex];
    if (myCurrentPlayerNet > 0) {
      for (var myPartnerIndex in aPlayerNetValues) {
        var myPotentialPartnerNet = aPlayerNetValues[myPartnerIndex];
        if (!isOppositeSign(myCurrentPlayerNet, myPotentialPartnerNet)) {
          continue;
        }
        var myTransferSum = Math.abs(Math.min(Math.abs(aPlayerNetValues[myPlayerIndex]), Math.abs(aPlayerNetValues[myPartnerIndex])));
        myCumulativeTransfers += (myPartnerIndex + " (" + resolveTagForName(myPartnerIndex) + ")" + " sends " + myPlayerIndex + " " + myTransferSum + "\n");
        aPlayerNetValues[myPlayerIndex] -= myTransferSum;
        aPlayerNetValues[myPartnerIndex] += myTransferSum;
        aPlayerNetValues[myPlayerIndex] = +aPlayerNetValues[myPlayerIndex].toFixed(2);
        aPlayerNetValues[myPartnerIndex] = +aPlayerNetValues[myPartnerIndex].toFixed(2);
        if (aPlayerNetValues[myPlayerIndex] == 0.0) {
          break;
        }
      }
    } 
  }
  return myCumulativeTransfers;
}

function isOppositeSign(aCurrentPlayer, aPotentialPartner) {
  if (aCurrentPlayer > 0) {
    return aPotentialPartner < 0;
  }
  return aPotentialPartner > 0;
}

// In: Map<player, net>
// return: whether nets sum to 0
function verify(aPlayerNetValues) {
  var mySum = 0;
  for (var myPlayerIndex in aPlayerNetValues) {
    mySum += aPlayerNetValues[myPlayerIndex];
  }
  mySum = +mySum.toFixed(2);
  return mySum == 0;
}