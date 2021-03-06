/**
 * @fileoverview Prevent calling interpolate on string literals
 * @author Jordan Eldredge
 */
"use strict";

var utils = require('../utils');

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

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            CallExpression: function(node) {
                if (utils.isI18nMethodCall(node, 'interpolate')) {
                    var firstArg = utils.getFirstArgument(node);
                    if (utils.isPossiblyConcatenatedString(firstArg)) {
                        context.report(firstArg, 'Avoid calling interpolate on untranslated literal strings.')
                    }
                }
            }
        };
    }
};
