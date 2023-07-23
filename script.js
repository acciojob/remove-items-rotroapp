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
	      const selectedIndex = id.selectedIndex;
        dis.innerHTML = selectedIndex; 
      // Check if an option is selected
      if (selectedIndex !== -1) {
        // Remove the selected option from the dropdown list
        id.removeChild(id.options[selectedIndex]);
      }
    }); 
