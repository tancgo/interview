// 给定一棵树，请你输出所有从根节点到叶子节点的路径组成的数字之和
let tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

// 例如以上的树，总共有从根节点到叶子节点的路径3条，分别为：1->2->4,1->2->5,1->3
// 则计算方法为：124+125+13=262
function getSum(root) {
    let ans = 0;

    function dfs(node, sum) {
        console.log(node, sum)
        if (!node.left && !node.right) {
            ans += sum
        }

        node.left && dfs(node.left, sum * 10 + node.left.val)
        node.right && dfs(node.right, sum * 10 + node.right.val)
    }

    dfs(root, root.val)
    return ans
}

getSum(tree)