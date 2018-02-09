# Study of the Javascript
## menu

[MD Wiki](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Notes - to not to forget what I want to add as a features

* In Emarsys Test Section, offer test list according to country code taken from local storage
* When files check - make sure links ends with slash (done)
* If DOM does not contain DIV, select first table (Asset checker)
* Rebuild MC checker.

## Javascript Regular expression
```
/i - case insensitive (does not matter if lower case or upper case)
/g - it will search for every matches within the string - not just the first one (G = Global)
```
### Regular Expression - Methods
```exec() - do not know, never used
test() - returns true of false
match() - takes string as a source a returns an array or null str.match(regularExpression)
search() - return index of first match. If not -> returns -1
replace() - takes a string as a source and returns new string
```
### Regular Expresssion - Meta Characters Symbols
```
^ - Must start with
$ - Must end with
^$ - Must begin and Must end with the same string
. - any character
* - Matches any character 0 or more times
? - Optional character (gre?a?y)
\ - Escape
```

### Regular Expresssion - Brackets
```
[] - set of any characters, we use them together, it goes one by one characters
[^] - anything except characters in brackets (not)
[A-Z] - any uppercase
[a-z] - any lowercase
[A-Za-z] - any letter
[0-9] - any digit
```
### Regular Expresssion - Braces {} -Quantifiers
```
character{} - hel{2}o, must occur exactly amout of times
character{2,4} - range of letters
character{2,} - at least two times
```

### Regular Expresssion - Parethesses () - grouping
```
([0-9]x){3} - 3x3x3x
```

### Regular Expresssion - Character Classes
```
([0-9]x){3} - 3x3x3x
```
