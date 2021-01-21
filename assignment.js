//kilometerToMeter function here
function kilometerToMeter(kiloMeter) {
  var meter = 0;
  if (kiloMeter >= 0) {
    meter = kiloMeter * 1000;
  } else {
    meter = 'Length should be Positive Number';
  }
  return meter;
}


//budgetCalculator function here
function budgetCalculator(watchCount, phoneCount, laptopCount) {
  var totalPrice = 0;
  if (watchCount >= 0 && watchCount == parseInt(watchCount) && phoneCount >= 0 && phoneCount == parseInt(phoneCount) && laptopCount >= 0 && laptopCount == parseInt(laptopCount)) {
    totalPrice = (watchCount * 50) + (phoneCount * 100) + (laptopCount * 500);
  } else {
    totalPrice = 'Number of product should be Positive Integer Number'
  }
  return totalPrice;
}


//hotalCost function here
function hotelCost(dayCount) {
  var totalHotelCost = 0;
  if (dayCount >= 0 && dayCount == parseInt(dayCount)) {
    if (dayCount <= 10) {
      totalHotelCost = dayCount * 100;
    } else if (dayCount <= 20) {
      var firstDaysCost = 10 * 100;
      var remaining = dayCount - 10;
      var secondDaysCost = remaining * 80;
      totalHotelCost = firstDaysCost + secondDaysCost;
    } else {
      var firstDaysCost = 10 * 100;
      var secondDaysCost = 10 * 80;
      var remaining = dayCount - 20;
      var thirdDaysCost = remaining * 50;
      totalHotelCost = firstDaysCost + secondDaysCost + thirdDaysCost;
    }
  } else {
    totalHotelCost = 'Days should be a Positive Integer Number'
  }
  return totalHotelCost;
}


//megaFriend function here
function megaFriend(friendArray) {
  var isStringArray = true;
  if (friendArray.length < 1) {
    isStringArray = false;
  }
  for (i = 0; i < friendArray.length; i++) {
    if (typeof (friendArray[i]) !== "string") {
      isStringArray = false;
    }
  }
  if (isStringArray) {
    var largestName = friendArray[0];
    for (var i = 1; i < friendArray.length; i++) {
      if (friendArray[i].length > largestName.length) {
        largestName = friendArray[i];
      }
    }
  } else {
    largestName = 'Please Enter a valid(not-empty) String Array';
  }

  return largestName;
}