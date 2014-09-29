//file connecting the Data Portal API //$ Call for JQuery
$.getJSON('http://data.cityofchicago.org/resource/5cq6-qygt.json', function(Bstops) {
    

    $.each(Bstops, function(i, Bstop){
        $('#Bstoplist').append(generateLStopLink(Bstop));
    
});
    
    $('#Bstoplist').listview('refresh');
    
});

function generateBStopLink(Bstop){
    
    return'<li><a href="javascript:void(0)'
            + '"onclick="goToStopDetailPage(\''
            + Bstop.stop_name
            + '\', \''
            + Bstop.station_descriptive_name + '\")">'
            + Bstop.stop_name
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