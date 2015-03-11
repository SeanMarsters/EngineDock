// PARRALAX SCRIPT
$(window).stellar();

var list = [{
    company: 'Twitter',
    technology: ['Ruby', 'Python'],
    location: 'San Francisco'
},{
    company: 'HubSpot',
    technology: ['Java', 'JavaScript'],
    location: 'Boston'
},{
    company: 'EngineDock',
    technology: ['PHP', '.NET'],
    location: 'Boston'
},{
    company: 'Driftt',
    technology: ['Java', 'JavaScript'],
    location: 'Boston'
}];

//  FUNCTION TO DISPLAY THE RESULTS
function displayAll(items) {

	// if (items.length < 1){
	// 	alert("none");
	// } else {
		for (var i = 0; i < items.length; i++) {
			$(".Results").append("<li>"+ items[i].company + "</li>" );
		};
}

// displayAll(list);

// FUNCTION TO FILTER THE LIST BY LOCATION
function filterByLocation(location, items){
	var updatedList = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].location === location){
			updatedList.push(items[i]);
		}
	}
	return updatedList;
}
function filterByTech(technology, items){
	var updated_list = [];
	for (var i = 0; i < items.length; i++) {
		
		if (items[i].technology.indexOf(technology) >= 0){
			updated_list.push(items[i]);
		}
	}
	return updated_list;
}

function filterBoth(items, technology, location){
	var filteredByTech = filterByTech(technology, items);
	var filteredByBoth = filterByLocation(location, filteredByTech);
	displayAll(filteredByBoth);
}

// SUBMTI SEARCH 
$("#search-form").on('submit', function(e){
	e.preventDefault();
	// GET THE LOCATION THE USER ENTERS
	var location = $("#inputLocation").val();
	var tech = $("#inputTech").val();
	// FILTER THE LIST BY THE LOCATION
	// filterByLocation(location, list);
	filterBoth(list, tech, location);

	$("#inputLocation").val(' ');
	$("#inputTech").val(' ');
});
