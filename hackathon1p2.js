<<<<<<< HEAD
let form = document.getElementsByTagName("form");

let input = document.getElementsByClassName("input1");

let btn_submit = document.getElementById("btn_input");
btn_submit.addEventListener("click", newRow);

function newRow() {
	for(values of input) {
		if(values != "")
			console.log(hello);
	}
}
=======
	let form= document.getElementsByTagName("form")[0];
	let table= document.getElementById("table");
	let input_name= form.getElementsByClassName("input1")[0];
	let input_date= form.getElementsByClassName("input1")[1];
	let input_loc= form.getElementsByClassName("input1")[2];
	let input_type= form.getElementsByClassName("input1")[3];
	let input_cost= form.getElementsByClassName("input1")[4];
	//let input= form.getElementsByClassName("input1");

	let btn_out= document.getElementById("log_out");
	let btn_add= document.getElementById("add");
	let btn_submit= document.getElementById("input_btn");
	let btn_calculate= document.getElementById("calculate");

	btn_submit.addEventListener("click", newRow);
	btn_add.addEventListener("click", newInput);
	btn_out.addEventListener("click", logOut);
	btn_calculate.addEventListener("click", calculate);


	function newInput(){
		let new_input_name= document.createElement("input");
		new_input_name.classList.add("input1");
		form.insertBefore(new_input_name, form.childNodes[0]);
		form.getElementsByTagName("input")[0].setAttribute("placeholder", "Enter your name");
		form.getElementsByTagName("input")[0].setAttribute("type", "text");
	}

	function newRow(){
		let input= [input_name.value, input_date.value, input_loc.value, input_type.value, input_cost.value];
		let l= input.length -1;
		if(input[0,l]!=""){
			let new_row= document.createElement("tr");
			table.appendChild(new_row);
			let cell1= new_row.insertCell(0);
			let cell2= new_row.insertCell(1);
			let cell3= new_row.insertCell(2);
			let cell4= new_row.insertCell(3);
			let cell5= new_row.insertCell(4);
			cell1.innerText= input[0];
			cell2.innerText= input[1];
			cell3.innerText= input[2];
			cell4.innerText= input[3];
			cell5.innerText= input[4];
			new_row.append(cell1, cell2, cell3, cell4, cell5);
			form.reset();
			
		};
	}

	function calculate(){
		
	}

	function logOut(){
		location.href = "hackathon1.html";
	}
>>>>>>> 1d1e17d71026f3da61b6083683926553fef401df
