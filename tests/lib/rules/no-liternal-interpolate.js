/**
 * @fileoverview Prevent calling interpolate on string literals
 * @author Jordan Eldredge
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-interpolate-literal"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-interpolate-literal", rule, {

    valid: [
        "I18n.interpolate(someVar);",
        "I18n.gettext('Hello Jordan');"
    ],

    invalid: [
        {
            code: "I18n.interpolate('Hello %(name)s', {name: 'Jordan'});",
            errors: [{
                message: "Fill me in.",
                type: "Literal"
            }]
        },
        {
            code: "i18n.interpolate('Hello %(name)s', {name: 'Jordan'});",
            errors: [{
                message: "Fill me in.",
                type: "Literal"
            }]
        }
    ]
});
