//add table to web page
function insert_table(data) {
data.forEach((ufoinfo) =>{
    var tablerow=d3.select("tbody").append("tr")
    tablerow.append("td").text(ufoinfo.datetime)
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
// var inputfield=d3.select("#datetime");
var filterbtn=d3.select("#filter-btn");

//inputfield.on("change",function(){
    // delete_table();
//var newtext=d3.select("#datetime").property("value");
    // var date_filter=data.filter(ufoinfo => ufoinfo.datetime=newtext);
    // insert_table(date_filter);})

function filter_data(){
    d3.event.preventDefault();
    delete_table();
    var newtext=d3.select("#datetime").property("value");
    var date_filter=data.filter(ufoinfo => ufoinfo.datetime===newtext);
        if (date_filter.length===0){
            d3.select("tbody").append("tr").text("No results found")}
        else{
            insert_table(date_filter);
        }
        }
    
filterbtn.on("click",filter_data);