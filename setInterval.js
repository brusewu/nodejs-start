function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数  
//程序每隔两秒就会输出一次"Hello, World!"，且会永久执行下去，直到你按下 ctrl + c 按钮。
setInterval(printHello, 2000);