/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.barang.Editjurusan', {
    extend: 'Ext.form.Panel',
    xtype: 'Edtjurusan',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'Inventori.view.main.MainController',
        'Inventori.view.main.MainModel'

    ],
    controller: 'main',
    viewModel: 'main',
    width: 300,
            height: 440,
            scrollable: true,
    shadow: true,
    cls: 'demo-solid-background',    
    id: 'ejurusanfrm',
    items:[{
            xtype: 'fieldset',
            id: 'edtjurusan',
            title: 'Edit Jurusan',

            default:{
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'id_jurusane',
                    name: 'id_jurusane',
                    hidden: true     
                },
                {
                    xtype: 'textfield',
                    id: 'old_namaj',
                    name: 'old_namaj',
                    hidden: true     
                },
                {
                    xtype: 'textfield',
                    id: 'nama_jurusane',
                    name: 'nama_jurusane',
                    label: 'Nama Jurusan',
                    placeHolder: 'Nama Jurusan',
                    autoCapitalize: true,
                },        
                {
                    docked: 'bottom',
                    defaults: {
                    xtype: 'button',
                    style: 'margin: 1em',
                    flex: 1
                    },
                    items:[
                    {
                        xtype: 'button',
                        text: 'OK',
                        ui: 'action',
                        handler: 'editJurusan'
                    }
                    ,{
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('ejurusanfrm').reset();
                        }

                    }
                    
                    ]
                }
                


                    ]
    }]
    
});