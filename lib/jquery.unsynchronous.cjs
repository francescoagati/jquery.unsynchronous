(function(){
  var slice$ = [].slice;
  (function(){
    var delay, amap, afilter;
    delay = function(fn){
      var i$, args, callback, wrapper;
      args = 1 < (i$ = arguments.length - 1) ? slice$.call(arguments, 1, i$) : (i$ = 1, []), callback = arguments[i$];
      wrapper = function(){
        return callback(fn.apply(null, args));
      };
      return setTimeout(wrapper);
    };
    amap = function(list, iterator, callback){
      var new_list, i$, len$, el;
      new_list = [];
      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
        el = list[i$];
        delay(iterator, el, cont(result));
        new_list.push(result);
      }
      return callback(new_list);
    };
    afilter = function(list, iterator, callback){
      var new_list, i$, len$, el;
      new_list = [];
      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
        el = list[i$];
        delay(iterator, el, cont(result));
        if (result) {
          new_list.push(el);
        }
      }
      return callback(new_list);
    };
    return jQuery.fn.unsynchronous = {
      delay: delay,
      amap: amap,
      afilter: afilter
    };
  })();
}).call(this);
