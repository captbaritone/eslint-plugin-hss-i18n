# eslint-plugin-hss-i18n

Detect common errors when using I18n at Hearsay Social

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-hss-i18n`:

```
$ npm install eslint-plugin-hss-i18n --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-hss-i18n` globally.

## Usage

Add `i18n` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "hss-i18n"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "hss-i18n/no-interpolate-literal": "error",
        "hss-i18n/gettext-literal": "error"
    }
}
```

## Supported Rules

* `hss-i18n/no-interpolate-literal`: Prevent calling I18n.interpolate on untranslated string literals
* `hss-i18n/gettext-literal`: Prevent calling I18n.gettext with anything other
    than a literal string.





