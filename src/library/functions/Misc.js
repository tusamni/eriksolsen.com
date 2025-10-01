export function formatCurrency(number) {
	return new Intl.NumberFormat("en-US", {
		style: 'currency',
		currency: "USD"
	}).format(number);
}

export function slugify(str) {
	str = str.replace(/^\s+|\s+$/g, ''); // Trim leading/trailing white space
	str = str.toLowerCase(); // Convert string to lowercase
	str = str.replace(/[^a-z0-9 -]/g, '') // Remove any non-alphanumeric characters
			 .replace(/\s+/g, '-') // Replace spaces with hyphens
			 .replace(/-+/g, '-'); // Remove consecutive hyphens
	
			 return str;
  }