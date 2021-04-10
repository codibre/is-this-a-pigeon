[![Actions Status](https://github.com/Codibre/is-this-a-pigeon/workflows/build/badge.svg)](https://github.com/Codibre/is-this-a-pigeon/actions)
[![Actions Status](https://github.com/Codibre/is-this-a-pigeon/workflows/test/badge.svg)](https://github.com/Codibre/is-this-a-pigeon/actions)
[![Actions Status](https://github.com/Codibre/is-this-a-pigeon/workflows/lint/badge.svg)](https://github.com/Codibre/is-this-a-pigeon/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/90996d7f4178c61437ab/test_coverage)](https://codeclimate.com/github/Codibre/is-this-a-pigeon/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/90996d7f4178c61437ab/maintainability)](https://codeclimate.com/github/Codibre/is-this-a-pigeon/maintainability)
[![Packages](https://david-dm.org/Codibre/is-this-a-pigeon.svg)](https://david-dm.org/Codibre/is-this-a-pigeon)
[![npm version](https://badge.fury.io/js/is-this-a-pigeon.svg)](https://badge.fury.io/js/is-this-a-pigeon)

![is-this-a-pigeson-logo](assets/logo.jpg)

Just a project with some type guard functions to identify the type of an object not vanilla covered and some dummy functions for better readability and to use as some common callbacks

# How to install

```
npm i is-this-a-pigeon
```

# How to Use it

Just call the function you want, like this simple type guard:

```ts
function iterateIfYouCan(maybeAnIterable: unknown) {
  if (isIterable(maybeAnIterable)) {
    for (const item of maybeAnIterable) {
      console.log(item);
    }
  }
}
```

There you go. Inside the if, even maybeAnIterable not being typed as an iterable, you can safely iterate over it and TypeScript will not scream at you. This is a simple type guard for iterable. There is plenty of others type guards in this library, you may check it out.


We also have some dummy functions for use in simple callbacks for better readability. Examples:

```ts
 // identity returns the received argument. This filter will return an array excluding all the falsy elements
[0, 1, false, 'a', null, NaN, true].filter(identity);
 // greaterThan returns a functions that evaluates to true only when the argument is greater than the informed value
[1, 2, 3, 4, 5, 6].filter(greaterThan(3));
// Filters all values where property "a" is greater than 3. Directly passing as a parameter of filter or something similar, you have a strongly typed property key!
// Thanks to TypeScript contextual typing
[{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }].filter(compareProp('a', greaterThan(3)));
// Filters all values where property "a" is truthy
[{ a: 0 }, { a: 1 }, { a: false }, { a: 'a' }, { a: null }, { a: NaN }, { a: true }].filter(prop('a'));
```


## But why though?

The kind of function I made here is a repeating code for many projects I work with. So, I just wanted to group it in a single package with the best typing possible

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
