import { createDisplayData } from "./createDisplayData"
import { mapResultCode } from "./customMap/customMapTest"
import {filterResultCode} from './customFilter/customFilterTest'
import {reduceResultCode} from './customReduce/customReduceTest'
import "./polyfills"

createDisplayData('map', mapResultCode, Array.prototype.customMap)
createDisplayData('filter', filterResultCode, Array.prototype.customFilter)
createDisplayData('reduce', reduceResultCode, Array.prototype.customReduce)
hljs.highlightAll()
