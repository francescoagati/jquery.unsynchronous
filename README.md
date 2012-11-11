jQuery unsynchronous

jquery plugins for async versions of map, filter and each.

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