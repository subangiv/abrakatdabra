
function helloWorld(container) {
    const h1 = document.createElement("h1");
    const helloWorld = document.createTextNode("Hello World");
    h1.appendChild(helloWorld);
    document.querySelector(container).appendChild(h1);

}

function showFurlin(container) {
    const img = document.createElement("img");
    img.src="svg/furlin.svg";
    img.classList="furlin";
    document.querySelector(container).appendChild(img);

    addClickMe(container);
}


function addClickMe(container) {
    const button = document.createElement("button");
    button.classList="change-color";
    const clickMe = document.createTextNode("Click me!");
    button.appendChild(clickMe);
    document.querySelector(container).appendChild(button);

    document.querySelector(".change-color").addEventListener("click", changeColorHandler);
}

function changeColorHandler() {
    document.querySelector(".furlin").src ="svg/duvandtfurlin.svg";
}


module.exports.helloWorld = helloWorld;
module.exports.furlin = { showFurlin: showFurlin, addClickMe: addClickMe, changeColorHandler: changeColorHandler}
