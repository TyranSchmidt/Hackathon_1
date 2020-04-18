	let form= document.getElementsByTagName("form")[0];
	let table= document.getElementById("table");
	let input_name= form.getElementsByClassName("input1")[0];
	let input_date= form.getElementsByClassName("input1")[1];
	let input_loc= form.getElementsByClassName("input1")[2];
	let input_type= form.getElementsByClassName("input1")[3];
	let input_cost= form.getElementsByClassName("input1")[4];

	let calc_name = document.getElementsByClassName("input2")[0];
	let calc_expense = document.getElementsByClassName("input2")[1];
	let calc_date_from = document.getElementsByClassName("input2")[2];
	let calc_date_to = document.getElementsByClassName("input2")[3];

	let btn_out= document.getElementById("log_out");
	let btn_add= document.getElementById("add");
	let btn_submit= document.getElementById("input_btn");
	let btn_calculate= document.getElementById("calculate");

	btn_submit.addEventListener("click", newRow);
	btn_add.addEventListener("click", newInput);
	btn_out.addEventListener("click", logOut);
	btn_calculate.addEventListener("click", calculate);

	let remove = [];
	let name_array = [];
	console.log(name_array);
	function newInput(){	
		let names = form.getElementsByClassName("input1")[0];
		name_array.push(names.value);
		names.disabled = true;
		console.log(name_array);
		let new_input_name= document.createElement("input");
		new_input_name.classList.add("input1");
		form.insertBefore(new_input_name, form.childNodes[0]);
		form.getElementsByTagName("input")[0].setAttribute("placeholder", "Enter your name");
		form.getElementsByTagName("input")[0].setAttribute("type", "text");		
		remove.push("")
	}

	function newRow(){
		let input= [input_name.value, input_date.value, input_loc.value, input_type.value, input_cost.value];
		let l= input.length -1;
		if(input[0]!="" && input[1]!="" && input[2]!="" && input[3]!="" && input[4]!=""){
			let new_row= document.createElement("tr");
			table.appendChild(new_row);
			let cell1= new_row.insertCell(0);
			let cell2= new_row.insertCell(1);
			let cell3= new_row.insertCell(2);
			let cell4= new_row.insertCell(3);
			let cell5= new_row.insertCell(4);
			let names = form.getElementsByClassName("input1")[0];
			name_array.push(names.value);
			cell1.innerText= name_array.toString();
			cell2.innerText= input[1];
			cell3.innerText= input[2];
			cell4.innerText= input[3];
			cell5.innerText= input[4];
			new_row.append(cell1, cell2, cell3, cell4, cell5);
			form.reset();
			name_array = [];
			for (space in remove) {
				form.getElementsByClassName("input1")[0].remove();
			}		
			form.getElementsByClassName("input1")[0].disabled = false;
			remove = [];
		};
	}

	function calculate() {
		let cost_array = [];
		let row = table.rows.length;
		let total_cost = 0;
		if (calc_name.value != "" || calc_expense.value != "" || calc_date_from.value != "" && calc_date_to.value != "") {
			for (i = 1; i < row; i++) {
				if(calc_name.value != "" && calc_expense.value != "") {
					let in_table = table.rows[i].cells[0].innerText;
					let in_table2 = table.rows[i].cells[3].innerText;
					if(in_table.search(calc_name.value) != -1 && in_table2.search(calc_expense.value) != -1) {
						cost_array.push(table.rows[i].cells[4].innerText);	
					}
				}
				else if(calc_expense.value != "") {
					let in_table = table.rows[i].cells[3].innerText;
					if(in_table.search(calc_expense.value) != -1) {
						cost_array.push(table.rows[i].cells[4].innerText);	
					}
				}
				else if(calc_name.value != "") {
					let in_table = table.rows[i].cells[0].innerText;
					if(in_table.search(calc_name.value) != -1) {
						cost_array.push(table.rows[i].cells[4].innerText);	
					}
				}
			}
			for(n = 0; n < cost_array.length; n++) {
				total_cost += Number(cost_array[n]);			
			}
			alert(total_cost);
			calc_name.value = ""
			calc_expense.value = ""
		}
		else {
			alert("Please insert something into one of the input fields.");
		}
	}
		
	function logOut(){
		location.href = "hackathon1.html";
	}



