module.exports = function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';

  let m = date.getMonth() + 1;

  if (m < 3 || m > 11) return 'winter';

  else if (m > 2 && m < 6) return 'spring';

  else if (m > 5 && m < 9) return 'summer';

  else if (m > 8 && m < 12) return 'autumn';


  // } else if(arr[1] > 1 && arr[1] < 5){
  //   return 'spring';
  // } else if(arr[1] > 4 && arr[1] < 8){
  //   return 'summer';
  // } else if(arr[1] > 7 && arr[1] < 10){
  //   return 'autumn';
  // }
};


//throw 'Not implemented';
