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
ruleTester.run("require-gettext-literal", rule, {

    valid: [
        "I18n.gettext('Hello World');",
        "I18n.gettext('Hello ' + 'World');",
        "I18n.gettext('Hello ' + 'Big ' + 'World');",
    ],

    invalid: [
        {
            code: "I18n.gettext(myVar);",
            errors: [{
                message: "Avoid calling gettext on anything but a literal string."
            }]
        },
        {
            code: "I18n.gettext(['hello', 'world'].join(' '));",
            errors: [{
                message: "Avoid calling gettext on anything but a literal string."
            }]
        },
        {
            code: "I18n.gettext('hello' + myVar + 'world');",
            errors: [{
                message: "Avoid calling gettext on anything but a literal string."
            }]
        }
    ]
});
