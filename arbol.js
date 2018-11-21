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
    set height(height) {}

    add(number) {
        return new Node(number);
    };

    search(number) {
        return false;
    };
    balance() {
        return this;
    };
    getBalance() {
        return 0;
    }

    accept(visitor) {
        return visitor.visit(this);
    }
}

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
            if (this.left.getBalance() < 0) {
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
    }

    accept(visitor) {
        return visitor.visit(this);
    }
}