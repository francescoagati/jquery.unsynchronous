(function(){
  var slice$ = [].slice;
  (function(){
    var delay, aeach, generate_async_function, amap, afilter, generate_plugin, x$, y$;
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
    generate_async_function = curry$(function(iterator_applyer, list, iterator, callback){
      var new_list, new_iterator;
      new_list = [];
      new_iterator = iterator_applyer(new_list, iterator);
      aeach(list, new_iterator, cont());
      return callback(new_list);
    });
    amap = generate_async_function(curry$(function(new_list, iterator, el){
      return new_list.push(iterator(el));
    }));
    afilter = generate_async_function(curry$(function(new_list, iterator, el){
      if (iterator(el)) {
        return new_list.push(el);
      }
    }));
    jQuery.fn.unsynchronous = {
      delay: delay,
      amap: amap,
      afilter: afilter,
      aeach: aeach
    };
    generate_plugin = curry$(function(plugin, iterator, callback){
      return plugin(this, iterator, callback);
    });
    return (x$ = jQuery, (y$ = x$.fn, y$.amap = generate_plugin(amap), y$.afilter = generate_plugin(afilter), y$.aeach = generate_plugin(aeach)));
  })();
  function curry$(f, args){
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      return params.push.apply(params, arguments) < f.length && arguments.length ?
        curry$.call(this, f, params) : f.apply(this, params);
    } : f;
  }
}).call(this);
