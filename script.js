const GRID_SIZE = 800

const randomColor = () => {
	return Math.floor(Math.random() * 255 + 1) 
}
 
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
			column.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0)`
			row.appendChild(column)
		}
		grid.appendChild(row);
	}
}

function hoverFilling(event){
	if (event.target.classList.contains("grid-content")) {
     
        const currBg = window.getComputedStyle(event.target).getPropertyValue("background-color")
        const currentRgba = parseColor(currBg)
    
        console.log(currentRgba)
        //the last value represent the opacity in rgba
        //by multiplying a string to 1 it will be a number
        if (currentRgba){
        	const background = `rgba(${currentRgba[0]}, 
    						${currentRgba[1]}, 
    						${currentRgba[2]}, 
    						${Math.min(currentRgba[3] * 1 + 0.1, 1)})`;
    		event.target.style.setProperty("background-color", background);
        }
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
		
