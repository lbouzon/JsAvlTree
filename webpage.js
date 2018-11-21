var tree = new NullNode();
document.getElementById("numberHolder").addEventListener("keydown", function(event) { if (event.keyCode === 13) { addNumberToList() } })


function createTestingNode(number) {
    if (tree.value == null) {
        tree = new Node(number);
    } else {
        tree = tree.add(number);
    }
};


function addNumberToList() {

    let NumberToAdd = Number(document.getElementById("numberHolder").value);
    if (NumberToAdd) {
        console.log(NumberToAdd)
        let ul = document.getElementById("listaNum");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(NumberToAdd));
        li.className += " list-group-item"
        ul.appendChild(li);
        createTestingNode(NumberToAdd);
    }
    document.getElementById("numberHolder").value = null;
    printGraph();
}

function resetNode() {
    tree = new NullNode();;
    let ul = document.getElementById("listaNum");
    ul.innerHTML = null;
    let ul2 = document.getElementById("treeAvl");
    ul2.innerHTML = "";
    document.getElementById("wood").innerHTML = null;
}

function searchNumber() {
    let numberToSearch = Number(document.getElementById("numberHolder").value);
    let lista = document.getElementById("listaNum")
    document.getElementById("numberHolder").value = null;
    if (tree.search(numberToSearch) == true) {
        lista.style.backgroundColor = "lightgreen"
    } else { document.getElementById("listaNum").style.backgroundColor = "red" }
    setTimeout(function() { document.getElementById("listaNum").style.backgroundColor = "" }, 3000);
};

function printTreeAsList(Node) {
    let ul = document.getElementById("treeAvl");
    ul.innerHTML = "";
    printTree(tree).slice(0, -1).split(" ").forEach(function(element) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        li.className += " list-group-item"
        ul.appendChild(li);
    });
};

function printTree(node) {
    let lisOfNumbers = "";
    if (node.left.value !== null) {
        lisOfNumbers += printTree(node.left);
    }

    lisOfNumbers += node.value + " ";
    if (node.right.value !== null) {
        lisOfNumbers += printTree(node.right);

    }

    return lisOfNumbers
}