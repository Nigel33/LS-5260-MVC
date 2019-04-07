function getKey(context) {
	return Object.keys(context)[0];
}

function upcaseFirst(string) {
	return string[0].toUpperCase() + string.slice(1);
}

function splitCamelCase(string) {
	return string.replace(/([A-Z][a-z]+)/g, function(str){
		return ` (${str[0].toLowerCase() + str.slice(1)})`;
	});
}

Handlebars.registerHelper('format_price', function(price) {
	return (+price).toFixed(2);
});

Handlebars.registerHelper('getValue', function(context){
	let key = getKey(context);

	return (+context[key]).toFixed(4);
});

Handlebars.registerHelper('formatKey', function(context) {
	let value = splitCamelCase(getKey(context));

	return upcaseFirst(value);
});
