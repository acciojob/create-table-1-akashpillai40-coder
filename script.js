function insert_Row() {
    //Write your code here
    let table = document.querySelector("table");
	let button = document.querySelector("input");


	let tr = document.createElement("tr");
		
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");

	td1.innerText = "New Cell1";
	td2.innerText = "New Cell2";

	tr.append(td1, td2);

		table.prepend(tr);
  
  
}
