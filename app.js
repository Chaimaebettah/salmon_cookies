'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//First and pike location.
var totalFirstAndPike = 0;
var firstAndPike = {
  minCustPerHour:23,
  maxCustPerHour:65,
  avgCookiesPerCust:6.3,
  randCustomersPerHour :[],
  calcRandCustomersPerHour:function(){
    for(var i = 0; i < hours.length ; i++){
      this.randCustomersPerHour.push(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1) + this.minCustPerHour);
    }
  },
  totalCookiesperHour:[],
  cookiesPurchasedPerHour: function(){
    for(var j = 0; j < hours.length ; j++){
      this.totalCookiesperHour.push(Math.floor(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      totalFirstAndPike += this.totalCookiesperHour[j];
    }
  },

};
firstAndPike.calcRandCustomersPerHour();
firstAndPike.cookiesPurchasedPerHour();
console.log(firstAndPike.totalCookiesperHour);
console.log(totalFirstAndPike);

var selectCookies = document.getElementById('cookies_list');

for(var x = 0; x < hours.length; x++){
  selectCookies.innerHTML += '<li>' + hours[x] + ': ' + firstAndPike.totalCookiesperHour[x] + '  Cookies' + '</li>';
}
selectCookies.innerHTML += '<li>' + 'The total is :' + ' ' + totalFirstAndPike + ' Cookies' + '</li>';




//SeaTac Airport location.
var totalSeaTacAirport = 0;
var seaTacAirport = {
  minCustPerHour:3,
  maxCustPerHour:24,
  avgCookiesPerCust:1.2,
  randCustomersPerHour :[],
  calcRandCustomersPerHour:function(){
    for(var i = 0; i < hours.length ; i++){
      this.randCustomersPerHour.push(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1) + this.minCustPerHour);
    }
  },
  totalCookiesperHour:[],
  cookiesPurchasedPerHour: function(){
    for(var j = 0; j < hours.length ; j++){
      this.totalCookiesperHour.push(Math.floor(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      totalSeaTacAirport += this.totalCookiesperHour[j];
    }
  },

};
seaTacAirport.calcRandCustomersPerHour();
seaTacAirport.cookiesPurchasedPerHour();
console.log(seaTacAirport.totalCookiesperHour);
console.log(totalSeaTacAirport);

var seaTacSelector = document.getElementById('seatac_airport');

for(var y = 0; y < hours.length; y++){
  seaTacSelector.innerHTML += '<li>' + hours[y] + ': ' + seaTacAirport.totalCookiesperHour[y] + '  Cookies' + '</li>';
}
seaTacSelector.innerHTML += '<li>' + 'The total is :' + ' ' + totalSeaTacAirport + ' Cookies' + '</li>';





//Seattle Center location.
var totalSeattleCenter = 0;
var seattleCenter = {
  minCustPerHour:11,
  maxCustPerHour:38,
  avgCookiesPerCust:3.7,
  randCustomersPerHour :[],
  calcRandCustomersPerHour:function(){
    for(var i = 0; i < hours.length ; i++){
      this.randCustomersPerHour.push(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1) + this.minCustPerHour);
    }
  },
  totalCookiesperHour:[],
  cookiesPurchasedPerHour: function(){
    for(var j = 0; j < hours.length ; j++){
      this.totalCookiesperHour.push(Math.floor(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      totalSeattleCenter += this.totalCookiesperHour[j];
    }
  },

};
seattleCenter.calcRandCustomersPerHour();
seattleCenter.cookiesPurchasedPerHour();
console.log(seattleCenter.totalCookiesperHour);
console.log(totalSeattleCenter);

var seattleSelector = document.getElementById('seattle_center');

for(var z = 0; z < hours.length; z++){
  seattleSelector.innerHTML += '<li>' + hours[z] + ': ' + seattleCenter.totalCookiesperHour[z] + '  Cookies' + '</li>';
}
seattleSelector.innerHTML += '<li>' + 'The total is :' + ' ' + totalSeattleCenter + ' Cookies' + '</li>';




//Capito Hill location.
var totalCapitoHill = 0;
var capitoHill = {
  minCustPerHour:20,
  maxCustPerHour:38,
  avgCookiesPerCust:2.3,
  randCustomersPerHour :[],
  calcRandCustomersPerHour:function(){
    for(var i = 0; i < hours.length ; i++){
      this.randCustomersPerHour.push(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1) + this.minCustPerHour);
    }
  },
  totalCookiesperHour:[],
  cookiesPurchasedPerHour: function(){
    for(var j = 0; j < hours.length ; j++){
      this.totalCookiesperHour.push(Math.floor(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      totalCapitoHill += this.totalCookiesperHour[j];
    }
  },

};
capitoHill.calcRandCustomersPerHour();
capitoHill.cookiesPurchasedPerHour();
console.log(capitoHill.totalCookiesperHour);
console.log(totalCapitoHill);

var capitoHillSelector = document.getElementById('capitol_hill');

for(var a = 0; a < hours.length; a++){
  capitoHillSelector.innerHTML += '<li>' + hours[a] + ': ' + capitoHill.totalCookiesperHour[a] + '  Cookies' + '</li>';
}
capitoHillSelector.innerHTML += '<li>' + 'The total is :' + ' ' + totalCapitoHill + ' Cookies' + '</li>';



//alki location.
var totalAlki = 0;
var alki = {
  minCustPerHour:23,
  maxCustPerHour:65,
  avgCookiesPerCust:6.3,
  randCustomersPerHour :[],
  calcRandCustomersPerHour:function(){
    for(var i = 0; i < hours.length ; i++){
      this.randCustomersPerHour.push(Math.random() * ((this.maxCustPerHour - this.minCustPerHour) + 1) + this.minCustPerHour);
    }
  },
  totalCookiesperHour:[],
  cookiesPurchasedPerHour: function(){
    for(var j = 0; j < hours.length ; j++){
      this.totalCookiesperHour.push(Math.floor(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      totalAlki += this.totalCookiesperHour[j];
    }
  },

};
alki.calcRandCustomersPerHour();
alki.cookiesPurchasedPerHour();
console.log(alki.totalCookiesperHour);
console.log(totalAlki);

var alkiSelector = document.getElementById('alki');

for(var b = 0; b < hours.length; b++){
  alkiSelector.innerHTML += '<li>' + hours[b] + ': ' + alki.totalCookiesperHour[b] + '  Cookies' + '</li>';
}
alkiSelector.innerHTML += '<li>' + 'The total is :' + ' ' + totalAlki + ' Cookies' + '</li>';
