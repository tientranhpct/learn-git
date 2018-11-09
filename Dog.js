let dog = function(_name, _gender) {
	this.name = _name;
	this.gender = _gender;
	this.speak: function() {
		console.log('Gau Gau');
	}
}

let pluto = new dog('Pluto', 'Male');
let cat = new dog('Cat', 'Male');
let pig = new dog('PPig', 'FeMale');

console.log(pluto);