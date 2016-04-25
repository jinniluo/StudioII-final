var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('Newyork-Spring').clientWidth,
    height = document.getElementById('Newyork-Spring').clientHeight;


queue()
    .defer(d3.json,"./dataScripts/flickr-node/BjSpring.json")
    .defer(d3.json,"./dataScripts/flickr-node/NycSpring.json")
    .defer(d3.json,"./dataScripts/flickr-node/NySummer.json")
    .defer(d3.json,"./dataScripts/flickr-node/BjSummer.json")
    .defer(d3.json,"./dataScripts/flickr-node/NyFall.json")
    .defer(d3.json,"./dataScripts/flickr-node/BjFall.json")
    .defer(d3.json,"./dataScripts/flickr-node/NyWinter.json")
    .defer(d3.json,"./dataScripts/flickr-node/BjWinter.json")
    .await(dataLoaded);


function dataLoaded(err, BjSpring,NycSpring,NySummer,BjSummer,NyFall,BjFall,NyWinter,BjWinter){


    var BS = d3.select('#Beijing-Spring').selectAll(".picture").append("svg").data(BjSpring);
    //var BS_entire = BS.enter().append('img').attr('src', function(d){
    //    return d.fileNames;
    //}).attr('width', '1').attr('height', '1')
    //
    BS.enter().append("img")
      .attr("src", function(d) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
      .attr('width', '10%')
      .attr('height', '10%');

    //var BS_entire = BS.exit().remove();
    //
    //// updates
    //BS.transition().duration(2000).attr('width', '10%').attr('height', '10%');


    console.log(NycSpring);
    var NyS = d3.select('#Newyork-Spring').selectAll(".picture").data(NycSpring);
    NyS.enter().append("img")
        .attr("src", function(d) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
        .attr('width', '10%')
        .attr('height', '10%');

    console.log(NySummer);
    var NySu = d3.select('#Newyork-Summer').selectAll(".picture").data(NySummer);
    NySu.enter().append("img")
        .attr("src", function(d) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
        .attr('width', '10%')
        .attr('height', '10%');

    console.log(BjSummer);
    var BjSu = d3.select('#Beijing-Summer').selectAll(".picture").append("svg").data(BjSummer);
    BjSu.enter().append("img")
        .attr("src", function(d) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
        .attr('width', '10%')
        .attr('height', '10%');


    console.log(NyFall);
    var NyFall = d3.select('#Newyork-Fall').selectAll(".picture").data(NyFall);
    NyFall.enter().append("img")
        .attr("src", function(d) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
        .attr('width', '10%')
        .attr('height', '10%');


    var BjFall = d3.select('#Beijing-Fall').selectAll(".picture").data(BjFall);
    BjFall
        .enter().append("img")
        .attr("src", function(d) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
        .attr('width', '10%')
        .attr('height', '10%');




    console.log(NyFall);
    //var NyWinter = d3.select('#Newyork-Winter').selectAll(".picture").data(NyWinter);
    //NyWinter
    //    .enter().append("img")
    //    .attr("src", function(d) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
    //    .attr('width', '10%')
    //    .attr('height', '10%');
    //console.log("1",NyWinter);

    var NyWinter =d3.select("#Newyork-Winter")
                    .append("svg")
                    .attr("width",200)
                    .attr("height",200)
                    .selectAll(".picture")
                    .data(NyWinter);


        NyWinter
            .enter()
            .append("rect")
            .attr("width","8%")
            .attr("height","8%")
            .attr("x",function(d, i){return 20*(i%10);})
            .attr("y", function(d,i){return   20 * Math.floor(i / 10)})
            .attr("fill",function(d,i){return getImageColor(d.colors[0].r,d.colors[0].g,d.colors[0].b);

            });






        ////.attr("src", function(d) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
        //.attr("x",function(_, i){
        //    5
        //    //return 10*parseInt(i/10);
        //})
        //.attr("y", function(_,i){
        //    5
        //    //return 10*parseInt(i/10);
        //})
        //.attr("style","red")
        ////.attr("style", function(d) { return "fill("+ d.color[0].r+","+ d.color[0].g+","+ d.color[0].b+")"; })
        //.attr('width', 10)
        //.attr('height', 10);



   // var BjWinter = d3.select('#Beijing-Winter').selectAll(".picture").append("svg").data(BjWinter);
   //console.log("bjwinter",BjWinter);
   //
   // BjWinter.enter().append("rect")
   //     //.attr("src", function(d) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
   //     .attr("x",function(){
   //         return 10;
   //     })
   //     .attr('width', '10%')
   //     .attr('height', '10%');


}

//function updateData(){
//    var svg=d3.select('.container').append("svg");
//    svg.append("rect").attr("height",500).attr("width",500);
//}




function getImageUrl(farm, server, image, secret) {
    return "https://farm"+farm+".staticflickr.com/"+server+"/"+image+"_"+secret+"_m.jpg";
}


function getImageColor(r,g,b){
    return d3.rgb(r,g,b);
}

//function parse(d){
//
//    return {
//        fileNames: d.file_names,
//    }
//}



