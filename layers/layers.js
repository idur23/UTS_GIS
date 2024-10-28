var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> BANGSRI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> BENDO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> BENDOGERIT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> BENDOWULUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> BLITAR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> GEDOG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> JATINOM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> JEDING<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> JIWUT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> KALIPUCUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> KARANGSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> KARANGTENGAH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> KAUMAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> KEPANJEN KIDUL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> KEPANJEN LOR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> KLAMPOK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> KUNINGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> MINGGIRSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> NGADIREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> PAKUNDEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> PAPUNGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> PLOSOARANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> PLOSOKEREP<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> POJOK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> PURWOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> REMBANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> SANAN KULON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> SANAN WETAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> SENTUL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> SUKOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> SUMBER<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> SUMBEREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> TANGGUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> TLUMPU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> TULISKRIYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> TURI<br />'
        });
var format_LineJalan_2 = new ol.format.GeoJSON();
var features_LineJalan_2 = format_LineJalan_2.readFeatures(json_LineJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineJalan_2.addFeatures(features_LineJalan_2);
var lyr_LineJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineJalan_2, 
                style: style_LineJalan_2,
                popuplayertitle: "Line Jalan",
                interactive: true,
                title: '<img src="styles/legend/LineJalan_2.png" /> Line Jalan'
            });
var format_TempatIbadahBlitar_3 = new ol.format.GeoJSON();
var features_TempatIbadahBlitar_3 = format_TempatIbadahBlitar_3.readFeatures(json_TempatIbadahBlitar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadahBlitar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadahBlitar_3.addFeatures(features_TempatIbadahBlitar_3);
var lyr_TempatIbadahBlitar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadahBlitar_3, 
                style: style_TempatIbadahBlitar_3,
                popuplayertitle: "Tempat Ibadah Blitar",
                interactive: true,
    title: 'Tempat Ibadah Blitar<br />\
    <img src="styles/legend/TempatIbadahBlitar_3_0.png" /> buddhist<br />\
    <img src="styles/legend/TempatIbadahBlitar_3_1.png" /> kristen<br />\
    <img src="styles/legend/TempatIbadahBlitar_3_2.png" /> muslim<br />'
        });
var format_LineSungai_4 = new ol.format.GeoJSON();
var features_LineSungai_4 = format_LineSungai_4.readFeatures(json_LineSungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineSungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineSungai_4.addFeatures(features_LineSungai_4);
var lyr_LineSungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineSungai_4, 
                style: style_LineSungai_4,
                popuplayertitle: "Line Sungai",
                interactive: true,
                title: '<img src="styles/legend/LineSungai_4.png" /> Line Sungai'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_LineJalan_2.setVisible(true);lyr_TempatIbadahBlitar_3.setVisible(true);lyr_LineSungai_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_LineJalan_2,lyr_TempatIbadahBlitar_3,lyr_LineSungai_4];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'Desa': 'Desa', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', });
lyr_LineJalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'REMARK': 'REMARK', });
lyr_TempatIbadahBlitar_3.set('fieldAliases', {'religion': 'religion', 'building': 'building', 'name': 'name', });
lyr_LineSungai_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'Desa': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_LineJalan_2.set('fieldImages', {'NAMRJL': '', 'REMARK': '', });
lyr_TempatIbadahBlitar_3.set('fieldImages', {'religion': '', 'building': '', 'name': '', });
lyr_LineSungai_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'Desa': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kota': 'inline label - always visible', 'Provinsi': 'inline label - always visible', });
lyr_LineJalan_2.set('fieldLabels', {'NAMRJL': 'hidden field', 'REMARK': 'hidden field', });
lyr_TempatIbadahBlitar_3.set('fieldLabels', {'religion': 'inline label - always visible', 'building': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_LineSungai_4.set('fieldLabels', {'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', });
lyr_LineSungai_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});