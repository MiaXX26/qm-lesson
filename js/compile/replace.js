// var str = 'Visit Microsoft!';
// console.log(str.replace('Microsoft', 'Alibaba'));
// var money = '$dfdfdf$dfdfdf$';
// console.log(money.replace(/\$/g, '￥'));

let html = `abc{{username}}edfcccc`;
let reg = /\{\{(.*)\}\}/gm;
console.log(reg.test(html), RegExp.$1);