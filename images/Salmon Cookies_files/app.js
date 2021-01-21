'use strict'; 

var hours = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

//Table code
var tableBodyTop = document.getElementById('table-body-top');
var rowTopOne = document.createElement('tr'); 
var cellOne = 0;
for (var i = 0; i < 16; i++){
    var cellOne = document.createElement('td');
    cellOne.textContent = hours[i];
    rowTopOne.appendChild(cellOne);
}
tableBodyTop.appendChild(rowTopOne);

function tableRows(cities) {
    var tableBody = document.getElementById('table-body');
    var cell = 0;
    for (var j = 0; j < cities.length; j++) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.textContent = cities[j].title;
        row.appendChild(cell)
        var rowTotal = 0;

        for (var i = 0; i < 14; i++){
            var cell = document.createElement('td');
            var purchased = cities[j].generateCustomer(cities[j].maxHourly)
            cell.textContent = purchased;
            row.appendChild(cell);
            rowTotal += purchased;
        }

        var total = document.createElement('td');
        total.textContent = rowTotal;
        row.appendChild(total)

        tableBody.appendChild(row);
    } 
}

var cities = [
    {
        minHourly: 23,
        maxHourly: 65,
        AvgSale: 6.3,
        customersPerHour: null,
        salesEstimate: null,
        title: 'Seattle',
        generateCustomer: function (max) {
            var randomCustomer = Math.floor((Math.random() * max) + 1);
            this.customersPerHour = randomCustomer;
            return this.customersPerHour;
        },
        calculatePurchaseAvg: function (){
            var purchaAvg = (this.customersPerHour * this.AvgSale);
            this.salesEstimate = Math.floor(purchaAvg);
            return this.salesEstimate;
        }
    },
    {
        minHourly: 3,
        maxHourly: 24,
        AvgSale: 1.2,
        customersPerHour: null,
        salesEstimate: null,
        title: 'Tokyo',
        generateCustomer: function (max) {
            var randomCustomer = Math.floor((Math.random() * max) + 1);
            this.customersPerHour = randomCustomer;
            return this.customersPerHour;
        },
        calculatePurchaseAvg: function (){
            var purchaAvg = (this.customersPerHour * this.AvgSale);
            this.salesEstimate = Math.floor(purchaAvg);
            return this.salesEstimate;
        }
    },
    {
        minHourly: 11,
        maxHourly: 38,
        AvgSale: 3.7,
        customersPerHour: null,
        salesEstimate: null,
        title: 'Dubai',
        generateCustomer: function (max) {
            var randomCustomer = Math.floor((Math.random() * max) + 1);
            this.customersPerHour = randomCustomer;
            return this.customersPerHour;
        },
        calculatePurchaseAvg: function (){
            var purchaAvg = (this.customersPerHour * this.AvgSale);
            this.salesEstimate = Math.floor(purchaAvg);
            return this.salesEstimate;
        }
    },
    {
        minHourly: 20,
        maxHourly: 38,
        AvgSale: 2.3,
        customersPerHour: null,
        salesEstimate: null,
        title: 'Paris',
        generateCustomer: function (max) {
            var randomCustomer = Math.floor((Math.random() * max) + 1);
            this.customersPerHour = randomCustomer;
            return this.customersPerHour;
        },
        calculatePurchaseAvg: function (){
            var purchaAvg = (this.customersPerHour * this.AvgSale);
            this.salesEstimate = Math.floor(purchaAvg);
            return this.salesEstimate;
        }
    },
    {
        minHourly: 20,
        maxHourly: 38,
        AvgSale: 2.3,
        customersPerHour: null,
        salesEstimate: null,
        title: 'Lima',
        generateCustomer: function (max) {
            var randomCustomer = Math.floor((Math.random() * max) + 1);
            this.customersPerHour = randomCustomer;
            return this.customersPerHour;
        },
        calculatePurchaseAvg: function (){
            var purchaAvg = (this.customersPerHour * this.AvgSale);
            this.salesEstimate = Math.floor(purchaAvg);
            return this.salesEstimate;
        }
    }
];

tableRows(cities)

// // Seattle
// var seattle = {
//     minHourly: 23,
//     maxHourly: 65,
//     AvgSale: 6.3,
//     customersPerHour: null,
//     salesEstimate: null,
//     title: 'Seattle',
//     generateCustomer: function (max) {
//         var randomCustomer = Math.floor((Math.random() * max) + 1);
//         this.customersPerHour = randomCustomer;
//         return this.customersPerHour;
//     },
//     calculatePurchaseAvg: function (){
//         var purchaAvg = (this.customersPerHour * this.AvgSale);
//         this.salesEstimate = Math.floor(purchaAvg);
//         return this.salesEstimate;
//     },
// }

// console.log(seattle.generateCustomer(10));
// console.log(seattle.calculatePurchaseAvg())

// var divCityElement = document.createElement('div');
// var nameCityElement = document.createElement('p');


// var divElement = document.createElement('div');
// var unListElement = document.createElement('ul');

// divCityElement.append('Seattle');
// divElement.appendChild(divCityElement);
// divElement.appendChild(unListElement);

//     for (var i = 0; i < hours.length; i++) {
//         var listElement = document.createElement('li');
//         seattle.generateCustomer(seattle.maxHourly)
//         listElement.append(hours[i] + ': ' + seattle.calculatePurchaseAvg());
//         unListElement.append(listElement)
//     }

// var sectionElement = document.getElementById('profiles');
// divElement.append(unListElement);
// sectionElement.appendChild(divElement);

