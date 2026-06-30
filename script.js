const GRID_SIZE = 600

const grid = document.getElementById("grid");
const button = document.querySelector("button")
const DEFAULT_GRID_SIZE = 16

function fillBoard(numOfgrid){
	grid.textContent = "";
	for (let i=0; i < numOfgrid; i++){
		const row = document.createElement("div")
		for (let j = 0; j < numOfgrid; j++){
			const column = document.createElement("div")
			column.classList.add("grid-content")
			column.style.width = `${GRID_SIZE/numOfgrid}px`
			column.style.height = `${GRID_SIZE/numOfgrid}px`
			row.appendChild(column)
		}
		grid.appendChild(row);
	}
}

function hoverFilling(event){
	if (event.target.classList.contains("grid-content")) {
        event.target.style.backgroundColor = "#000";
    }
}

function setNewBoard(){
	button.addEventListener("click", () => {
		const input = parseInt(prompt("Set grid number: "));
		if (input <= 100 && input > 0){
			fillBoard(input)
		}
	});
}

fillBoard(DEFAULT_GRID_SIZE)
setNewBoard()


grid.addEventListener('mouseover', hoverFilling)
		
