(function(){
  describe("jQuery.fn.unsynchronous", function(x){
    it("exists", function(){
      return expect(jQuery.fn.unsynchronous).not.toBe(null);
    });
    describe('map', function(x){
      return it("transform [1 2 3 4 5] in [10 20 30 40 50] with (* 10)", function(){
        var cb;
        cb = jasmine.createSpy();
        jQuery.fn.unsynchronous.amap([1, 2, 3, 4, 5], (function(it){
          return it * 10;
        }), cb);
        waitsFor(function(){
          return cb.callCount > 0;
        });
        return runs(function(){
          return expect(cb.mostRecentCall.args[0]).toEqual([10, 20, 30, 40, 50]);
        });
      });
    });
    return describe('filter', function(x){
      return it("transform [1 2 3 4 5] in [4 5] with (>= 4)", function(){
        var cb;
        cb = jasmine.createSpy();
        jQuery.fn.unsynchronous.afilter([1, 2, 3, 4, 5], (function(it){
          return it >= 4;
        }), cb);
        waitsFor(function(){
          return cb.callCount > 0;
        });
        return runs(function(){
          return expect(cb.mostRecentCall.args[0]).toEqual([4, 5]);
        });
      });
    });
  });
}).call(this);
