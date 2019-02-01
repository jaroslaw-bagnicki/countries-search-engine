// Const
var URL = 'https://restcountries.eu/rest/v1/name/';

// UI bindings
var searchBtn = $('#search-btn').click(searchCountries);
var searchInput = $('#search-input');
var countriesList = $('#countries-list');

function searchCountries() {
  var countryName = searchInput.val();
  if (countryName.length) {
    countryName = 'Poland';
    $.ajax({
      url: URL + countryName,
      method: 'GET',
      success: showCuntriesList
    });
  }
}

function showCuntriesList(res) {
  console.log(res);
}