var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_interesthoods_pointsmerged_ass__merged_1 = new ol.format.GeoJSON();
var features_interesthoods_pointsmerged_ass__merged_1 = format_interesthoods_pointsmerged_ass__merged_1.readFeatures(json_interesthoods_pointsmerged_ass__merged_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_interesthoods_pointsmerged_ass__merged_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_interesthoods_pointsmerged_ass__merged_1.addFeatures(features_interesthoods_pointsmerged_ass__merged_1);
var lyr_interesthoods_pointsmerged_ass__merged_1 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_interesthoods_pointsmerged_ass__merged_1, 
                radius: 10 * 2,
                gradient: ['#ffea0a', '#ff1800'],
                blur: 15,
                shadow: 250,
                title: 'interesthoods_points — merged_ass__merged'
            });
var format_interest_hoodslocalareaboundary_2 = new ol.format.GeoJSON();
var features_interest_hoodslocalareaboundary_2 = format_interest_hoodslocalareaboundary_2.readFeatures(json_interest_hoodslocalareaboundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_interest_hoodslocalareaboundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_interest_hoodslocalareaboundary_2.addFeatures(features_interest_hoodslocalareaboundary_2);
var lyr_interest_hoodslocalareaboundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_interest_hoodslocalareaboundary_2, 
                style: style_interest_hoodslocalareaboundary_2,
                popuplayertitle: 'interest_hoods — localareaboundary',
                interactive: true,
                title: '<img src="styles/legend/interest_hoodslocalareaboundary_2.png" /> interest_hoods — localareaboundary'
            });
var format_parkspolygonrepresentation_3 = new ol.format.GeoJSON();
var features_parkspolygonrepresentation_3 = format_parkspolygonrepresentation_3.readFeatures(json_parkspolygonrepresentation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkspolygonrepresentation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkspolygonrepresentation_3.addFeatures(features_parkspolygonrepresentation_3);
var lyr_parkspolygonrepresentation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkspolygonrepresentation_3, 
                style: style_parkspolygonrepresentation_3,
                popuplayertitle: 'parks-polygon-representation',
                interactive: true,
                title: '<img src="styles/legend/parkspolygonrepresentation_3.png" /> parks-polygon-representation'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_interesthoods_pointsmerged_ass__merged_1.setVisible(true);lyr_interest_hoodslocalareaboundary_2.setVisible(true);lyr_parkspolygonrepresentation_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_interesthoods_pointsmerged_ass__merged_1,lyr_interest_hoodslocalareaboundary_2,lyr_parkspolygonrepresentation_3];
lyr_interest_hoodslocalareaboundary_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'geo_point_2d': 'geo_point_2d', });
lyr_parkspolygonrepresentation_3.set('fieldAliases', {'object_id': 'object_id', 'park_name': 'park_name', 'park_url': 'park_url', 'address': 'address', 'local_area': 'local_area', 'classification': 'classification', 'area_hectare': 'area_hectare', 'area': 'area', 'length': 'length', 'geo_point_2d': 'geo_point_2d', });
lyr_interest_hoodslocalareaboundary_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'geo_point_2d': 'KeyValue', });
lyr_parkspolygonrepresentation_3.set('fieldImages', {'object_id': 'Range', 'park_name': 'TextEdit', 'park_url': 'TextEdit', 'address': 'TextEdit', 'local_area': 'TextEdit', 'classification': 'TextEdit', 'area_hectare': 'TextEdit', 'area': 'TextEdit', 'length': 'TextEdit', 'geo_point_2d': 'KeyValue', });
lyr_interest_hoodslocalareaboundary_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'geo_point_2d': 'no label', });
lyr_parkspolygonrepresentation_3.set('fieldLabels', {'object_id': 'no label', 'park_name': 'no label', 'park_url': 'no label', 'address': 'no label', 'local_area': 'no label', 'classification': 'no label', 'area_hectare': 'no label', 'area': 'no label', 'length': 'no label', 'geo_point_2d': 'no label', });
lyr_parkspolygonrepresentation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});