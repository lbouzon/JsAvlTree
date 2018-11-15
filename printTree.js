// JavaScript source code




function treeToDic(node) {
    let keyValue = { value: null, height: null }
    let array  = [];

    if (node.left.value !== null) {
        array = array.concat(treeToDic(node.left));
    }

    keyValue.value = node.value;
    keyValue.height = node.height;
    array.push(keyValue);
    console.log(array);

    if (node.right.value !== null) {
        array = array.concat(treeToDic(node.right));

    }


    
    return array;
}

function addDivs(array) {
    wood = document.getElementById("wood");

    for (each in array) {
        
        let altura = array[each].height * 50;
        let leftOrder = each * 100 / array.length;
        
        let container = document.createElement("div");
        container.innerHTML = array[each].value;
        container.className = "node";
        let stringStyle = "height:" + altura + "px;";
        stringStyle += "left:" + leftOrder + "%;";



        container.style = stringStyle;

        wood.appendChild(container);
        
        
    }



}