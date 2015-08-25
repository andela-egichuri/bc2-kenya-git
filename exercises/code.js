function datatypes ( x ) {
	var type = typeof x;
	if (type === 'number') {
		if (x % 1 === 0) {
			return 'integer';
		}
		return 'float';
	}
	else if (type === 'object') {
	    if (x === null) {
	        return 'null';
	    }
	    return 'object';
	}
	else if (type === 'true' || type === 'false') {
	    return 'boolean';
	}
	    return type;
}

var a = null;
var b = 85;
var c = {};
var d = "Test";
var e = 3.2;

console.log (datatypes (a));
console.log (datatypes (b));
console.log (datatypes (c));
console.log (datatypes (d));
console.log (datatypes (e));