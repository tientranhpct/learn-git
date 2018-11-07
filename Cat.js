let cat = function(_name, _color) {
	this.name = _name;
	this.color = _color;
	this.eat: function(mouse) {
		console.log(mouse);
	}
}