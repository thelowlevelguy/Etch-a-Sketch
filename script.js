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
     
        const currBackground = window.getComputedStyle(event.target).getPropertyValue("--background_color")
        const currentRgba = parseColor(currBackground)
        
        //the last value represent the opacity in rgba
        //by multiplying a string to 1 it will be a number
    	const background = `rgba(0, 0, 0, ${Math.min(currentRgba[3] * 1 + 0.1, 1)})`;
    	event.target.style.setProperty("--background_color", background);
    }
}

function parseColor(color) {
 const m = color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*((0.)?\d+)\s*\)$/i);
  if( m) {
     return [m[1], m[2], m[3], m[4]];
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

grid.addEventListener('mouseout', hoverFilling)
		
