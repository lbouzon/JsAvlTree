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






    function drawLine() {

        let listNodos = document.getElementsByClassName("node");
        for (i = 0; i < listNodos.length; i++){
            console.log(listNodos[i].getBoundingClientRect());
        }
        
        let wood = document.getElementById("wood");
        let lineGroup = document.createElement("svg");
        lineGroup.setAttribute("viewBox", "0 0 1000 1000");
        lineGroup.setAttribute("height", "1000");
        lineGroup.setAttribute("width", "1000");
        
        
        

        var newLine = document.createElement('line');
        newLine.setAttribute('id','line2');
        newLine.setAttribute('x1','50');
        newLine.setAttribute('y1','50');
        newLine.setAttribute('x2','23');
        newLine.setAttribute('y2','31');
        newLine.setAttribute("stroke", "black");

        lineGroup.appendChild(newLine);


        wood.appendChild(lineGroup);
        return wood;
        
    }
