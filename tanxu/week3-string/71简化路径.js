/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const paths = path.split('/')
    const stack = []
    for (let i = 0; i< paths.length; i++) {
        if (paths[i] === '..') {
            stack.pop()
        } else {
            if (paths[i] !== '' && paths[i] !== '.')
            stack.push(paths[i])
        }
    }
    return '/' + stack.join('/')
};

console.log(simplifyPath('/home//foo/'))
