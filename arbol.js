class NullNode {
    constructor() {
        this._value = null;
        this._left = null;
        this._right = null;
        this._height = 0;
    }

    get left() { return null; }
    get right() { return null; }
    get value() { return null; }

    get height() { return this._height; }
    set height(height) {  }

    add(number) {
        return new Node(number);
    };

    search(number) {
        return false;
    };
    balance() {
        return this;
    };
    getBalance() 
        {return 0;}
}

var tree = new NullNode();
function addNumberToList() {
 
 let NumberToAdd = Number(document.getElementById("numberHolder").value);  
 if (NumberToAdd) {
	console.log(NumberToAdd)
	let ul = document.getElementById("listaNum");
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(NumberToAdd));
	li.className  += " list-group-item"
	ul.appendChild(li);
	createTestingNode (NumberToAdd);
	 }
 document.getElementById("numberHolder").value = null;	 
 }

function resetNode() {
    tree = new NullNode();;
    let ul = document.getElementById("listaNum");
    ul.innerHTML = null;
    let ul2 = document.getElementById("treeAvl");
    ul2.innerHTML = "";
}

function createTestingNode(number){
    if (tree.value == null) {
        tree = new Node(number);
    } else {
        tree = tree.add(number);
    }
};

class Node {
    constructor(value) {

        this._height = 1;
        this._value = value;
        this._left = new NullNode();
        this._right = new NullNode();
        
    }
    get height() { return this._height; }
    set height(height) { this._height = height; }

    get left() { return this._left; }
    set left(left) {
        if (this.value) {
            this._left = left;
        }
    }

    get right() { return this._right; }
    set right(right) {
        if (this.value) {
            this._right = right;
        }
    }

    get value() { return this._value; }

    search(number) {
        if (number == this.value) {
            return true;
        }
        if (number < this.value) {
            return this.left.search(number);
           
        }
        if (number > this.value) {
            return this.right.search(number);
        }
            return false;
    }


    add(number) {
        if (number < this.value) {
            this.left = this.left.add(number);
           
        } else if (number > this.value) {
            this.right = this.right.add(number);
            
        }
        this.height = Math.max(this.left.height, this.right.height) + 1;
        return this.balanceNode();
    }

	leftRotate() {
	    let a = this;
	    let b = a.right;
	    let c = b.left;
	    a.right = c;
	    b.left = a;
	    c.height = Math.max((c.left == null) ? 0 : c.left.height, (c.right == null) ? 0 : c.right.height) + 1;
	    a.height = Math.max(a.left.height, a.right.height) + 1;
	    b.height = Math.max(b.left.height, b.right.height) + 1;
	    return b;
	}

	rightRotate() {
	    let a = this;
	    let b = a.left;
	    let c = b.right;
	    a.left = c;
	    b.right = a;
	    c.height = Math.max((c.left == null) ? 0 : c.left.height, (c.right == null) ? 0 : c.right.height) + 1;
	    a.height = Math.max(a.left.height, a.right.height) + 1;
	    b.height = Math.max(b.left.height, b.right.height) + 1;
	    return b;
	}
	
	getBalance() {
	    return (this.left.height - this.right.height);
	}

	balanceNode() {
	    if (this.getBalance() > 1) {
	        if (this.left.getBalance() < 0){
	            this.left = this.left.leftRotate();

	        }
	        return this.rightRotate();
	    } else if (this.getBalance() < -1) {
	        if (this.right.getBalance() > 0) {
	            this.right = this.right.rightRotate();
	        }
	        return this.leftRotate();
	    }
	    return this;
	};
}


	function searchNumber() {
    let numberToSearch = Number(document.getElementById("numberHolder").value);
    let lista = document.getElementById("listaNum")
    document.getElementById("numberHolder").value = null;
    if (tree.search(numberToSearch) == true) {
        lista.style.backgroundColor = "lightgreen"
    } else { document.getElementById("listaNum").style.backgroundColor = "red" }
    setTimeout(function () { document.getElementById("listaNum").style.backgroundColor = "" }, 3000);
};


function printTree(node) {
    let lisOfNumbers="";
    if (node.left.value !== null) {
        lisOfNumbers += printTree(node.left);
    }
    
    lisOfNumbers += node.value +" ";
    if (node.right.value !== null) {
        lisOfNumbers += printTree(node.right);
     
    }
    
    return lisOfNumbers
}

function toString(node) {
    let str = '';
    if (node) {
        str = '[' + toString(node.left) + `(${node.value})` + toString(node.right) + ']';
    }
    return str;
}


function printTreeAsList(Node) {
    let ul = document.getElementById("treeAvl");
    ul.innerHTML = "";
    printTree(tree).slice(0, -1).split(" ").forEach(function (element) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        li.className += " list-group-item"
        ul.appendChild(li);
    });
};

document.getElementById("numberHolder").addEventListener("keydown", function (event) { if (event.keyCode === 13) { addNumberToList() } })




