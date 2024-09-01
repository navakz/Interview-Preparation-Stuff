map.on({
    'areaselected': (evt) => {
        if (rectangularArea != undefined) {
            rectangularArea.remove();
        }
        ddAreaSelectedBtn = L.control.custom({
            position: 'topleft',
            content: '<div class="input-group">' +
                '    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Area Selected' +
                '    <span class="caret"></span></button>' +
                '        <ul class="dropdown-menu"><li><a href="#" onclick="parcelDetails();">Parcel Details</a></li>' +
                '                                  <li><a href="#" onclick="exprtDetails();">Export Details</a></li>' +
                '        </ul>' +
                '     </div>',
            classes: '',
            style: {
                position: 'absolute',
                left: '500px',
                top: '0px'
            },
        }).addTo(map);
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
        sessionStorage.setItem('multiSearch', 'y');
        var questionArr = ["Where can i find residential houses ?",
            "Where can i find Apartments ?",
            "Where can i open Offices ?",
            "Where can i find employment parks ?",
            "Where can i find recreation open space ?",
            "Where can i find recreation commercial space ?",
            "Where can i find business centres ?"
        ]
        autocomplete(document.getElementById("myInput"), questionArr);
        sessionStorage.setItem('bBoxCoords', evt.bounds.toBBoxString());
        L.Util.requestAnimFrame(() => {
            map.eachLayer((geojsonLayer) => {

                if (geojsonLayer instanceof L.Path) {

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
        setTimeout(btnUsesTbl, 3000);
    }

    //,'areaselecttoggled': updateButton
});

function btnUsesTbl() {
    var getModalData = '<table id="tableData" border="1" cellpadding="5" cellspacing="0">' +
        '<tr><th>Permitted Uses</th><th>Prohibited Uses</th><th>Zoning</th><th>Accessory Use</th><th>Graphics</th><th>Building Height Limit</th><th>Setbacks</th><th>Lot Coverage</th></tr>';
    permittedUses();
    getModalData += '<tr><td>' + $('.modal-body').text() + '</td>';
    prohibitedUses();
    getModalData += '<td>' + $('.modal-body').text() + '</td>';
    zoning();
    getModalData += '<td>' + $('.modal-body').text() + '</td>';
    accessoryUses();
    getModalData += '<td>' + $('.modal-body').text() + '</td>';
    graphics();
    getModalData += '<td>' + $('.modal-body').text() + '</td>';
    buildingHeightLimit();
    getModalData += '<td>' + $('.modal-body').text() + '</td>';
    setBacks();
    getModalData += '<td>' + $('.modal-body').text() + '</td>';
    lotCoverage();
    getModalData += '<td>' + $('.modal-body').text() + '</td>';
    getModalData += '</tr></table>';
    $('#parcelDetailsTbl').append(getModalData);

}

function exprtDetails() {
    htmlTableToExcel('tableData', filename = '');
}

var htmlTableToExcel = function(tableId, fileName = '') {
    var excelFileName = 'excel_table_data';
    var TableDataType = 'application/vnd.ms-excel';
    var selectTable = document.getElementById(tableId);
    var htmlTable = selectTable.outerHTML.replace(/ /g, '%20');

    filename = filename ? filename + '.xls' : excelFileName + '.xls';
    var excelFileURL = document.createElement("a");
    document.body.appendChild(excelFileURL);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', htmlTable], {
            type: TableDataType
        });
        navigator.msSaveOrOpenBlob(blob, fileName);
    } else {

        excelFileURL.href = 'data:' + TableDataType + ', ' + htmlTable;
        excelFileURL.download = fileName;
        excelFileURL.click();
    }
}