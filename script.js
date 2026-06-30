const grid = document.getElementById("grid");
const button = document.querySelector("button")

function fillBoard(numOfgrid){
	for (let i=0; i < numOfgrid; i++){
		const row = document.createElement("div")
		for (let j = 0; j < numOfgrid; j++){
			const column = document.createElement("div")
			column.classList.add("grid-content")
			row.appendChild(column)
		}
		grid.appendChild(row);
	}
}




fillBoard(16)