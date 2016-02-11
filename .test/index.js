var
  multi= require(".."),
  tape= require( "tape")

tape("Iterates through array", function(t){
	var
	  i= -1,
	  fn= function(){
		return ++i
	  }
	multi(fn)([true, true, true]).then(function(result){
		t.deepEqual(result, [0, 1, 2], "runs")
		t.end()
	})
})

tape("Skips undefined results", function(t){
	var
	  i= -1,
	  fn= function(i){
		return i % 2 ? i : undefined
	  }
	multi(fn)([1,2,3,4,5]).then(function(result){
		t.deepEqual(result, [1,3,5], "skips undefined")
		t.end()
	})
})
