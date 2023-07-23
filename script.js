let id = document.querySelector('#colorSelect');
let id2 = document.querySelector("input");
let val = document.querySelectorAll("option");
let dis = document.querySelector(".display");
// fn = () => {
// 	// dis.innerHTML = val[1].value;
// 	 val.filter((el) => {
// 		 // dis.innerHTML = id.value;
// 		return  id.value != el.value;
// 	})
// }

id2.addEventListener( "click",  ()=> {
	const selected = id.selectIndex;
	dis.innerHTML = selected;
    }); 
