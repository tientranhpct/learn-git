let mouse = function(_name, _color) {
	this.name = _name;
	this.color = _color;
	this.dead = false;
	eat: function() {
		console.log('eat chesse');
	};
	die: function() {
		this.dead = true;
	}
}