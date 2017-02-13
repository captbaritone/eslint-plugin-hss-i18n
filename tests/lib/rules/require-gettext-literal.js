/**
 * @fileoverview Only attempt to translate literal strings.
 * @author Jordan Eldredge
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/require-gettext-literal"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("gettext-literal", rule, {

    valid: [
        "I18n.gettext('Hello World');",
        "I18n.gettext('Hello ' + 'World');",
        "I18n.gettext('Hello ' + 'Big ' + 'World');",
    ],

    invalid: [
        {
            code: "I18n.gettext(myVar);",
            errors: [{
                message: "Avoid calling gettext on anything but a literal string.",
                type: "Identifier",
                column: 14
            }]
        },
        {
            code: "I18n.gettext(['hello', 'world'].join(' '));",
            errors: [{
                message: "Avoid calling gettext on anything but a literal string.",
                type: "CallExpression",
                column: 14
            }]
        },
        {
            code: "I18n.ngettext(myVar, myOtherVar);",
            errors: [{
                message: "Avoid calling ngettext on anything but a literal string.",
                type: "Identifier",
                column: 15
            }, {
                message: "Avoid calling ngettext on anything but a literal string.",
                type: "Identifier",
                column: 22
            }]
        },
        {
            code: "I18n.ngettext('Hello', myOtherVar);",
            errors: [{
                message: "Avoid calling ngettext on anything but a literal string.",
                type: "Identifier",
                column: 24
            }]
        },
        {
            code: "I18n.ngettext(myVal, 'World');",
            errors: [{
                message: "Avoid calling ngettext on anything but a literal string.",
                type: "Identifier",
                column: 15
            }]
        },
     ]
});
