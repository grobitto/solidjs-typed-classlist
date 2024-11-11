import { classlist, classnames  } from "../src/solidjs-typed-classlist";

export type ClassList = "aaa"| "bbb" | "ccc";

const cl = classlist<ClassList>;
const cn = classnames<ClassList>;




console.log( cn("aaa", "bbb", "ccc") ); // "aaa bbb ccc"
console.log( cl("aaa", "bbb", {"ccc":true}) ); // "aaa bbb ccc"