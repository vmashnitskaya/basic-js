module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  let monthNum = date.getMonth() + 1;

  if (isNaN(monthNum) || Object.prototype.toString.call(date) !== '[object Date]') throw new Error;

  return getMonth(monthNum);
  
}

function getMonth(num){
  let season = '';
  switch (true) {
    case num  == 12 || num == 1 || num == 2:
      season = 'winter';
      break;
    case num  == 3 || num == 4 || num == 5:
      season = 'spring';
      break;
    case num  == 6 || num == 7|| num == 8:
      season = 'summer';
      break;
    default:
      season = 'autumn';
      break;
  }
  return season;
}