// // Tokyo
// var tokyo = {
//     minHourly: 3,
//     maxHourly: 24,
//     AvgSale: 1.2,
//     customersPerHour: null,
//     salesEstimate: null,
//     generateCustomer: function (max) {
//         var randomCustomer = Math.floor((Math.random() * max) + 1);
//         this.customersPerHour = randomCustomer;
//         return this.customersPerHour;
//     },
//     calculatePurchaseAvg: function (){
//         var purchaAvg = (this.customersPerHour * this.AvgSale);
//         this.salesEstimate = Math.floor(purchaAvg);
//         return this.salesEstimate;
//     }
// }

// console.log(tokyo.generateCustomer(10));
// console.log(tokyo.calculatePurchaseAvg())

// var divCityElement = document.createElement('div');
// var nameCityElement = document.createElement('p');


// var divElement = document.createElement('div');
// var unListElement = document.createElement('ul');

// divCityElement.append('tokyo');
// divElement.appendChild(divCityElement);
// divElement.appendChild(unListElement);

//     for (var i = 0; i < hours.length; i++) {
//         var listElement = document.createElement('li');
//         tokyo.generateCustomer(tokyo.maxHourly)
//         listElement.append(hours[i] + ': ' + tokyo.calculatePurchaseAvg());
//         unListElement.append(listElement)
//     }

// var sectionElement = document.getElementById('profiles');
// divElement.append(unListElement);
// sectionElement.appendChild(divElement);

// //Dubai
// var Dubai = {
//     minHourly: 11,
//     maxHourly: 38,
//     AvgSale: 3.7,
//     customersPerHour: null,
//     salesEstimate: null,
//     generateCustomer: function (max) {
//         var randomCustomer = Math.floor((Math.random() * max) + 1);
//         this.customersPerHour = randomCustomer;
//         return this.customersPerHour;
//     },
//     calculatePurchaseAvg: function (){
//         var purchaAvg = (this.customersPerHour * this.AvgSale);
//         this.salesEstimate = Math.floor(purchaAvg);
//         return this.salesEstimate;
//     }
// }

// console.log(Dubai.generateCustomer(10));
// console.log(Dubai.calculatePurchaseAvg())

// var divCityElement = document.createElement('div');
// var nameCityElement = document.createElement('p');


// var divElement = document.createElement('div');
// var unListElement = document.createElement('ul');

// divCityElement.append('Dubai');
// divElement.appendChild(divCityElement);
// divElement.appendChild(unListElement);

//     for (var i = 0; i < hours.length; i++) {
//         var listElement = document.createElement('li');
//         Dubai.generateCustomer(Dubai.maxHourly)
//         listElement.append(hours[i] + ': ' + Dubai.calculatePurchaseAvg());
//         unListElement.append(listElement)
//     }

// var sectionElement = document.getElementById('profiles');
// divElement.append(unListElement);
// sectionElement.appendChild(divElement);

// //Paris
// var Paris = {
//     minHourly: 20,
//     maxHourly: 38,
//     AvgSale: 2.3,
//     customersPerHour: null,
//     salesEstimate: null,
//     generateCustomer: function (max) {
//         var randomCustomer = Math.floor((Math.random() * max) + 1);
//         this.customersPerHour = randomCustomer;
//         return this.customersPerHour;
//     },
//     calculatePurchaseAvg: function (){
//         var purchaAvg = (this.customersPerHour * this.AvgSale);
//         this.salesEstimate = Math.floor(purchaAvg);
//         return this.salesEstimate;
//     }
// }

// console.log(Paris.generateCustomer(10));
// console.log(Paris.calculatePurchaseAvg())

// var divCityElement = document.createElement('div');
// var nameCityElement = document.createElement('p');


// var divElement = document.createElement('div');
// var unListElement = document.createElement('ul');

// divCityElement.append('Paris');
// divElement.appendChild(divCityElement);
// divElement.appendChild(unListElement);

//     for (var i = 0; i < hours.length; i++) {
//         var listElement = document.createElement('li');
//         Paris.generateCustomer(Paris.maxHourly)
//         listElement.append(hours[i] + ': ' + Paris.calculatePurchaseAvg());
//         unListElement.append(listElement)
//     }

// var sectionElement = document.getElementById('profiles');
// divElement.append(unListElement);
// sectionElement.appendChild(divElement);

// //Lima
// var Lima = {
//     minHourly: 20,
//     maxHourly: 38,
//     AvgSale: 2.3,
//     customersPerHour: null,
//     salesEstimate: null,
//     generateCustomer: function (max) {
//         var randomCustomer = Math.floor((Math.random() * max) + 1);
//         this.customersPerHour = randomCustomer;
//         return this.customersPerHour;
//     },
//     calculatePurchaseAvg: function (){
//         var purchaAvg = (this.customersPerHour * this.AvgSale);
//         this.salesEstimate = Math.floor(purchaAvg);
//         return this.salesEstimate;
//     }
// }

// console.log(Lima.generateCustomer(10));
// console.log(Lima.calculatePurchaseAvg())

// var divCityElement = document.createElement('div');
// var nameCityElement = document.createElement('p');


// var divElement = document.createElement('div');
// var unListElement = document.createElement('ul');

// divCityElement.append('Lima');
// divElement.appendChild(divCityElement);
// divElement.appendChild(unListElement);

//     for (var i = 0; i < hours.length; i++) {
//         var listElement = document.createElement('li');
//         Lima.generateCustomer(Lima.maxHourly)
//         listElement.append(hours[i] + ': ' + Lima.calculatePurchaseAvg());
//         unListElement.append(listElement)
//     }

// var sectionElement = document.getElementById('profiles');
// divElement.append(unListElement);
// sectionElement.appendChild(divElement);

