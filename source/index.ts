/* basic tree inOrderTraversals */

type TreeNode ={
    left:TreeNode|null;
    right:TreeNode|null;
    value:number;
}

class treeNode {
    left:TreeNode|null;
    right:treeNode|null;
    value:number;
    constructor(left:TreeNode|null =null, right:TreeNode|null =null, value=0){
        this.left=left;
        this.right=right;
        this.value=value;
    }
}



let tree = new treeNode(null,null,0);
tree.left= new treeNode(null,null,1);
tree.right= new treeNode(null,null,2);
tree.left.left = new treeNode(null,null,3);
tree.left.right= new treeNode(null,null,4);
tree.right.left= new treeNode(null,null,5);
tree.right.right= new treeNode(null,null,6);




let tree2 = new treeNode(null,null,3);
tree2.left= new treeNode(null,null,1);
tree2.right= new treeNode(null,null,5);
tree2.left.left = new treeNode(null,null,0);
tree2.left.right= new treeNode(null,null,2);
tree2.right.left= new treeNode(null,null,4);
tree2.right.right= new treeNode(null,null,6);


export function inOrderTraversal (r:TreeNode):void{
    if(r.left){

    inOrderTraversal(r.left);
    }
    console.log(r.value);
    if(r.right){

    inOrderTraversal(r.right);
    }
}

export function preOrderTraversal (r : TreeNode):void{
    if(r.left){
        preOrderTraversal(r.left)
    }
    if(r.right){
        preOrderTraversal(r.right)
    }
    console.log(r.value)
}

export  function postOrderTraversal (r : TreeNode):void{
    console.log(r.value);
    if(r.left){
        postOrderTraversal(r.left)
    }
    if(r.right){
        postOrderTraversal(r.right)
    }
}

//inOrderTraversal(tree);
export function isBst2(r: TreeNode, min:number, max:number): boolean {
	if (min < r.value && r.value < max) {
		let resL: boolean = false;
        let resR: boolean = false;
		if (r.left) {
			resL = isBst(r.left, min, r.value);
		}

		if (r.right) {
			resR  = isBst(r.right, r.value, max);
		}

        return resR && resL 
	} else {
		return false;
	}
}
export function isBst(r: TreeNode|null, min:number, max:number):boolean{
    if(r===null){
        return true;
    }
        if (r.value < min || r.value > max) {
        return false; // Check if the current node's value is within the allowed range
    }

    // Recursively check the left and right subtrees
    let resL: boolean = isBst(r.left, min, r.value);
    let resR: boolean = isBst(r.right, r.value, max);

    return resL && resR; // Return true if both subtrees are valid BSTs
}