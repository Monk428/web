/**
 * Created by monk on 2018/2/26.
 */
define (function () {
  var m2 = function (info) {
    console.log(info)
  }
  return {
    m2 : m2
  }
})

// 依赖其它模块，会先加载otherModule模块
// define (['otherModule'], function () {
//   var m1 = function (info) {
//     console.log(info)
//   }
//   return {
//     m1 : m1
//   }
// })