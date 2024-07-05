// Selects the <main> element and removes it
document.querySelector("main");
main.remove();

//creates a new <h1> node
const newHeader = document.createElement("h1");

//This will append the <h1> to body
//document.body.append(newHeader);

//sets the id of <h1> to 'victory'
//newHeader.setAttribute('id', 'victory');
newHeader.id = "victory"

//sets the text content of <h1>
newHeader.textContent = "Brendah Kiragu is the champion"



