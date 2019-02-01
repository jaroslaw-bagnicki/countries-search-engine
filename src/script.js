// Const
var URL = 'https://restcountries.eu/rest/v1/name/';

// UI bindings
var searchBtn = $('#search-btn').click(searchCountries);
var searchBtnIcon = searchBtn.find('.fas');
var searchInput = $('#search-input');
var countriesList = $('#countries-list');


function searchCountries() {
  var countryName = searchInput.val();
  if (countryName.length) {
    toggleSpinner();
    countriesList.empty();
    $.ajax({
      url: URL + countryName,
      method: 'GET',
      success: showCuntriesList,
      error: requestError
    });
  }
}

function showCuntriesList(countriesData) {
  countriesData.forEach(function(country) {
    countriesList.append('<li>' + country.name + '</li>');
  });
  toggleSpinner();
}

function requestError(res) {
  if (res.status === 404) {
    countriesList.append('Country not found :(');
  } else {
    countriesList.append('Something goes wrong :(. Try one more time.');
  }
  toggleSpinner();
}

function toggleSpinner() {
  searchBtnIcon.toggleClass('fa-search fa-circle-notch fa-spin');
}