function insert_Row() {
    //Write your code here
    let table = document.querySelector("table");
	 let tbody = table.tBodies[0]; // IMPORTANT

    //Here we dont need to addd the click even bcz lokk at the input tag
	//we can see "insert row "fn so when e click button it calls 
	//our fn  and runs
	
	let tr = document.createElement("tr");
		
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");

	td1.innerText = "New Cell1";
	td2.innerText = "New Cell2";

	tr.append(td1, td2);

		tbody.prepend(tr);
  
  
}
