map.on({
    'areaselected': (evt) => {
            if (rectangularArea != undefined) {
                rectangularArea.remove();
            }
            var bounds = evt.bounds.toBBoxString().split(',');
            areaSelectedBounds = [
                [parseFloat(bounds[1]), parseFloat(bounds[0])],
                [parseFloat(bounds[3]), parseFloat(bounds[2])]
            ];
            rectangularArea = L.rectangle(areaSelectedBounds, {
                opacity: 1,
                color: 'rgba(250,38,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 5,
                fill: false
            });
            rectangularArea.addTo(map);
            L.Util.requestAnimFrame(() => {
                map.eachLayer((geojsonLayer) => {

                    if (geojsonLayer instanceof L.Path) {
                        console.log(geojsonLayer);
                        if (evt.bounds.contains(geojsonLayer.getBounds())) {
                            if (geojsonLayer.feature != undefined) {
                                var ele = geojsonLayer.feature['properties']['zonecode'];
                                if (boundsArray.indexOf(ele) == -1) {
                                    boundsArray.push(ele);
                                } else {}

                            } else {}

                        } else {}

                        geojsonLayer.setStyle({
                            fillOpacity: evt.bounds.contains(geojsonLayer.getBounds()) ? 0.8 : 0.1
                        });
                    }
                });
            });
        }
        //,'areaselecttoggled': updateButton
});