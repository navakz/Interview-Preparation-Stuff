function getServerData(url) {
    return JSON.parse($.ajax({
        type: 'GET',
        url: 'http://localhost:8089/myzone/miramar/' + url,
        dataType: 'json',
        global: false,
        async: false,
        success: function(data) {
            return data;
        }
    }).responseText);
}

function getMicroZoneDBData(gid) {
    return JSON.parse($.ajax({
        type: 'GET',
        url: 'http://localhost:8089/myzone/microzones/' + gid,
        dataType: 'json',
        global: false,
        async: false,
        success: function(data) {
            return data;
        }
    }).responseText);
}

function getMiramarZoneData(gid) {
    return JSON.parse($.ajax({
        type: 'GET',
        url: 'http://localhost:8089/myzone/getfeature/' + gid,
        dataType: 'json',
        global: false,
        async: false,
        success: function(data) {
            return data;
        }
    }).responseText);
}

function getMicroZoneAddressData() {
    return JSON.parse($.ajax({
        type: 'GET',
        url: 'http://localhost:8089/myzone/address',
        dataType: 'json',
        global: false,
        async: false,
        success: function(data) {
            return data;
        }
    }).responseText);
}

function getBBoxMicroZones(x1, y1, x2, y2, code) {
    return JSON.parse($.ajax({
        type: 'GET',
        url: 'http://localhost:8089/myzone/getbboxmicrozones/' + x1 + '/' + y1 + '/' + x2 + '/' + y2 + '/' + code,
        dataType: 'json',
        global: false,
        async: false,
        success: function(data) {
            return data;
        }
    }).responseText);
}