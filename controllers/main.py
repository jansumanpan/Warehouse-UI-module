# -*- coding: utf-8 -*-
import werkzeug
import json

from openerp.addons.web import http
from openerp.addons.web.http import request

class WarehouseTabs(http.Controller):

    @http.route([
        '/warehouse/tab_data',
    ], type='http', auth="public", website=True)
    def tab_data(self, **post):
        values = {}
        wh_tabs = request.env['stock.warehouse'].sudo().search([],[])
        # values={'id':wh_tabs.id,'name':wh_tabs.name}
        for tab in wh_tabs:
            values.update({tab.id:{'name':tab.name}})
        return json.dumps(values)
