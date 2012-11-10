(function(){
  var slice$ = [].slice;
  (function(){
    var delay, aeach, amap, afilter;
    delay = function(fn){
      var i$, args, callback, wrapper;
      args = 1 < (i$ = arguments.length - 1) ? slice$.call(arguments, 1, i$) : (i$ = 1, []), callback = arguments[i$];
      wrapper = function(){
        return callback(fn.apply(null, args));
      };
      return setTimeout(wrapper);
    };
    aeach = function(list, iterator, callback){
      var i$, len$, el;
      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
        el = list[i$];
        delay(iterator, el, cont());
      }
      return callback();
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
    jQuery.fn.unsynchronous = {
      delay: delay,
      amap: amap,
      afilter: afilter,
      aeach: aeach
    };
    jQuery.fn.amap = function(iterator, callback){
      var elements;
      elements = this;
      return amap(elements, iterator, callback);
    };
    jQuery.fn.afilter = function(iterator, callback){
      var elements;
      elements = this;
      return afilter(elements, iterator, callback);
    };
    return jQuery.fn.aeach = function(iterator, callback){
      var elements;
      elements = this;
      return aeach(elements, iterator, callback);
    };
  })();
}).call(this);
