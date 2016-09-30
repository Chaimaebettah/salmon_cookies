'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//create a constraction function
var selectCookies = document.getElementById('cookieslocation');
var myLocations = [
  new CookieStand('firstAndPike',23, 65, 6.3),
  new CookieStand('SeaTacAirport', 3, 24, 1.2),
  new CookieStand('SeattleCenter',11 ,38,3.7),
  new CookieStand('CapitolHill',20 ,38 ,2.3),
  new CookieStand('Alki',2,16,4.6),
];
var locationForm = document.getElementById('cookieform');

//creates a tr and appends a child to it.
function row(child){
  var element = document.createElement('tr');
  if(child){
    element.appendChild(child);
  }
  return element;
}

//creates a th or td and appends text to it.
function column(child, type){
  var element = document.createElement(type);
  if(child){
    element.textContent = child;
  }
  return element;
}


function CookieStand (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
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
    var rowElement = row(column(this.locationName,'td'));
    //render the total cookies per hour for each location.
    for(var i = 0; i < hours.length; i++){
      rowElement.appendChild(column(this.totalCookiesperHour[i],'td'));
    }
    rowElement.appendChild(column(this.totalDailyCookieSale,'td'));
    selectCookies.appendChild(rowElement);
  };
};

//render the empty th
function displayTableHeader() {
  var rowElement = row(column('Locations','th'));
  //render the hours
  for(var i = 0; i < hours.length; i++){
    rowElement.appendChild(column(hours[i],'th'));
  }
  //render the  column daily location total
  rowElement.appendChild(column('Location total','th'));
  selectCookies.appendChild(rowElement);
}
function displayTableFooter() {
  var rowElement = row(column('Total','th'));
  var totalOfDailyCookies = 0;
  for( var a = 0; a < hours.length; a++){
    var total = 0;
    for(var b = 0; b < myLocations.length; b++){
      total += myLocations[b].totalCookiesperHour[a];
    }
    rowElement.appendChild(column(total,'th'));
    totalOfDailyCookies += total;
  }
  rowElement.appendChild(column(totalOfDailyCookies,'th'));
  selectCookies.appendChild(rowElement);
}
//loop through all locations and render it.
function displayLocations() {
  for(var i = 0; i < myLocations.length; i++) {
    myLocations[i].render();
  }
}
//displays the table.
function displayTable(){
  //clear the table before creating elements
  selectCookies.textContent = '';
  displayTableHeader();
  displayLocations();
  displayTableFooter();
}
displayTable();

//get the values from the form and render it.
locationForm.addEventListener('submit',function(event){
  event.preventDefault();
  var nameInput = event.target.name.value;
  var minInput = parseInt(event.target.min.value);
  var maxInput = parseInt(event.target.max.value);
  var avgInput = parseInt(event.target.avg.value);
  var newLocation = new CookieStand(nameInput,minInput,maxInput,avgInput);
  myLocations.unshift(newLocation);
  console.log(newLocation);
  displayTable();
  //delete the value from all inputs.
  for( var i = 0; i < event.target.length; i++){
    event.target[i].value = null;
  }

});
