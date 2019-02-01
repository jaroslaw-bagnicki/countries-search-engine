// Const
var URL = 'https://restcountries.eu/rest/v1/name/';

// UI bindings
var searchInput = $('#search-input').keyup(debounce(handleTyping, 1000));
var searchLabel = $('#search-label').click(searchCountries);
var searchLabelIcon = searchLabel.find('.fas');
var countriesList = $('#countries-list');

function handleTyping(e) {
  countriesList.empty();
  searchCountries(); 
}

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
  searchLabelIcon.toggleClass('fa-search fa-circle-notch fa-spin');
}