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
			return this;
		}
		else {	
		if (number < this._value) {
			if (this._left) {
				this._left.add(number);
				return this
				}
			
			else {
			this._left = new Node (number);
			return this;
			
			}
		}
			
		if (number > this._value) {
			if (this._right) {
				this._right.add(number);
			return this
			}
			else {
				this._right = new Node(number);
				return this;
			}
		}
		
		}
	}
};