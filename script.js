var CountrysH={};

function AddCountry(CountryName,CapitalName) {
	CountrysH[CountryName]=CapitalName;
}

function DeleteCountry(CountryName) {
	delete CountrysH[CountryName];
}

function GetCountryInfo(CountryName) {
	if ( CountryName in CountrysH )
		return 'СТРАНА: ' + CountryName + ' СТОЛИЦА: ' + CountrysH[CountryName] ;
	else
		return 'НЕТ ИНФОРМАЦИИ О СТРАНЕ ' + CountryName + '!' ;
}

function ListCountrys() {
	var Res="";
	for ( var CN in CountrysH )
		Res+='\n'+GetCountryInfo(CN);
	return Res;
}

function addCountry() {
    var CountryName=prompt('Страна');
    var CapitalName=prompt('Столица');
    AddCountry(CountryName,CapitalName);
}

function infoAboutCountry() {
    var CountryName=prompt('Название страны ');
    alert(GetCountryInfo(CountryName));
}

function allCountries() {
    alert(ListCountrys());
}

function delCountry() {
    var CountryName=prompt('Название страны ');
    if (CountryName in CountrysH) {
        DeleteCountry(CountryName);
        alert(' Удалено ');
    } else {
        alert('Страны не найдено');
    }
}