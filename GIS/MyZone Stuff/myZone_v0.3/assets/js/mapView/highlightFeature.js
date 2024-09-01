function resizeModal() {
    $('.modal-body').height('150px');
    $('.modal-dialog').width('400px');
}

function highlightFeature(e) {
    layer_Miramar.resetStyle(e.layer);
    boundsArray = [];
    if (rectangularArea != undefined) { map.removeLayer(rectangularArea); } else {}
    highlightLayer = e.target;
    console.log(highlightLayer);
    if (selectedZone != undefined) {
        selectedZone.remove();
        //moreBtn.remove();
        //removeZoneProperties();
    }
    featureProperty = e.target.feature.properties;

    if (e.target.feature.geometry.type === 'LineString') {
        highlightLayer.setStyle({
            color: '#ffff00',
        });
    } else {
        highlightLayer.setStyle({
            color: '#ffff00',
            weight: 6
        });
    }
    selectedZone = L.control.custom({
        position: 'topleft',
        content: '<div class="input-group">' +
            '    <button class="btn btn-secondary active dropdown-toggle" type="button" data-toggle="dropdown">' + featureProperty['zonedesc'] +
            '    <span class="caret"></span></button>' +
            '        <ul class="dropdown-menu" style="z-index:100001"><li><a href="#">' + featureProperty['zonedesc'] + '</a></li></ul>' +
            '</div>',
        classes: '',
        style: {
            position: 'absolute',
            left: '550px',
            top: '0px',
            width: '200px',
        },
    })
    selectedZone.addTo(map);
}

function graphics() {
    $('.modal-title').html('Graphics');
    $('.modal-body').empty();
    $('.modal-body').height('100%');
    $('.modal-dialog').width('100%');
    //var imgSrc = '<img src="B1.png" />';
    modalBodyGraphics = '';
    if (boundsArray.length > 0) {
        for (var i in boundsArray) {
            modalBodyGraphics += '<br/><b>' + boundsArray[i] + '</b>&nbsp:<br/>';
            modalBodyGraphics += '<br/><img src="/images/Graphics/' + boundsArray[i] + '.png" style="width:100%;height:100%;" /><br/><br/>';
        }

    } else {
        modalBodyGraphics += '<br/><b>' + featureProperty['zonecode'] + '</b>&nbsp:<br/>';
        modalBodyGraphics += '<br/><img src="/images/Graphics/' + featureProperty['zonecode'] + '.png" style="width:100%;height:100%;" /><br/><br/>';
    }

    $('.modal-body').html(modalBodyGraphics);
}

function accessoryUses() {
    $('.modal-title').html('Accessory Uses');
    $('.modal-body').empty();
    $('.modal-body').height('70%');
    $('.modal-dialog').width('70%');
    accessoryData = '';
    var isRM = false,
        isExcludingRuralEstateDist = false;
    var rMarr = ["RM1", "RM2", "RM3", "RM4"];
    var excludingRuralEstateDistArr = ["RS1", "RS2", "RS3", "RS4", "RS5", "RS6", "RS7", "RS8", "PUD", "T", "CNS", "OS", "CR", "CF", "U", "B1", "B2", "B3", "OP", "EC", "PID", "TND", "MH", "ML"];
    var availableRMZones = [],
        availabaleZonesExcludingREnD = [];
    if (boundsArray.length > 0) {
        for (var i in boundsArray) {
            if (rMarr.indexOf(boundsArray[i].replace("-", ""))) {
                isRM = true;
                availableRMZones.push(boundsArray[i]);
            }
            if (excludingRuralEstateDistArr.indexOf(boundsArray[i].replace("-", ""))) {
                isExcludingRuralEstateDist = true;
                availabaleZonesExcludingREnD.push(boundsArray[i]);
            }
        }

    } else {}
    accessoryUse.map((e1) => {
        if (isRM) {
            if (e1['condition_1'] == 'Only in RM zoning districts' || e1['condition_2'] == 'Only in RM zoning districts' || e1['condition_3'] == 'Only in RM zoning districts') {
                accessoryData += '<br/><b>Selected Zones : ' + availableRMZones.toString() + '</b><br/>';
                accessoryData += '<b> Accessory structures : </b>' + e1['accessory_structures'] + '<br/>';
                accessoryData += '<b> Area Square Feet : </b>' + e1['area_square_feet'] + '<br/>';
                accessoryData += '<b> Specifications : </b>' + e1['specifications'] + '<br/>';
                accessoryData += '<b> Side Setback : </b>' + e1['side_setback_feet'] + '&nbsp;feet<br/>';
                accessoryData += '<b> Rear Setback : </b>' + e1['rear_setback_feet'] + '&nbsp;feet<br/>';
                accessoryData += '<b> Prohibited : </b>' + e1['prohibited'] + '<br/>';
            }
        }
        if (isExcludingRuralEstateDist) {
            if (e1['condition_1'] == 'Except in Rural and Estate districts' || e1['condition_2'] == 'Except in Rural and Estate districts' || e1['condition_3'] == 'Except in Rural and Estate districts') {
                accessoryData += '<br/><b> Selected Zones : ' + availabaleZonesExcludingREnD.toString() + '</b><br/>';
                accessoryData += '<b> Accessory structures : </b>' + e1['accessory_structures'] + '<br/>';
                accessoryData += '<b> Area Square Feet : </b>' + e1['area_square_feet'] + '<br/>';
                accessoryData += '<b> Specifications : </b>' + e1['specifications'] + '<br/>';
                accessoryData += '<b> Side Setback : </b>' + e1['side_setback_feet'] + '&nbsp;feet<br/>';
                accessoryData += '<b> Rear Setback : </b>' + e1['rear_setback_feet'] + '&nbsp;feet<br/>';
                accessoryData += '<b> Prohibited : </b>' + e1['prohibited'] + '<br/>';
            }
        }

    });
    $('.modal-body').html(accessoryData);
}

