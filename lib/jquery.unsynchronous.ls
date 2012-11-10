do ->
    
  delay= (fn,...args,callback) -> 
    wrapper = -> callback(fn.apply(null,args))
    setTimeout wrapper

  aeach=  (list,iterator,callback) -> 
    for el in list
      delay iterator,el,cont()
    callback!


  amap= (list,iterator,callback) -> 
    new_list=[]
    for el in list
      delay iterator,el,cont(result)
      new_list.push(result)
    callback(new_list)

  afilter= (list,iterator,callback) -> 
    new_list=[]
    for el in list
      delay iterator,el,cont(result)
      new_list.push(el) if result
    callback(new_list)
    
  jQuery.fn.unsynchronous = 
    delay:delay
    amap:amap
    afilter:afilter
    aeach:aeach
    
  jQuery.fn.amap= (iterator,callback)->
    elements=@
    amap(elements,iterator,callback)
    
  jQuery.fn.afilter= (iterator,callback)->
    elements=@
    afilter(elements,iterator,callback)
  
  jQuery.fn.aeach= (iterator,callback)->
    elements=@
    aeach(elements,iterator,callback)