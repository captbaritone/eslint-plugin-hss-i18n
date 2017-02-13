function isI18nMethodCall(node, methodName) {
    return node &&
        node.type === 'CallExpression' &&
        node.callee.type === 'MemberExpression' &&
        node.callee.object.type === 'Identifier' &&
        node.callee.object.name.toLowerCase() === 'i18n' &&
        node.callee.property.name === methodName;
}

function getNthArgument(node, n) {
    return node &&
        node.arguments &&
        node.arguments[n - 1];
}

function getFirstArgument(node) {
    return getNthArgument(node, 1);
}

function _isString(node) {
    return node && node.type === 'Literal';
}

function _isConcatenatedString(node) {
    return node &&
        node.type === 'BinaryExpression' &&
        isPossiblyConcatenatedString(node.right) &&
        isPossiblyConcatenatedString(node.left);
}

function isPossiblyConcatenatedString(node) {
    return _isString(node) || _isConcatenatedString(node);
}

module.exports = {
    isI18nMethodCall: isI18nMethodCall,
    getNthArgument: getNthArgument,
    getFirstArgument: getFirstArgument,
    isPossiblyConcatenatedString: isPossiblyConcatenatedString
};
