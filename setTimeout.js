function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数 setTimeout() 只执行一次指定函数
setTimeout(printHello, 2000);