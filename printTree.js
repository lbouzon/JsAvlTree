// JavaScript source code




function treeToDic(node, path = "") {
    const keyValue = { value: null, height: null, path}
    let array  = [];

    if (node.left.value !== null) {
        array = array.concat(treeToDic(node.left, path + "0"));
    }
    keyValue.value = node.value;
    keyValue.height = node.height;
    array.push(keyValue);
  

    if (node.right.value !== null) {
        array = array.concat(treeToDic(node.right, path + "1"));
    }
    return array;
}

    function addDivs(array,treeHeight) {
        wood = document.getElementById("wood");
        for (each in array) {
            let altura = (treeHeight-array[each].path.length )* 50;
            let leftOrder = (each * 100 / array.length)+3;
            let ancho = 100 / array.length -3;
            let container = document.createElement("div");
            let stringStyle
            container.innerHTML = array[each].value;
            container.className = "node";


            stringStyle = "bottom:" + altura + "px;";
            stringStyle += "left:" + leftOrder + "%;";
            stringStyle += "width:" + ancho + "%;";

            container.style = stringStyle;
            wood.appendChild(container);
        }
    }


    function printGraph() {
        document.getElementById("wood").innerHTML = null;
        addDivs(treeToDic(tree),tree.height);

    }






    function drawlines() {

        let listNodos = document.getElementsByClassName("node");
        for (i = 0; i < listNodos.length; i++){
            console.log(listNodos[i].getBoundingClientRect());
        }
        
    }
