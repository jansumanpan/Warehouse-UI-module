$( window ).on( "load",function() {
	 var tab_data = [];
    setInterval(function() {
	$("#warehouse_tabs").ready(function(){
			var  isVisible = $("#warehouse_tabs").is(':visible');
			var isEmpty = $('#warehouse_tabs').is(':empty');
			if (isVisible === true) {
			   // element is Visible
			   setTimeout(function(){
			   		    $.getJSON("/warehouse/tab_data", function(result) {
			                if (tab_data.length === 0){
				                var obj = result;
				                tab_data.push('<li class="active"><a href="#">All Warehouses</a></li>');
								$.each( obj, function( id, value ) {
									
								      $.each (value, function (k,v) {
								      		tab_data.push('<li><a href="#">' + v + '</a></li>')
									});
								});
				                $("#warehouse_tabs").append(tab_data.join(''));
			                }else{
			                	console.log(tab_data + ':Else tab_data length is many');
			       //          	  function isEmpty( el ){
								  //     return !$.trim(el.html())
								  // }
			                	if ($('#warehouse_tabs li').size() == 0){
								  	console.log('empty')
								  	// $("#warehouse_tabs").append(tab_data.join(''));
								}
								else{
									console.log('not empty')
								}	
			                }
			               
			        });
			   }, 3000);
			} else {
			  // element is Hidden

				 tab_data = [];
				 console.log(tab_data + ':not Visible');
			}
   		   console.log(tab_data + ':end');
	});
    
    }, 2000);
});