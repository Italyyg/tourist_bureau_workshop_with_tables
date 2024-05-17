"use strict";

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Float Trip",
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
        location: "145 FM 103",
        price: 65.00
    },
    {
        category: "Adventures",
        id: "A103",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },
    {
        category: "Arts & Crafts",
        id: "AC101",
        name: "Painting with a Twist : Oils",
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Arts & Crafts",
        id: "AC102",
        name: "Painting with a Twist : Watercolor",
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Museums",
        id: "M101",
        name: "Bravings Airship Museum",
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
        location: "101 Airfield Drive",
        price: 10.00
    },
    {
        category: "Museums",
        id: "M102",
        name: "Forks and Spoons Museum",
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
        location: "1056 Lost Knives Court",
        price: 3.00
    },
    {
        category: "Museums",
        id: "M103",
        name: "Steenges Computing Museum",
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
        location: "103 Technology Way",
        price: 0.00
    },
    {
        category: "Wine Tastings",
        id: "WT-101",
        name: "Hastings Winery Tours and Tastings",
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
        location: "10987 FM 1187",
        price: 12.00
    },
    {
        category: "Wine Tastings",
        id: "WT-102",
        name: "Lone Oak Winery",
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
        location: "121 Burleson Court",
        price: 0.00
    },
    {
        category: "Other",
        id: "OTH101",
        name: "Fire Department: Ride Along",
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
        location: "10 Redline Drive",
        price: 25.00
    },
    {
        category: "Other",
        id: "OTH102",
        name: "Homes For Our Neighbors",
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
        location: "Call (555) 555-5555",
        price: 0.00
    }
];

window.onload = function () {

    //run the code that populates the category dropdown
    initCategoriesDropdown();

    //get the catergory dropdown
    let catergoriesDropdown = document.querySelector("#categoriesSelect");

    //make sure we run the code to work the activities when categories select
    catergoriesDropdown.addEventListener("change", getActivities);

}
function getActivities(event) {

    //get the selected category from the dropdown which is also the event.target
    let selectedCategory = event.target.value;

    let matchingActivities = activities.filter((activity) => {

        //returning the every single option that it goes through and choosing the 
        //category and if it mathes the value in the selectedCategory then it returns it.
        return activity.category === selectedCategory;



    })
    //getting a hold of the table body so we can add rows to it for all the activities
    let tableBody = document.querySelector("#activitiesTableBody");
    //set the innterHTML to "" which clear it out
    tableBody.innerHTML = "";

    matchingActivities.forEach((activity) => {

        //running the function with the table that we grabbed from the HTML 
        //now the "acitivity" is going throught the list individually
        buildTableRow(tableBody, activity);


    })

    function buildTableRow(tableBody, data) {

        //create the row to hold the data
        let newRow = tableBody.insertRow(-1);

        //loop over all the properties in the object and create a cell for them 
        //data is the whole thing (the object) and property is grabbing them singularly 
        for (let property in data) {

            //grabbing the strings individually and fitting them in a cell
            let newTD = newRow.insertCell();
            newTD.innerText = data[property];
        }

 }

}



function initCategoriesDropdown() {
    //we are grabbing the dropdwon from the HTML page to work with it
    let catergoriesDropdown = document.querySelector("#categoriesSelect");
    //creating a element for the default option
    let defaultOption = document.createElement("option");

    //this is what we get back in the js when we ask for it 
    defaultOption.value = ""

    //this is what the user actually selects in the dropdown
    defaultOption.textContent = "Select a Category";

    //add the option we created to the dropdown
    catergoriesDropdown.appendChild(defaultOption);

    //write a loop to work with each individual category and build an option for it
    categories.forEach((category) => {

        //create the new option for the category we are on in the loop
        let newOption = document.createElement("option");

        //set the value for the option
        newOption.value = category;

        //set what the user sees 
        newOption.textContent = category;

        catergoriesDropdown.appendChild(newOption);


    })

}

function getActivitiesInCategory(activities, category) {

    //start by creating an empty list to hold our matches
    let matching = [];
    //number of items on the menu
    let numItems = activities.length;

    //loop over the activities to find matches
    for (let i = 0; i < numItems; i++) {
        if (activities[i].category === category) {
            //add that activity to our matches array
            matching.push(activities[i]);
        }
    }

    //return all the matching menu items
    return matching;
}

