# -*- coding: utf-8 -*-
from openerp import http

# class WarehouseUi1(http.Controller):
#     @http.route('/warehouse_ui_1/warehouse_ui_1/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/warehouse_ui_1/warehouse_ui_1/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('warehouse_ui_1.listing', {
#             'root': '/warehouse_ui_1/warehouse_ui_1',
#             'objects': http.request.env['warehouse_ui_1.warehouse_ui_1'].search([]),
#         })

#     @http.route('/warehouse_ui_1/warehouse_ui_1/objects/<model("warehouse_ui_1.warehouse_ui_1"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('warehouse_ui_1.object', {
#             'object': obj
#         })