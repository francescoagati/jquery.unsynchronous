describe "jQuery.fn.unsynchronous", (x) ->
  it "exists", ->
    expect(jQuery.fn.unsynchronous).not.toBe null

  describe \aeach, (x) ->
      it "creare a new array from [1 2 3 4 5]", ->
        cb = jasmine.createSpy!
        new_list=[]
        jQuery.fn.unsynchronous.aeach([1 2 3 4 5],( (el) -> new_list.push(el)  ),cb)
        waitsFor -> cb.callCount > 0
        runs -> expect(new_list).toEqual([1 2 3 4 5])
  

  
  describe \amap, (x) ->
      it "transform [1 2 3 4 5] in [10 20 30 40 50] with (* 10)", ->
        cb = jasmine.createSpy!
        jQuery.fn.unsynchronous.amap([1 2 3 4 5], (* 10), cb)
        waitsFor -> cb.callCount > 0
        runs -> expect(cb.mostRecentCall.args[0]).toEqual([10 20 30 40 50])

  describe \afilter, (x) ->
      it "transform [1 2 3 4 5] in [4 5] with (>= 4)", ->
        cb = jasmine.createSpy!
        jQuery.fn.unsynchronous.afilter([1 2 3 4 5], (>= 4), cb)
        waitsFor -> cb.callCount > 0
        runs -> expect(cb.mostRecentCall.args[0]).toEqual([4 5])

describe "jQuery plugins", (x) ->
  describe \amap, (x) ->
      it "transform [1 2 3 4 5] in [10 20 30 40 50] with (* 10)", ->
        cb = jasmine.createSpy!
        jQuery([1 2 3 4 5])amap (* 10), cb
        waitsFor -> cb.callCount > 0
        runs -> expect(cb.mostRecentCall.args[0]).toEqual([10 20 30 40 50])

  describe \afilter, (x) ->
      it "transform [1 2 3 4 5] in [4 5] with (>= 4)", ->
        cb = jasmine.createSpy!
        jQuery([1 2 3 4 5]).afilter (>= 4), cb
        waitsFor -> cb.callCount > 0
        runs -> expect(cb.mostRecentCall.args[0]).toEqual([4 5])


  describe \aeach, (x) ->
      it "creare a new array from [1 2 3 4 5]", ->
        cb = jasmine.createSpy!
        new_list=[]
        $([1 2 3 4 5]).aeach ( (el) -> new_list.push(el)  ), cb
        waitsFor -> cb.callCount > 0
        runs -> expect(new_list).toEqual([1 2 3 4 5])