var
  Flat= require( "promise-flat"),
  Promisify= require( "es6-promisify")

var
  empty= Promise.resolve([])

function MultiFact( fn, _opts){
	_opts= _opts|| {}
	if(_opts && _opts.promisify){
		fn= Promisify(fn)
	}
	return function multiFact( items, opts){
		var len= items && items.length
		if( !len || typeof items === "string"){
			return fn( items, opts)
		}

		var all= []
		for( var i= 0; i< items.length; ++i){
			var
			  item= items[ i]
			  o= fn( item, opts)
			if( o!== undefined|| _opts.reduce=== false){
				all.push( o)
			}
		}
		return Flat.apply( null, all)
	}
}

module.exports= MultiFact
module.exports.defaults= MultiFact
module.exports.MultiFact = MultiFact
