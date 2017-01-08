$(document).ready(function(){
  console.log("preparing ajax call");
  $.ajax({
		    dataType: "json",
		    url: "https://spreadsheets.google.com/feeds/list/1s3ljuEdN7Gbm-Tqur338zYL49GMY96aIH4KF6Z4g9wE/od6/public/values?alt=json",
				success: function(data) {
            console.log(data.feed.entry[0]);
						data = data.feed.entry;

						// Grab the template script
						var listTemplateScript = $("#list-template").html();
            var blurbTemplateScript = $("#blurb-template").html();

						// Compile the template
						var listTemplate = Handlebars.compile(listTemplateScript);
            var blurbTemplate = Handlebars.compile(blurbTemplateScript);

						var mydata = data;

						// Pass our data to the template
						var listCompiledHtml = listTemplate(mydata);
            var blurbCompiledHtml = blurbTemplate(mydata);

						// Add the compiled html to the page
						$('.list-placeholder').html(listCompiledHtml);
            $('.blurb-placeholder').html(blurbCompiledHtml);
				}
	});

});
