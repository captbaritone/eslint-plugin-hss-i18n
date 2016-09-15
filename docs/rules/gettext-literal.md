# Prevent calling I18n.gettext with anything other than a literal string. (gettext-literal)

Our translation setup depends upon our ability to extract translatable strings
from our code base. If the string you wish to translate is defined outside of
the `gettext` call, our system will not pick up the string and it will not get
translated

__Note:__ Our system can pick up concatenated strings, and this rule allows
those.

## Rule Details

The following patterns are considered warnings:

```js

var helloWorld = 'Hello World';
I18n.gettext(helloWorld);

```

The following patterns are not warnings:

```js

I18n.gettext('Hello World');

I18n.gettext('Hello ' + 'World');

```
