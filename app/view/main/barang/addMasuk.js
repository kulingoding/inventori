Ext.define('Inventori.view.main.barang.addMasuk', {
    extend: 'Ext.form.Panel',
    xtype: 'Tbhmasuk',
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
        'Inventori.view.main.MainModel',
        'Inventori.store.Lisbarang',
        'Inventori.store.Lisbarang2'
    ],
      controller: 'main',
    viewModel: 'main',
    shadow: true,

    cls: 'demo-solid-background',
    id: 'tmasukfrm',
    items:[{
            xtype: 'fieldset',
            id: 'fieldset2',
            title: 'Tambah Barang Masuk',
            width: 300,
            height: 400,
            scrollable: true,
            default:{
                labelWidth: '35%'
            },
            items: [

                {
                    xtype: 'textfield',
                    id: 'id_barang',
                    name: 'id_barang',
                    hidden: true,
                    bind: '{baranglis.selection.id_barang}'
                },
                {
                    xtype: 'textfield',
                    id: 'namam',
                    name: 'namam',
                    hidden: true,
                    bind: '{baranglis.selection.nama_barang}',
                    listeners:{
                        change: function(){
                            Ext.getCmp('cari').setPlaceHolder(Ext.getCmp('namam').getValue());
                        }
                    }
                },
                {
                    xtype: 'selectfield',
                    id: 'jurusanm',
                    name: 'jurusanm',
                    label: 'Nama Jurusan',
                    displayField: 'nama_jurusan',
                    valueField: 'id_jurusan',
                    bind: { store: 'lisjurusan' }
                },
                {
                    xtype: 'textfield',
                    id: 'keterangan',
                    name: 'keterangan',
                    label: 'Keterangan',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    id: 'cari',
                    name: 'cari',
                    label: 'Nama Barang',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('cari').getValue();
                            Ext.getStore('lisbarang2').filter('nama_barang' , caris);
                        }
                    }   
                },
                {
                    xtype: 'textfield',
                    id: 'jml',
                    name: 'jml',
                    hidden: true,
                    bind: '{baranglis.selection.jumlah_barang}',
                    listeners: {
                        change: function(){
                        b = Ext.getCmp('jml').getValue();
                        
                        }
                    }
                },
                {
                    xtype: 'spinnerfield',
                    id: 'jumlahm',
                    name: 'jumlahm',
                    label: 'Jumlah',
                    ui: 'action',
                    minValue: 0,
                    maxValue: 9999,
                    clearable: true,
                    stepValue: 1,
                    cycle: true,
                    listeners: {
                        change: function(){
                           cek = Ext.getCmp('jumlahm').getValue();
                           cek1 = Ext.getCmp('id_barang').getValue();
                           if(cek != 0){
                            Ext.getCmp('ok').setDisabled(false);
                           }
                        }
                    }

                },
                {
                    width: 280,
                    height: 130,
                    xtype: 'list',
                    shadow: true,
                    scrollable: true,
                    reference: 'baranglis',
                    store: 'lisbarang2',
                    itemTpl: '{id_barang} : {nama_barang} -> {jumlah_barang}'
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
                        id: 'ok',
                        name: 'ok',
                        text: 'OK',
                        disabled: true,
                        ui: 'action',
                        handler: 'addMasuk'

                    },
                    {
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('tmasukfrm').reset();
                    }
                    }
                    ]
                }
                


                    ]
    }]
    
});