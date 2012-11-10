(function(){
  var slice$ = [].slice;
  window.async = function(){
    var delay, sum, amap, afilter;
    delay = function(fn){
      var i$, args, callback, wrapper;
      args = 1 < (i$ = arguments.length - 1) ? slice$.call(arguments, 1, i$) : (i$ = 1, []), callback = arguments[i$];
      wrapper = function(){
        return callback(fn.apply(null, args));
      };
      return setTimeout(wrapper, 100);
    };
    sum = function(a, b){
      return a + b;
    };
    amap = function(list, fn, callback){
      var new_list, i$, len$, el;
      new_list = [];
      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
        el = list[i$];
        delay(fn, el, cont(result));
        new_list.push(result);
      }
      return callback(new_list);
    };
    afilter = function(list, fn, callback){
      var new_list, i$, len$, el;
      new_list = [];
      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
        el = list[i$];
        delay(fn, el, cont(result));
        if (result) {
          new_list.push(el);
        }
      }
      return callback(new_list);
    };
    return {
      amap: amap,
      afilter: afilter
    };
  }();
  async.amap([1, 2, 3, 4, 5], (function(it){
    return it + 10;
  }), cont(result));
  console.log(result);
  async.afilter(result, (function(it){
    return it > 12;
  }), cont(result));
  console.log(result);
}).call(this);
