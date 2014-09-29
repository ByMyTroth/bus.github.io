//file connecting the Data Portal API //$ Call for JQuery
$.getJSON('http://data.cityofchicago.org/resource/5cq6-qygt.json', function(bstops) {
    

    $.each(bstops, function(i, bstop){
        $('#bstoplist').append(generateLStopLink(bstop));
    
});
    
    $('#bstoplist').listview('refresh');
    
});

function generateBStopLink(bstop){
    
    return'<li><a href="javascript:void(0)'
            + '"onclick="goToStopDetailPage(\''
            + bstop.stop_name
            + '\', \''
            + bstop.station_descriptive_name + '\")">'
            + bstop.stop_name
            + '</a></li>';
}


function goToStopDetailPage(stopName){
    var stopPage = $("<div data-role='page' data-url=station><div data-role='header'><h1>"
                     + stopName + "</h1></div><div data-role='content'><h1>"
                     + stopName + "</h1></div><data-role='footer'><h4>"
                     + stopName + "</h4></div></div>");
    stopPage.appendTo($.mobile.pageContainer );
    
    $.mobile.changePage( stopPage );
}