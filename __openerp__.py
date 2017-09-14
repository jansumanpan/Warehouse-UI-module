# -*- coding: utf-8 -*-
{
    'name': "Warehouse UI",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "Your Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/openerp/addons/base/module/module_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','sale','stock','web_kanban', 'web'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'templates.xml',
        'stock_view.xml',
        'views/warehouse_ui.xml'
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo.xml',
    ],
     'qweb':  ['static/src/xml/warehouse_qweb.xml','static/src/xml/picking_override.xml'],
}

