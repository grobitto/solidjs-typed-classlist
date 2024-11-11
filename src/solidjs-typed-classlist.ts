type ClassNameRecord<K extends string> = {
  [P in K]?: boolean |  undefined;
};

type Variants<T extends string> =
  | T
  | ClassNameRecord<T>
  | undefined
  | boolean;

export interface ClassNamesFunction<T extends string> {
  (...args: Variants<T>[]): string;
}

export interface ClassListFunction<T extends string> {
  (...args: Variants<T>[]): ClassNameRecord<T>;
}


export function classlist<T extends string>( ...classes:Variants<T>[]) {
  if( classes.length === 1 && typeof classes[0] !== "string") {
    return classes[0] as {[key:string]:boolean | undefined};
  }

  const result:{[key in T]?: boolean | undefined} = {};
  classes.forEach((c) => {
    if (typeof c === "object" && c !== null) {
      Object.keys(c as ClassNameRecord<T>).forEach((key) => {
        result[key as T] = c![key as T] as undefined as boolean  | undefined;
      });
    } else if( c !== null && c !== undefined) {
      result[c as T] = true;
    }
  });
  return result;
}

export function classnames<T extends string>( ...classes:Variants<T>[]) {
  const result = classlist(...classes);
  return Object.keys(result).filter((key) => result[key as T]).join(" ");
}