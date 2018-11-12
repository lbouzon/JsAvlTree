var tree = null;
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
    tree = null;
    let ul = document.getElementById("listaNum");
    ul.innerHTML = null;

    let ul2 = document.getElementById("treeAvl");
    ul2.innerHTML = "";

}



function createTestingNode(number){
	
	
    if (tree == undefined) {
        tree = new Node(number);

    } else {
        tree.add(number);
    }

};







class Node {
	constructor(value, left, right) {
		
		this._height = 0; 
		this._value = value;
		if (this._value)
		{
		this._left = null;	
		this._right = null;	
		}
	}
	get height() { return this._height; }
	set height(height)	{this._height = height; 	}
	
	
	get left() { return this._left; }
	set left(left)	{	if (this.value){
							this._left = left; 
						}
					}
	
	get right() { return this._right; }
	set right(right){	if(this.value){ 
							this._right = right; 
						}
					}
	
	get value() { return  this._value; }
	
	search(number){
		if (this.value == null) {
			console.log("Number not found");
		} else if (number == this._value)  {
			console.log("Number found");
		} else if (number<this._value){
					if (this.left !== null){
						this.left.search(number);
					} else {
					console.log("Number not found");
					}
		} else if (number>this._value){
					if (this.right !== null){
					this.right.search(number);
					} else {
					console.log("Number not found");
					}
		}
	};
	

	
	
	add(number){
		if (this.value == null) {
		    this._value = number;
		    balanceNode(this);
			return true;
		}
		if (number < this._value) {
			if (this._left) {
				this._left.add(number);
				this.height = Math.max(getHeight(this.left) , getHeight(this.right)) + 1	
				this.left = balanceNode(this.left);
				return true;
			} else {
				this._left = new Node (number);
				this.height = Math.max(getHeight(this.left), getHeight(this.right)) + 1
				this.left = balanceNode(this.left);
				return true;
			}
		}
		if (number > this._value) {
			if (this._right) {
				this._right.add(number);
				this.height = Math.max(getHeight(this.left), getHeight(this.right)) + 1
				this.right = balanceNode(this.right);
			return true;
			}else {
				this._right = new Node(number);
				this.height = Math.max(getHeight(this.left), getHeight(this.right)) + 1
				this.right = balanceNode(this.right);
				return true;
			}
		}
		return false;
	}
	
	
	// end of class
}

function leftRotate(node){
		let a= node;
		let b = a.right;
		a.right = null;
		b.left = a; 
		c=b.left;
		
		a.height = Math.max(getHeight(a.left), getHeight(a.right))+1;
		c.height = Math.max(getHeight(c.left), getHeight(c.right))+1;
		b.height = Math.max(getHeight(b.left), getHeight(b.right))+1;
		return b; 
}

function rightRotate(node){
		let c= node;
		let b = c.left;
		c.left = null;
		b.right = c; 
		a = b.right;
		
	a.height = Math.max(getHeight(a.left), getHeight(a.right))+1;
		c.height = Math.max(getHeight(c.left), getHeight(c.right))+1;
		b.height = Math.max(getHeight(b.left), getHeight(b.right))+1;
		
		
		
		return b; 
}
	
function leftRightRotate(node){
	let c = node; 
	let a= c.left;
	let b= a.right;
	c.left = b;
	b.left = a; 
	a.right = null;
	
	
	
a.height = Math.max(getHeight(a.left), getHeight(a.right))+1;
		c.height = Math.max(getHeight(c.left), getHeight(c.right))+1;
		b.height = Math.max(getHeight(b.left), getHeight(b.right))+1;
	
	
	return rightRotate(c)
}

function rightLeftRotate(node){
	let a = node ; 
	let c = a.right; 
	let b= c.left;
	a.right = b;
	b.right = c;
	c.left = null;
	
a.height = Math.max(getHeight(a.left), getHeight(a.right))+1;
		c.height = Math.max(getHeight(c.left), getHeight(c.right))+1;
		b.height = Math.max(getHeight(b.left), getHeight(b.right))+1;
	
	return leftRotate(a);
}


		
function getBalance(node) { 
		if (node == null) 
			return 0;   
		return getHeight(node.left) - getHeight(node.right);
} 

function getHeight(node){
	if (!node){
		return 0;
	} else return node.height;
	
}

function balanceNode(node) {
    
    if (node==null){
        return null
    }
    if (getBalance(node) > 1) {
        if (node.left.left !== null){
            return leftRotate(node);
        } else {
            return leftRightRotate(node);
        }
    }

    if (getBalance(node) < -1) {
        if (node.right.right !== null) {
            return rightRotate(node);
        } else {
            return rightLeftRotate(node);
        }
    }
    return node;
};






function printTree(node) {
    let lisOfNumbers="";
    if (node.left !== null) {
        lisOfNumbers += printTree(node.left);
    }
    
    lisOfNumbers += node.value +" ";
   // console.log(lisOfNumbers)
    if (node.right !== null) {
        lisOfNumbers += printTree(node.right);
     
    }
    
    return lisOfNumbers
}


function toString(node) {
    let str = '';
    if (node) {
        str = this.toString(node.left) + ` ${node.value} ` + this.toString(node.right);
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


document.getElementById("numberHolder").addEventListener("keydown",function (event){if (event.keyCode ===13) {addNumberToList()}})