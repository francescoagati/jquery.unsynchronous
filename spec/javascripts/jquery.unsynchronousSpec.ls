describe "jQuery.fn.unsynchronous", (x) ->
  it "exists", ->
    expect(jQuery.fn.unsynchronous).not.toBe null
  
  describe \map, (x) ->
      it "transform [1 2 3 4 5] in [10 20 30 40 50] with (* 10)", ->
        cb = jasmine.createSpy!
        jQuery.fn.unsynchronous.amap([1 2 3 4 5], (* 10), cb)
        waitsFor -> cb.callCount > 0
        runs -> expect(cb.mostRecentCall.args[0]).toEqual([10 20 30 40 50])

  describe \filter, (x) ->
      it "transform [1 2 3 4 5] in [4 5] with (>= 4)", ->
        cb = jasmine.createSpy!
        jQuery.fn.unsynchronous.afilter([1 2 3 4 5], (>= 4), cb)
        waitsFor -> cb.callCount > 0
        runs -> expect(cb.mostRecentCall.args[0]).toEqual([4 5])
