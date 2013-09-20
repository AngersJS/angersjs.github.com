requirejs.config({
    baseUrl: '/js',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
        bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});
 
requirejs([
    'jquery', 
    'bootstrap'
    ], function($, _bootstrap){
	
		$.fn.articles = function() {
			var element = $(this);
			$.getJSON('data/articles.json', function(data) {
				var i = 0;
				$.each(data.articles, function(j, item){
					var article = $("<div/>").addClass('article').appendTo(element);
					var h3  = $("<h3/>").html(item.titre).appendTo(article);
					var contenu = $("<p/>").html(item.contenu).appendTo(article);
					i++;
				});
			}).fail(function(jqXHR, textStatus, errorThrow) {
                var error = $("<div/>").html(jqXHR.responseText).addClass('error').appendTo(element);
                var textStatus = $("<div/>").html(textStatus).addClass('textStatus').appendTo(element);
                var errorThrow = $("<div/>").html(errorThrow).addClass('errorThrow').appendTo(element);
            });
		}

		$('#articles').articles();
        // this is where all the site code should begin
        return {};
});

