# Prevent calling interpolate on string literals (no-liternal-interpolate)

`I18n.interpolate()` by itself does not actually translate a string. However
many people mistakenly think that it does. This rule prevents you from calling
`interpolate` on a literal string. You should instead pass `interpolate`
a string that has already been translated by `I18n.gettext`.

## Rule Details

The following patterns are considered warnings:

```js

I18n.interpolate('Some string %(foo)s', {foo: 'bar'});

```

The following patterns are not warnings:

```js

var someString = I18n.gettext('Some string %(foo)s');
I18n.interpolate(someString, {foo: 'bar'});

```
