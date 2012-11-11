jQuery unsynchronous

Jquery plugins for async versions of map, filter and each. 


Developed with [livescript](http://livescript.net/) and [continuation.js](https://github.com/BYVoid/continuation).


see [jquery.unsynchronous.ls](https://github.com/francescoagati/jquery.unsynchronous/blob/master/lib/jquery.unsynchronous.ls) for original code
and [jquery.unsynchronous.ls](https://github.com/francescoagati/jquery.unsynchronous/blob/master/lib/jquery.unsynchronous.js) for compiled code.


amap

jQuery(selector).amap(iterator,callback_result)

```
 jQuery([1 2 3 4 5]).amap (
    function(element) { return element + 10}, 
    function(new_list) { console.log(new_list) }
 );
```

afilter

jQuery(selector).afilter(iterator,callback_result)

```
 jQuery([1 2 3 4 5]).amap (
    function(element) { return element >= 4}, 
    function(new_list) { console.log(new_list) }
 );
```

aeach

jQuery(selector).aeach(iterator,callback_result)

```
 jQuery("div").amap (
    function(element) { $(el).innerHtml = "hello" }, 
    function() { console.log("done") }
 );
```