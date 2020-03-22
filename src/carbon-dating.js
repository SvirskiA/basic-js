const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (arguments[0] && 
      typeof(sampleActivity) === 'string' && 
      parseFloat(sampleActivity) <= 15 && 
      parseFloat(sampleActivity) > 0){
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))/ ( 0.693 / HALF_LIFE_PERIOD));
  } else {
    return false;
  }
};