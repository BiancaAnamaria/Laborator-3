get_geo_position();
function on_success(position){
    document.getElementById("latitudine").innerHTML="Latitudine = " + position.coords.latitudine;
    document.getElementById("longitudine").innerHTML="Longitudine ="+ position.coords.longitudine;
    document.getElementById("acc").innerHTML="Accuracy ="+ position.coords.accuracy;
    document.getElementById("altitudine").innerHTML="Altitudine ="+ position.coords.altitudine;
    var latlon = position.coords.latitudine + "," + position.coords.longitudine;
}
function on_error(e)
{
    document.getElementById("text").innerHTML = e.message;
}
var geo_params={
    enableHighAccuracy:true,
    timeout:1000,
    maximumAge:0
};
function get_geo_position()
{
    var geo = navigatior.geolocation;
    geo.getCurrentPosition(on_success, on_error, geo_params)
}