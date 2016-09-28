'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//First and pike location.
function Location (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {//eslint desable line
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randCustomersPerHour = [];
  this.totalCookiesperHour = [];
  this.totalDailyCookieSale = 0;
  this.calcRandCustomersPerHour = function(){
    for(var i = 0; i < hours.length ; i++){
      this.randCustomersPerHour.push(Math.floor(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1) + this.minCustPerHour));
    }
  };
  this.cookiesPurchasedPerHour = function(){
    this.calcRandCustomersPerHour();
    for(var i = 0; i < hours.length ; i++){
      this.totalCookiesperHour.push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSale += this.totalCookiesperHour[i];
    }
  };
  this.render = function(){
    this.cookiesPurchasedPerHour();



  };
  this.render();
  myLocations.push(this);

};
//the house
var selectCookies = document.getElementById('cookieslocation');
var trEl = document.createElement('tr');
for(var i = 0; i < hours.length; i++){
  var thEl = document.createElement('th');
  thEl.textContent = hours[i];
  trEl.appendChild(thEl);
}
selectCookies.appendChild(trEl);

var myLocations = [];
new Location('firstAndPike',23, 65, 6.3);
new Location('SeaTacAirport', 3, 24, 1.2);
new Location('SeattleCenter',11 ,38,3.7);
new Location('CapitolHill',20 ,38 ,2.3);
new Location('Alki',2,16,4.6);


console.log(myLocations);
// console.log(myLocations.totalDailyCookieSale);
