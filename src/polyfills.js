import { everyFn } from "./customEvery/customEvery"
import { filterFn } from "./customFilter/customFilter"
import { mapperFn } from "./customMap/customMap"
import { reduceFn } from "./customReduce/customReduce"
import { someFn } from "./customSome/customSome"

Array.prototype.customMap = mapperFn
Array.prototype.customFilter = filterFn
Array.prototype.customReduce = reduceFn
Array.prototype.customSome = someFn
Array.prototype.customEvery = everyFn