function zoning() {
    resizeModal();
    zoningData = '';
    $('.modal-title').html('Zoning');
    $('.modal-body').empty();
    zoneDistrictDef.map((e1) => {
        if (boundsArray.length > 0) {
            for (var i in boundsArray) {
                if (boundsArray[i].replace("-", "") === e1['zoneid'].replace("-", "")) {
                    zoningData += '<br/><b>' + e1['zoneid'] + '</b><br/>';
                    zoningData += '-&nbsp;' + e1['zone_name'];
                }
            }

        } else {
            if (featureProperty['zonecode'] != undefined) {
                if (featureProperty['zonecode'].replace("-", "") === e1['zoneid'].replace("-", "")) {
                    zoningData += '<br/><b>' + e1['zoneid'] + '</b><br/>';
                    zoningData += '-&nbsp;' + e1['zone_name'];
                } else {

                }
            }
        }
    });
    zoningData += '<br/><br/><br/><button class="btn btn-primary">More</button>';
    var modalBodyData = zoningData;

    $('.modal-body').html(modalBodyData);
}

function permittedUsesLogic(e1) {

    commercialNindustrialUse.map((e2) => {
        if (e2[e1.trim()] == 1) {
            permittedDataStr += '- &nbsp;' + e2['use'] + '<br/>';
        } else {

        }
    });
    civicNrecreationalUse.map((e3) => {
        if (e3[e1.trim()] == 1) {
            permittedDataStr += '- &nbsp;' + e3['use'] + '<br/>';
        } else {

        }
    });
}

function permittedUses(lbls) {
    resizeModal();
    $('.modal-title').html('Permitted Uses');
    $('.modal-body').empty();
    permittedDataStr = '';
    permittedProhibitedArr.map((e1) => {
        if (boundsArray.length > 0) {
            for (var i = 0; i < boundsArray.length; i++) {
                if (boundsArray[i].toLowerCase().replace("-", "") === e1.replace("-", "")) {
                    permittedDataStr += '<br/><b>' + boundsArray[i] + '</b><br/>';
                    permittedUsesLogic(e1);
                }
            }

        } else {
            if (featureProperty['zonecode'] != undefined) {
                if (featureProperty['zonecode'].toLowerCase().replace("-", "") === e1.replace("-", "")) {
                    permittedDataStr += '<br/><b>' + featureProperty['zonecode'] + '</b><br/>';
                    permittedUsesLogic(e1);
                }
            }
        }
    });
    $('.modal-body').html(permittedDataStr);
}

function prohibitedUsesLogic(e1) {

    commercialNindustrialUse.map((e2) => {
        if (e2[e1.trim()] == 0) {
            prohibitedDataStr += '- &nbsp;' + e2['use'] + '<br/>';
        } else {

        }
    });
    civicNrecreationalUse.map((e3) => {
        if (e3[e1.trim()] == 0) {
            prohibitedDataStr += '- &nbsp;' + e3['use'] + '<br/>';
        } else {

        }
    });
}

