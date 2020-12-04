
function helloWorld(container) {
    const h1 = document.createElement("h1");
    const helloWorld = document.createTextNode("Hello World");
    h1.appendChild(helloWorld);
    container.appendChild(h1);

}

function showFurlin(container) {
    const img = document.createElement("img");
    img.src= abrakatdabra.furlin;
    img.classList="furlin";
    container.appendChild(img);

    addClickMe(container);
}


function addClickMe(container) {
    const button = document.createElement("button");
    button.classList="change-color";
    const clickMe = document.createTextNode("Click me!");
    button.appendChild(clickMe);
    container.appendChild(button);

    document.querySelector(".change-color").addEventListener("click", changeColorHandler);
}

function changeColorHandler() {
    document.querySelector(".furlin").src = abrakatdabra.newFurlin;
}

const abrakatdabra = {
    helloWorld,
    showFurlin,
    furlin: "node_modules/@subangi/abrakatdabra/svg/furlin.svg",
    newFurlin: "node_modules/@subangi/abrakatdabra/svg/duvandtfurlin.svg" 
}
export default abrakatdabra;
