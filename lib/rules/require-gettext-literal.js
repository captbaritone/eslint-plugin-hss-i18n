/**
 * @fileoverview Only attempt to translate literal strings.
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
            description: "Only attempt to translate literal strings.",
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

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            CallExpression: function(node) {
                if (utils.isI18nMethodCall(node, 'gettext')) {
                    var firstArg = utils.getFirstArgument(node);
                    if (!utils.isPossiblyConcatenatedString(firstArg)) {
                        context.report(firstArg, 'Avoid calling gettext on anything but a literal string.')
                    }
                }
                if (utils.isI18nMethodCall(node, 'ngettext')) {
                    var firstArg = utils.getFirstArgument(node);
                    if (!utils.isPossiblyConcatenatedString(firstArg)) {
                        context.report(firstArg, 'Avoid calling ngettext on anything but a literal string.')
                    }
                    var secondArg = utils.getNthArgument(node, 2);
                    if (!utils.isPossiblyConcatenatedString(secondArg)) {
                        context.report(secondArg, 'Avoid calling ngettext on anything but a literal string.')
                    }
                }
            }
        };
    }
};
;
