import { createDisplayData } from "./createDisplayData"
import { mapResultCode } from "./customMap/customMapTest"
import {filterResultCode} from './customFilter/customFilterTest'
import {reduceResultCode} from './customReduce/customReduceTest'
import {someResultCode} from './customSome/customSomeTest'
import {everyResultCode} from './customEvery/customEveryTest'
import "./polyfills"

createDisplayData('map', mapResultCode, Array.prototype.customMap)
createDisplayData('filter', filterResultCode, Array.prototype.customFilter)
createDisplayData('reduce', reduceResultCode, Array.prototype.customReduce)
createDisplayData('some', someResultCode, Array.prototype.customSome)
createDisplayData('every', everyResultCode, Array.prototype.customEvery)
hljs.highlightAll()
