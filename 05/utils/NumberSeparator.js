
// separator 1000
function numberSeparator(e) {
	return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default numberSeparator;
