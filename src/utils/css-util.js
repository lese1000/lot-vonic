//  添加class
  function addClass(kls, dom) {　　　　
      var klsReg = new RegExp(kls, 'ig');
      for (var i = 0; i<dom.length; i++){
          var node = dom[i];
          var klses = node.className;
          if (!klsReg.test(klses)) {
              node.className = klses + ' ' +kls
          }
          console.log(klses)
      }
  }
// 删除class
  function removeClass(kls, dom) {
      var klsReg = new RegExp(kls, 'ig');
      for (var i = 0; i<dom.length; i++){
          var node = dom[i];
          var klses = node.className;
          if (klsReg.test(klses)) {
              node.className = node.className.replace(kls, '')
          }
      }
  }

  export default {
    addClass : addClass,
    removeClass : removeClass
  }