function prohibitedUses() {
    resizeModal();
    $('.modal-title').html('Prohibited Uses');
    $('.modal-body').empty();
    prohibitedDataStr = '';
    permittedProhibitedArr.map((e1) => {
        if (boundsArray.length > 0) {
            for (var i in boundsArray) {
                if (boundsArray[i].toLowerCase().replace("-", "") === e1.replace("-", "")) {
                    prohibitedDataStr += '<br/><b>' + boundsArray[i] + '</b><br/>';
                    prohibitedUsesLogic(e1);
                }
            }

        } else {
            if (featureProperty['zonecode'] != undefined) {
                if (featureProperty['zonecode'].toLowerCase().replace("-", "") === e1.replace("-", "")) {
                    prohibitedDataStr += '<br/><b>' + featureProperty['zonecode'] + '</b><br/>';
                    prohibitedUsesLogic(e1);
                }
            }
        }
    });
    $('.modal-body').html(prohibitedDataStr);
}

function buildingHeightLimit() {
    resizeModal();
    bldingHghtLmtData = '';
    $('.modal-title').html('Building Height Limit');
    $('.modal-body').empty();
    zoneDistrictPDR.map((e1) => {
        if (boundsArray.length > 0) {
            for (var i in boundsArray) {
                if (boundsArray[i].replace("-", "") === e1['munzoneid'].replace("-", "")) {
                    bldingHghtLmtData += '<br/><b>' + e1['munzoneid'] + '</b><br/>';
                    bldingHghtLmtData += '&nbsp;-&nbsp;' + 'Max Height :' + '&nbsp;' + e1['max_height'] + '&nbsp;feet' + '<br/>';
                }
            }

        } else {
            if (featureProperty['zonecode'] != undefined) {
                if (featureProperty['zonecode'].replace("-", "") === e1['munzoneid'].replace("-", "")) {
                    bldingHghtLmtData += '<br/><b>' + featureProperty['zonecode'] + '</b><br/>';
                    bldingHghtLmtData = '&nbsp;-&nbsp;' + 'Max Height :' + '&nbsp;' + e1['max_height'] + '&nbsp;feet';
                } else {

                }
            }
        }
    });
    zoneDistrictPDR_RM.map((e1) => {

        if (boundsArray.length > 0) {
            for (var i in boundsArray) {
                if (boundsArray[i].replace("-", "") === e1['zoneid'].replace("-", "")) {
                    bldingHghtLmtData += '<br/><b>' + e1['zoneid'] + '</b><br/>';
                    bldingHghtLmtData += '&nbsp;-&nbsp;' + 'Max Height :' + '&nbsp;' + e1['max_height'] + '&nbsp;feet' + '<br/>';
                }
            }

        } else {
            if (featureProperty['zonecode'] != undefined) {
                if (featureProperty['zonecode'].replace("-", "") === e1['zoneid'].replace("-", "")) {
                    bldingHghtLmtData += '<br/><b>' + featureProperty['zonecode'] + '</b><br/>';
                    bldingHghtLmtData = '&nbsp;-&nbsp;' + 'Max Height :' + '&nbsp;' + e1['max_height'] + '&nbsp;feet';
                } else {

                }
            }
        }
    });
    //console.log(bldingHghtLmtData.toLowerCase());
    var modalBodyData = bldingHghtLmtData;

    $('.modal-body').html(modalBodyData);
}

