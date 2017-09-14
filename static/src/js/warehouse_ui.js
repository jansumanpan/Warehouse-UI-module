// openerp.warehouse_ui = function (instance){
// var QWeb = openerp.web.qweb;
// _t = instance.web._t;
// openerp.web_kanban.KanbanView.include({
// load_kanban: function(data) {
// this._super(data);
// if (this.$buttons) {
// this.$buttons.find('.oe_kanban_button_new').off().click(this.proxy('give_warehouse_domain')) ;
// console.log('Save & Close button method call...');
// }
// },
// give_warehouse_domain: function () {
// console.log(" do the job action")
// // this.do_action({
// // type: "ir.actions.act_window",
// // name: "Sample Button",
// // res_model: "project.project",
// // views: false,'form',
// // target: 'current',
// // view_type : 'form',
// // view_mode : 'form',
// // flags: {'form': {'action_buttons': true, 'options': {'mode': 'edit'}}}
// // });
// // return {
// // 'type': 'ir.actions.client',
// // 'tag': 'reload',
// // }
// }
// });
// }