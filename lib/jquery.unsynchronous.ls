window.async= do ->
  delay= (fn,...args,callback) -> 
    wrapper = -> callback(fn.apply(null,args))
    setTimeout wrapper,100
  sum = (a,b) -> a + b

  amap= (list,fn,callback) -> 
    new_list=[]
    for el in list
      delay fn,el,cont(result)
      new_list.push(result)
    callback(new_list)

  afilter= (list,fn,callback) -> 
    new_list=[]
    for el in list
      delay fn,el,cont(result)
      new_list.push(el) if result
    callback(new_list)
    
  {
    amap:amap
    afilter:afilter
  }

async.amap [1,2,3,4,5], (+ 10), cont(result)
console.log result

async.afilter result, (> 12), cont(result)
console.log result