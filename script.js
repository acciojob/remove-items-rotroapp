let id = document.querySelector('#colorSelect').value;
console.log(id.value);
let val = document.querySelector('display');

id.eventListner( 'click', () => {
	val = id;
})
