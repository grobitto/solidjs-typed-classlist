# SolidJS Typed Classes

This library provides `classnames` and `classlist` functions designed to work in a SolidJS environment with an `postcss-ts-classnames` plugin. 
You can get IDE-validation and auto-completion of your CSS classes in ts code.

## Installation

To install the library, use the following command:

```sh
npm install solidjs-typed-classlist
```

## Usage

First, generate classnames definitions using the `postcss-ts-classnames` plugin. Then, re-export the `classlist` and `classnames` functions from this package as follows:

```ts
import { classlist, classnames } from 'solidjs-typed-classlist';

const cl = classlist<ClassList>;
const cn = classnames<ClassList>;
```

## Example

Here is an example of how to use the `cl` and `cn` functions in your SolidJS components:

```ts
import { cl, cn } from './path-to-your-re-exported-functions';

const MyComponent = () => {
  return (
    <div classList={cl("my-class1", { "my-class2": true, "my-class3":expression })}>
      <span class={cn('myClass', 'anotherClass')}>Hello, SolidJS!</span>
    </div>
  );
};
```








































