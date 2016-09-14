/**
 * @fileoverview Prevent calling interpolate on string literals
 * @author Jordan Eldredge
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevent calling I1in.interpolate on untranslated string literals",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        function isI18nMethodCall(node, methodName) {
            return node &&
                node.type === 'CallExpression' &&
                node.callee.type === 'MemberExpression' &&
                node.callee.object.type === 'Identifier' &&
                node.callee.object.name.toLowerCase() === 'i18n' &&
                node.callee.property.name === methodName;
        }

        function getFirstArgument(node) {
            return node &&
                node.arguments &&
                node.arguments[0];
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            CallExpression: function(node) {
                if (isI18nMethodCall(node, 'interpolate')) {
                    var firstArg = getFirstArgument(node);
                    if (firstArg && firstArg.type === 'Literal') {
                        context.report(firstArg, 'Avoid calling interpolate on untranslated literal strings.')
                    }
                }
            }
        };
    }
};
