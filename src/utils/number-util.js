//保留两位小数
   //功能：将浮点数四舍五入，取小数点后2位
   export function toDecimal(x) {
     var f = parseFloat(x);
     if (isNaN(f)) {
       return;
     }
     f = Math.round(x*100)/100;
     return f;
   }

   //功能：将浮点数四舍五入，取小数点后指定位数
   export function fomatFloat(src,pos){
       return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
    }
   //功能：将浮点数向上取数，取小数点后指定位数
   export function fomatFloatUp(src,pos){
     return Math.ceil(src*Math.pow(10, pos))/Math.pow(10, pos);
   }

   //功能：判断是否未整数 isInteger(3) true; isInteger('3') false;
   export function isInteger(obj) {
     return Math.floor(obj) === obj
    }
