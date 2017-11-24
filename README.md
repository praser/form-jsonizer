[![Build Status](https://travis-ci.org/praser/form-jsonizer.svg?branch=master)](https://travis-ci.org/praser/form-jsonizer)
[![Coverage Status](https://coveralls.io/repos/github/praser/form-jsonizer/badge.svg?branch=master)](https://coveralls.io/github/praser/form-jsonizer?branch=master)

## Synopsis

Some times all you want is a simplier way to transform your html forms in json or js objects. This is what this projet is about.

## Code Example

Consider a simple markup like this:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <form action="#" id="myForm">
    <input type="checkbox" name="checkbox" value="checkbox" checked disabled>
    <input type="color" name="color" value="#FF0000" disabled>
    <input type="date" name="date" value="2017-11-24" disabled>
    <input type="datetime" name="datetime" value="2017-11-24T04:30" disabled>
    <input type="datetime-local" name="datetime-local" value="2017-11-24T04:30" disabled>
    <input type="email" name="email" value="jonhdoe@email.com">
    <input type="file" name="file">
    <input type="hidden" name="hidden" value="hidden">
    <input type="image" src="image" alt="image input">
    <input type="month" name="month" value="2017-11">
    <input type="number" name="number" value="12345">
    <input type="password" name="password" value="password">
    <input type="radio" name="radio" value="radio" checked>
    <input type="radio" name="radio" value="radio2">
    <input type="range" name="range" value="35">
    <input type="search" name="search" value="search">
    <input type="tel" name="tel" value="(61)99304-1307">
    <input type="text" name="text" value="text">
    <input type="time" name="time" value="04:30">
    <input type="url" name="url" value="http://www.google.com">
    <input type="week" name="week" value="2017-W47">
    <input type="reset" value="reset">
    <input type="button" value="button">
    <input type="submit" value="">
    <textarea name="textarea" cols="30" rows="10">textarea</textarea>
    <select name="select">
      <option value="select" selected>select</option>
    </select>
  </form>
</body>
</html>

```
Then all you have to do is create a new instance of FormJsonizer and call the serializer method. Don't forget passing the form object as the first parameter! Take a look:

```
const jsonizer = new FormJsonizer();
const form =  document.getElementById('myForm');
const json = jsonizer.serialize(form);

```
And voilà, you get this json:
```
{
	"email": "jonhdoe@email.com",
	"hidden": "hidden",
	"month": "2017-11",
	"number": "12345",
	"password": "password",
	"radio": "radio",
	"range": "35",
	"search": "search",
	"tel": "(61)99304-1307",
	"text": "text",
	"time": "04:30",
	"url": "http://www.google.com",
	"week": "2017-W47",
	"textarea": "textarea"
}
```

There is some other tricks you can do:

If you whant disabled fields to be included in the output just say it when you instanciate the class, pretty nice hã?

```
const jsonizer = new FormJsonizer({ includeDisabled: true })
```

And if you preffer output a JS object instead of a json there is no problem...

```
const jsonizer = new FormJsonizer({ json: false });
```

## Motivation

This is a pretty simple project, and learning and having fun was the main motivation bahind this code, and of course, trying to solve some problems of the real world.

## Installation

There's no secret:

```
npm install form-jsonizer -s
```

## Tests

After clone the project just open the folder and execute de command bellow:

```
npm test
```

## Contributors

Feel free to contribut, just keep in mind the code pattern of the project and be happy! :)

## License

Do whatever you want with this code! Enjoy, it is distributed under MIT license.