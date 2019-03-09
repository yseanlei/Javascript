//add table to web page
function insert_table(data) {
data.forEach((ufoinfo) =>{
    var tablerow=d3.select("tbody").append("tr")
    var datetime=tablerow.append("td").text(ufoinfo.datetime)
    tablerow.append("td").text(ufoinfo.city)
    tablerow.append("td").text(ufoinfo.state)
    tablerow.append("td").text(ufoinfo.country)
    tablerow.append("td").text(ufoinfo.shape)
    tablerow.append("td").text(ufoinfo.durationMinutes)
    tablerow.append("td").text(ufoinfo.comments)})}

insert_table(data);

// create a filter event
function delete_table(){
    d3.selectAll("tr").remove();
}
var inputfield=d3.select("#datetime");
inputfield.on("change",function(){
    delete_table();
    var newtext=d3.event.target.value;
    var date_filter=data.filter(ufoinfo => ufoinfo.datetime=newtext);
    insert_table(date_filter);})
