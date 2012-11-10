do ->
    
  delay = (fn,...args,callback) -> 
    wrapper = -> callback(fn.apply(null,args))
    setTimeout wrapper

  aeach =  (list,iterator,callback) -> 
    for el in list
      delay iterator,el,cont()
    callback!

  generate_async_iterator_function = (iterator_applyer,list,iterator,callback) -->
    new_list = []
    new_iterator = iterator_applyer(new_list,iterator)
    aeach list, new_iterator, cont()
    callback(new_list)
   
  amap = generate_async_iterator_function (new_list,iterator,el) -->  new_list.push(iterator(el))
  afilter = generate_async_iterator_function (new_list,iterator,el) --> new_list.push(el) if iterator(el)

    
  jQuery.fn.unsynchronous = {delay, amap, afilter, aeach}
    
  generate_plugin = (plugin,iterator,callback) --> plugin(@,iterator,callback)
    
  jQuery
    ..fn
      ..amap = generate_plugin amap
      ..afilter= generate_plugin afilter
      ..aeach= generate_plugin aeach