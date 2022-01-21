window.addEventListener('load', () => {
  // Get params from the URL
var getParamsArray = function (url) {
var params = {};
var parser = document.createElement('a');
parser.href = url;
var query = parser.search.substring(1);
var vars = query.split('&');
for (var i = 0; i < vars.length; i++) {
var pair = vars[i].split('=');
params[pair[0]] = decodeURIComponent(pair[1]);
 }

 const valuesArray = Object.values(params);
return valuesArray;
};
const filterParam = getParamsArray(window.location.href);// If there are filter params

$('.text-field_search').val(filterParam[0]).trigger('change');
var el = document.querySelector('.text-field_search');
el.dispatchEvent(new Event('input', { bubbles: true }));

})

(function() {
	// create a new Library instance and store it in a variable called "projectsGrid"
	var projectsGrid = new FsLibrary('.full-list')
  
	// define our filter group(s)
	var myFilters = [
    {
  	filterWrapper: ".search-wrapper",
		filterType: "exclusive"
	}
	]

 // run filter on our instance
	projectsGrid.filter({
		filterArray: myFilters, // the filter group name we defined
    activeClass: 'fltr-active', // the active class we give to our buttons
    filterReset:'.filter-reset-search', // reset all active filter button
		animation: {
			enable: true,
			duration: 200,
			easing: 'ease-out',
			effects: 'fade translate(0px,20px)'
			}
  })
})();

// immediately/self invoked function. This function executes right away
(async function() {
  // create a new Library instance and store it in a variable called "customBlogPosts"
  var customBlogPosts = new FsLibrary('.full-list')

  // run nest on our instance
  customBlogPosts.nest({
     textList: '.text-of-categories-list',  // plaintext comma separated list
     nestSource: '.nest-multi-reference',  // CMS list we are taking real tags from
     nestTarget: '.multi-ref-target'  // where we paste the items from nestSource
  })
})();