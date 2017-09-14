function openerp_picking_override(instance){

    var module = instance.warehouse_ui_1;
  

    module.PickingMainWidgetOverride = instance.stock.PickingMainWidget.include({
        done: function(){
            var self = this;
            return new instance.web.Model('stock.picking')
                .call('action_done_from_ui',[self.picking.id, {'default_picking_type_id': self.picking_type_id}])
                .then(function(new_picking_ids){
                    if (new_picking_ids){
                        console.log("Run This")
                        return self.quit();
                    }
                    else {
                        return 0;
                    }
                });
        },
    });

}

openerp.warehouse_ui_1 = function(openerp) {
    openerp.warehouse_ui_1 = openerp.warehouse_ui_1 || {};
    openerp_picking_override(openerp);
}
