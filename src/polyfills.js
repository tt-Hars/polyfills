import { filterFn } from "./customFilter/customFilter"
import { mapperFn } from "./customMap/customMap"
import { reduceFn } from "./customReduce/customReduce"

Array.prototype.customMap = mapperFn
Array.prototype.customFilter = filterFn
Array.prototype.customReduce = reduceFn

