class Visitor {
    constructor() {

    }
    visit(node) { console.log(node); }
}

class Visitor2 {
    constructor() {

    }
    visit(node) {
        let str = '';
        str += node.left.value;
        str += node.value;
        str += node.right.value;
        return str;
    }
}

class Visitor3 {
    constructor() {

    }


    visit(node) {

        let str = '';
        if (node) {
            str = '[' + this.visit(node.left);
            if (node.value == null) {
                str += 'X';
            } else {
                str += `, ${node.value}, `;
            }
            str += this.visit(node.right) + ']';
        }
        return str;
    }

}