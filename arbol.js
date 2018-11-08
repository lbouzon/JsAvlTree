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
        
		
		this._value = value;
		if (this._value)
		{
		this._left = null;	
		this._right = null;	
		}
    }
	
	get left() { return this._left; }
    set left(left) { this._left = new Node(left); }
    
	get right() { return this._right; }
    set right(right) { this._right = new Node(right); }
	
    get value() { return  this._value; }
	
	
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
	
	

	
	
	
};



	
		
	
	
	
	
	
