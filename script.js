let id = document.querySelector('#colorSelect');
console.log(id.value);
let val = document.querySelector('display');

id.eventListner( 'click', () => {
	val = id;
})