function setBacks() {
    resizeModal();
    setbacksDataStr = '';
    $('.modal-title').html('Setbacks');
    $('.modal-body').empty();
    zoneDistrictPDR.map((e1) => {
        if (boundsArray.length > 0) {
            for (var i in boundsArray) {
                if (boundsArray[i].replace("-", "") === e1['munzoneid'].replace("-", "")) {
                    setbacksDataStr += '<br/><b>' + e1['munzoneid'] + '</b><br/>';
                    setbacksDataStr += '- &nbsp; Front : &nbsp;' + e1['front_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Side : &nbsp;' + e1['side_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Rear : &nbsp;' + e1['rear_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Water : &nbsp;' + e1['water_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Corner : &nbsp;' + e1['corner_setback_a'] + '&nbsp;feet<br/>';
                }
            }

        } else {
            if (featureProperty['zonecode'] != undefined) {
                if (featureProperty['zonecode'].replace("-", "") === e1['munzoneid'].replace("-", "")) {
                    setbacksDataStr += '<br/><b>' + e1['munzoneid'] + '</b><br/>';
                    setbacksDataStr += '- &nbsp; Front : &nbsp;' + e1['front_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Side : &nbsp;' + e1['side_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Rear : &nbsp;' + e1['rear_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Water : &nbsp;' + e1['water_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Corner : &nbsp;' + e1['corner_setback_a'] + '&nbsp;feet<br/>';

                } else {

                }
            }
        }
    });
    zoneDistrictPDR_RM.map((e1) => {
        if (boundsArray.length > 0) {
            for (var i in boundsArray) {
                if (boundsArray[i].replace("-", "") === e1['zoneid'].replace("-", "")) {
                    setbacksDataStr += '<br/><b>' + e1['zoneid'] + '</b><br/>'
                    setbacksDataStr += '- &nbsp; Front : &nbsp;' + e1['front_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Side : &nbsp;' + e1['side_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Rear : &nbsp;' + e1['rear_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Water : &nbsp;' + e1['water_setback_a'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Corner : &nbsp;' + e1['corner_setback_a'] + '&nbsp;feet<br/>';
                }
            }

        } else {
            if (featureProperty['zonecode'] != undefined) {
                if (featureProperty['zonecode'].replace("-", "") === e1['zoneid'].replace("-", "")) {
                    setbacksDataStr += '<br/><b>' + e1['zoneid'] + '</b><br/>'
                    setbacksDataStr += '- &nbsp; Front : &nbsp;' + e1['front_setback'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Side : &nbsp;' + e1['side_setback'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Rear : &nbsp;' + e1['rear_setback'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Water : &nbsp;' + e1['water_setback'] + '&nbsp;feet<br/>';
                    setbacksDataStr += '- &nbsp; Corner : &nbsp;' + e1['corner_setback'] + '&nbsp;feet<br/>';

                } else {

                }
            }
        }
    });
    var modalBodyData = 'The Selected Property Setbacks requirements are as follows :<br/>' + setbacksDataStr;

    $('.modal-body').html(modalBodyData);
}

function lotCoverage() {
    resizeModal();
    lotCoverageData = '';
    $('.modal-title').html('Lot Coverage');
    $('.modal-body').empty();
    zoneDistrictPDR.map((e1) => {
        if (boundsArray.length > 0) {
            for (var i in boundsArray) {
                if (boundsArray[i].replace("-", "") === e1['munzoneid'].replace("-", "")) {
                    lotCoverageData += '<br/><b>' + e1['munzoneid'] + '</b><br/>'
                    lotCoverageData += '- &nbsp; Minimum Lot Size : &nbsp;' + e1['min_lot_size'] + '&nbsp;feet<br/>';
                    lotCoverageData += '- &nbsp; Minimum Lot Width : &nbsp;' + e1['min_lot_width'] + '&nbsp;feet<br/>';
                }
            }

        } else {
            if (featureProperty['zonecode'] != undefined) {
                if (featureProperty['zonecode'].replace("-", "") === e1['munzoneid'].replace("-", "")) {
                    lotCoverageData += '<br/><b>' + e1['munzoneid'] + '</b><br/>'
                    lotCoverageData += '- &nbsp; Minimum Lot Size : &nbsp;' + e1['min_lot_size'] + '&nbsp;feet<br/>';
                    lotCoverageData += '- &nbsp; Minimum Lot Width : &nbsp;' + e1['min_lot_width'] + '&nbsp;feet<br/>';
                } else {

                }
            }
        }
    });
    zoneDistrictPDR_RM.map((e1) => {
        if (boundsArray.length > 0) {
            for (var i in boundsArray) {
                if (boundsArray[i].replace("-", "") === e1['zoneid'].replace("-", "")) {
                    lotCoverageData += '<br/><b>' + e1['zoneid'] + '</b><br/>'
                    lotCoverageData += '- &nbsp; Minimum Lot Size : &nbsp;' + e1['min_lot_size'] + '&nbsp;feet<br/>';
                    lotCoverageData += '- &nbsp; Minimum Lot Width : &nbsp;' + e1['min_lot_width'] + '&nbsp;feet<br/>';
                }
            }

        } else {
            if (featureProperty['zonecode'] != undefined) {
                if (featureProperty['zonecode'].replace("-", "") === e1['zoneid'].replace("-", "")) {
                    lotCoverageData += '<br/><b>' + e1['zoneid'] + '</b><br/>'
                    lotCoverageData += '- &nbsp; Minimum Lot Size : &nbsp;' + e1['min_lot_size'] + '&nbsp;feet<br/>';
                    lotCoverageData += '- &nbsp; Minimum Lot Width : &nbsp;' + e1['min_lot_width'] + '&nbsp;feet<br/>';
                } else {

                }
            }
        }
    });
    var modalBodyData = 'The Lot Coverage requirements are as follows : <br/>' + '&nbsp;' + lotCoverageData;

    $('.modal-body').html(modalBodyData);
}