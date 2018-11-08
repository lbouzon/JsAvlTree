 var a ; 
 
 function AddNumberToList (){	
 
 let NumberToAdd = Number(document.getElementById("numberHolder").value);  
 if (NumberToAdd) {
	console.log(NumberToAdd)
	let ul = document.getElementById("listaNum");
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(NumberToAdd));
	li.className  += " list-group-item"
	ul.appendChild(li);
	 }
 document.getElementById("numberHolder").value = null;	 
 };

function createTestingNode(){
	let NumberToAdd = Number(document.getElementById("numberHolder").value); 
	if (NumberToAdd) {
		if (a== undefined) {
			 a  = new Node(NumberToAdd);
			 AddNumberToList(); 	
		} else {
			if (a.add(NumberToAdd)) {
				AddNumberToList(); 	
			} else {
				document.getElementById("numberHolder").value = null;	
			}
		}
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
	
	
	balanceFactor(node){
		return node.left.right -node.left.height
	}
	
	add(number){
		if (this.value == null) {
			this._value = number;
			return true;
		}
		else {	
		if (number < this._value) {
			if (this._left) {
				this._left.add(number);
				return true;
				}
			
			else {
		
			this._left = new Node (number);
			
			return true;
			
			}
		}
			
		if (number > this._value) {
			if (this._right) {
				this._right.add(number);
			return true;
			}
			else {
				this.height++; 
				this._right = new Node(number);
				return true;
			}
		}
		
		}
	
	
	}
	
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
	
	print(){
		if (this.left){
			this.left.print()
		}
		console.log(this.value);
		if (this.right){
			this.right.print();
		}	
	}
	
	
add(number){
		if (this.value == null) {
			this._value = number;
			return true;
		}
		else {	
		if (number < this._value) {
			if (this._left) {
				this._left.add(number);
				this.height = Math.max(getHeight(this.left) , getHeight(this.right)) + 1
				
				return true;
				}
			
			else {
		
			this._left = new Node (number);
			this.height = Math.max(getHeight(this.left) , getHeight(this.right)) + 1
			return true;
			
			}
		}
			
		if (number > this._value) {
			if (this._right) {
				this._right.add(number);
				this.height = Math.max(getHeight(this.left) , getHeight(this.right)) + 1
			return true;
			}
			else {
				this._right = new Node(number);
				this.height = Math.max(getHeight(this.left) , getHeight(this.right)) + 1
				return true;
			}
		}
		
		}
	
	
	}
	
	
	
	
	
};





function rightRotate(node){
		let z= node;
		let y= z.left;
		z.left = y.right; 
		y.right = z; 
		return y;
}
	

function leftRotate(node){
		let z= node;
		let y= z.right;
		z.right = y.left; 
		y.left = z; 
		return y;
}	

function toString(node) {
        let str = '';
        if (node) {
            str = '[' + this.toString(node.left) + `, ${node.value}(${node.height}), ` + this.toString(node.right) + ']';
        }
        return str;
    } 
	
	
	
function getBalance(node) { 
        if (node == null) 
            return 0;   
        return height(node.left) - height(node.right); 
} 


function getHeight(node){
	if (!node){
		return 0;
	} else return node.height;
	
}