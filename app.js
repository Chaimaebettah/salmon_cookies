'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//create a constraction function
var selectCookies = document.getElementById('cookieslocation');

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

    //render the locations name on the table
    var trEl = document.createElement('tr');
    var firstColumn = document.createElement('td');
    firstColumn.textContent = this.locationName;
    trEl.appendChild(firstColumn);

//render the total cookies per hour for each location.
    for(var i = 0; i < this.totalCookiesperHour.length; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.totalCookiesperHour[i];
      trEl.appendChild(tdEl);
    }
    selectCookies.appendChild(trEl);
//render the daily location total for each location.
    var tdTotal = document.createElement('td');
    tdTotal.textContent = this.totalDailyCookieSale;
    trEl.appendChild(tdTotal);

  };
  this.render();
  myLocations.push(this);

};

//render the empty th



function displayTableHeader() {
  var trEl = document.createElement('tr');
  var emptyTrEl = document.createElement('th');
    emptyTrEl.textContent='';
    trEl.appendChild(emptyTrEl)
  //render the hours
  for(var i = 0; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  //render the  column daily location total
  var lastColumn = document.createElement('td');
  lastColumn.textContent='Daily location total';
  trEl.appendChild(lastColumn);
  selectCookies.appendChild(trEl);

}

function displayTableFooter() {
  var trEl = document.createElement('tr');
  var totalEl = document.createElement('th');
  totalEl.textContent='Total';
  trEl.appendChild(totalEl)

  for( var a = 0; a < hours.length; a++){
    var totalCookiesPerHour = 0;
    for(var b = 0; b < myLocations.length; b++){
        // console.log(myLocations[b].totalCookiesperHour)
        for( var c = 0; c < myLocations[b].totalCookiesperHour.length; c++){
          if(a === c){
            totalCookiesPerHour += myLocations[b].totalCookiesperHour[a];
          }
        }
    }
    console.log(totalCookiesPerHour);
    var totalForEachhour = document.createElement('th');
    totalForEachhour.textContent = totalCookiesPerHour;
    trEl.appendChild(totalForEachhour);

  }


  selectCookies.appendChild(trEl);

}


displayTableHeader();
// create a 5 instance.
var myLocations = [];
new Location('firstAndPike',23, 65, 6.3);
new Location('SeaTacAirport', 3, 24, 1.2);
new Location('SeattleCenter',11 ,38,3.7);
new Location('CapitolHill',20 ,38 ,2.3);
new Location('Alki',2,16,4.6);

displayTableFooter();



// console.log(myLocations);
// console.log(myLocations.totalDailyCookieSale);
