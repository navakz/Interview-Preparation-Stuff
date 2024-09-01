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