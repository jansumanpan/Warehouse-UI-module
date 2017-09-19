openerp.warehouse_ui_1 = function(instance) {
     var module = instance.warehouse_ui_1;

		var QWeb = instance.web.qweb;
		var tab_data = [];
     instance.web_kanban.KanbanView.include({

    	 load_kanban: function(data) {
        this.fields_view = data;
     	console.log("called")
        // use default order if defined in xml description
        	
	        var default_order = this.fields_view.arch.attrs.default_order,
	            unsorted = !this.dataset._sort.length;
	        if (unsorted && default_order) {
	            this.dataset.set_sort(default_order.split(','));
	        }
	        
	        this.$el.addClass(this.fields_view.arch.attrs['class']);
	        this.$buttons = $(QWeb.render("KanbanView.buttons", {'widget': this}));
	        if (this.options.$buttons) {
	            this.$buttons.appendTo(this.options.$buttons);
	        } else {
	            this.$el.find('.oe_kanban_buttons').replaceWith(this.$buttons);
	        }
	        this.$buttons
	            .on('click', 'button.oe_kanban_button_new', this.do_add_record)
	            .on('click', '.oe_kanban_add_column', this.do_add_group);
	        this.$groups = this.$el.find('.oe_kanban_groups tr');
	        this.fields_keys = _.keys(this.fields_view.fields);
	        this.load_tabs();
	        this.add_qweb_template();
	        this.has_been_loaded.resolve();
	        this.trigger('kanban_view_loaded', data);
	        this.add_button_onclicks();
	        
	        // this.is_stock_picking();
	        return $.when();
   	 	},

     	is_stock_picking: function() {
	        if (this.fields_view.model && this.fields_view.model == 'stock.picking.type') {
	            return true
	        } else {
	            return false
	        }
    	},
    	load_tabs: function(){
    		if (this.is_stock_picking()) {
    			// console.log("Lahos")
    			$.getJSON("/warehouse/tab_data", function(result) {
			                if (tab_data.length === 0){

				                var obj = result;
				                tab_data.push('<li class="warehouse_all active" data-name = "All Warehouse"><a>All Warehouses</a></li>');
								$.each( obj, function( id, value ) {
									
								      $.each (value, function (k,v) {
								      		tab_data.push('<li class = "warehouse_' + id + '" data-name = "'+ v +'"><a>' + v + '</a></li>')
									});
								});
				                $("#warehouse_tabs").append(tab_data.join(''));
				                // console.log(tab_data + ': Show Tab Data');

			                }else{
			                	// console.log(tab_data + ':Else tab_data length is many');
			       //          	  function isEmpty( el ){
								  //     return !$.trim(el.html())
								  // }
			                	if ($('#warehouse_tabs li').size() == 0){
								  	// console.log('empty')
								  	$("#warehouse_tabs").append(tab_data.join(''));
								}
								else{
									// console.log('not empty')
								}	
			                }
			               
			        });
    		}
    		else{
    			tab_data = [];
    		}
    	},
    	add_button_onclicks: function(){
    		this.$buttons.on('click', 'li[class^="warehouse_"]', function(event) {
    			event.preventDefault();
    			var name = $(event.currentTarget).data("name")
    			console.log(name)
    			/* Act on the event */
    			$('li[class^="warehouse_').removeClass('active');
    			$(this).addClass('active');

    			if (name === "All Warehouse") {

    				console.log(this)
    				
    				// if (name !== "All Warehouse") {
    					$('.oe_fold_column.oe_kanban_record').show();
    				// }

    			} else{

    					$('.oe_warehouse_name').each(function(i,obj) {
    				// console.log(i)
    				// var text = obj.text()
    				// console.log(text)
    				var obj_compare = $.trim($(this).text())
    				// console.log()
    				if (name !== obj_compare) {
    					// console.log($(this).closest('.oe_fold_column.oe_kanban_record'))
    					$(this).closest('.oe_fold_column.oe_kanban_record').attr("style", "display:none");
    					// console.log(this)
    					
    				}
    				else{
    					// console.log("Lol")
    					$(this).closest('.oe_fold_column.oe_kanban_record').show();
    					// $('.oe_fold_column oe_kanban_record').find('div:contains("' + name + '");').removeAttr('style')
    				}
    			});

    			}
    		

    		});
    	},
    	
    	
   	//  do_query: function() {
    //     var self = this
    //     var context = {}
    //     var passed = false

    //     if(this.is_site()) {

    //         var site_id = self.datarecord.id

    //         // btn.on('click', function() {
    //             new instance.web.Model('stock.picking.type')
    //                 .query()
    //                 .filter([['id', '=', site_id]])
    //                 .first()
    //                 .then(function(res) {
    //                     if(res && !passed) {
    //                         context = {
    //                             'default_parent_id': res.id
    //                         }
    //                         self.do_button_action(context)
    //                         passed = true
    //                     }
    //                 })
    //         // })
    //     }
    // },
    // do_button_action: function (context) {
    //     var self = this

    //     var action = ({
    //         type: 'ir.actions.act_window',
    //         res_model: 'broadband.wizard',
    //         view_type: 'form',
    //         view_mode: 'form',
    //         views: [[false, 'form']],
    //         target: 'new',
    //         context: context
    //     })

    //     self.do_action(action)
     });
};
