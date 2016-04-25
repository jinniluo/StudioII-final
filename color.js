/**
 * Created by KiniLuo on 4/24/16.
 */

//set up the div element
var margin = {t: 50, r: 50, b: 50, l: 50};
var w = 205,
    h = 205;

//load data
queue()
    .defer(d3.json,"./dataScripts/flickr-node/BjSpring.json")
    .defer(d3.json,"./dataScripts/flickr-node/NySpring.json")
    .defer(d3.json,"./dataScripts/flickr-node/NySummer.json")
    .defer(d3.json,"./dataScripts/flickr-node/BjSummer.json")
    .defer(d3.json,"./dataScripts/flickr-node/NyFall.json")
    .defer(d3.json,"./dataScripts/flickr-node/BjFall.json")
    .defer(d3.json,"./dataScripts/flickr-node/NyWinter.json")
    .defer(d3.json,"./dataScripts/flickr-node/BjWinter.json")
    .await(dataLoaded);


//draw
function dataLoaded(err, BjSpring,NySpring,NySummer,BjSummer,NyFall,BjFall,NyWinter,BjWinter){

    var NewyorkSpring =d3.select("#Newyork-Spring")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .selectAll(".picture")
        .data(NySpring)
        .enter()
        .append("rect")
        .attr("width","8%")
        .attr("height","8%")
        .attr("x",function(d, i){return 17*(i%10);})
        .attr("y", function(d,i){return   17 * Math.floor(i / 10)})
        .attr("fill",function(d,i){return getImageColor(d.colors[2].r,d.colors[2].g,d.colors[2].b);})
        .call(attachTooltip1);


       var NewyorkSummer =d3.select("#Newyork-Summer")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .selectAll(".picture")
        .data(NySummer)
        .enter()
        .append("rect")
        .attr("width","8%")
        .attr("height","8%")
        .attr("x",function(d, i){return 17*(i%10);})
        .attr("y", function(d,i){return   17 * Math.floor(i / 10)})
        .attr("fill",function(d,i){return getImageColor(d.colors[2].r,d.colors[2].g,d.colors[2].b);})
        .call(attachTooltip2);


    var NewyorkFall =d3.select("#Newyork-Fall")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .selectAll(".picture")
        .data(NyFall)
        .enter()
        .append("rect")
        .attr("width","8%")
        .attr("height","8%")
        .attr("x",function(d, i){return 17*(i%10);})
        .attr("y", function(d,i){return   17 * Math.floor(i / 10)})
        .attr("fill",function(d,i){return getImageColor(d.colors[2].r,d.colors[2].g,d.colors[2].b);})
        .call(attachTooltip3);


    var NewyorkWinter =d3.select("#Newyork-Winter")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .selectAll(".picture")
        .data(NyWinter)
        .enter()
        .append("rect")
        .attr("width","8%")
        .attr("height","8%")
        .attr("x",function(d, i){return 17*(i%10);})
        .attr("y", function(d,i){return   17 * Math.floor(i / 10)})
        .attr("fill",function(d,i){return getImageColor(d.colors[2].r,d.colors[2].g,d.colors[2].b);})
        .call(attachTooltip4);




    var BeijingSpring =d3.select("#Beijing-Spring")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .selectAll(".picture")
        .data(BjSpring)
        .enter()
        .append("rect")
        .attr("width","8%")
        .attr("height","8%")
        .attr("x",function(d, i){return 17*(i%10);})
        .attr("y", function(d,i){return   17 * Math.floor(i / 10)})
        .attr("fill",function(d,i){return getImageColor(d.colors[2].r,d.colors[2].g,d.colors[2].b);})
        .call(attachTooltip5);


    var BeijingSummer =d3.select("#Beijing-Summer")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .selectAll(".picture")
        .data(BjSummer)
        .enter()
        .append("rect")
        .attr("width","8%")
        .attr("height","8%")
        .attr("x",function(d, i){return 17*(i%10);})
        .attr("y", function(d,i){return   17 * Math.floor(i / 10)})
        .attr("fill",function(d,i){return getImageColor(d.colors[2].r,d.colors[2].g,d.colors[2].b);})
        .call(attachTooltip6);


    var BeijingFall =d3.select("#Beijing-Fall")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .selectAll(".picture")
        .data(BjFall)
        .enter()
        .append("rect")
        .attr("width","8%")
        .attr("height","8%")
        .attr("x",function(d, i){return 17*(i%10);})
        .attr("y", function(d,i){return   17 * Math.floor(i / 10)})
        .attr("fill",function(d,i){return getImageColor(d.colors[2].r,d.colors[2].g,d.colors[2].b);})
        .call(attachTooltip7);


    var BeijingWinter =d3.select("#Beijing-Winter")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .selectAll(".picture")
        .data(BjWinter)
        .enter()
        .append("rect")
        .attr("width","8%")
        .attr("height","8%")
        .attr("x",function(d, i){return 17*(i%10);})
        .attr("y", function(d,i){return   17 * Math.floor(i / 10)})
        .attr("fill",function(d,i){return getImageColor(d.colors[2].r,d.colors[2].g,d.colors[2].b);})
        .call(attachTooltip8);


    function attachTooltip1(selection){
        selection
            .on('mouseenter',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5);

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html("Newyork City");
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#season").html(function (d){return "Spring"});
                tooltip.select("#r").html(d.colors[2].r);
                tooltip.select("#g").html(d.colors[2].g);
                tooltip.select("#b").html(d.colors[2].b);

                //console.log(d.colors[2].r)

            var image=tooltip.select("#Image").append("img");

                    image
                    .attr("src", function(selection) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
                    .attr("id","newImage");



            })
            .on('mousemove',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5);


                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html("Newyork City");
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#season").html(function (d){return "Spring"});

            })
            .on('mouseleave',function(){
                var tooltip = d3.select('.custom-tooltip')
                    .transition(100)
                    .style('opacity',0);
                d3.select(this)
                    .style("opacity",1);
                $("#newImage").remove();

            })
    }

    function attachTooltip2(selection){
        selection
            .on('mouseenter',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5)

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html(d.photo.owner.location);
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#r").html(d.colors[2].r);
                tooltip.select("#g").html(d.colors[2].g);
                tooltip.select("#b").html(d.colors[2].b);
                var image=tooltip.select("#Image").append("img");

                image
                    .attr("src", function(selection) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
                    .attr("id","newImage");

                console.log(d.photo.title)
            })
            .on('mousemove',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5)

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html("Newyork City");
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#season").html(function (d){return "Summer"});


            })
            .on('mouseleave',function(){
                var tooltip = d3.select('.custom-tooltip')
                    .transition(100)
                    .style('opacity',0);
                d3.select(this)
                    .style("opacity",1)
                $("#newImage").remove();
            })
    }

    function attachTooltip3(selection){
        selection
            .on('mouseenter',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5)

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html(d.photo.owner.location);
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#r").html(d.colors[2].r);
                tooltip.select("#g").html(d.colors[2].g);
                tooltip.select("#b").html(d.colors[2].b);
                var image=tooltip.select("#Image").append("img");

                image
                    .attr("src", function(selection) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
                    .attr("id","newImage");
            })
            .on('mousemove',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5);

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html("Newyork City");
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#season").html(
                    function (d){return "Fall"}

                );

                //console.log(id);
                //tooltip.select('#value').append("img")
                //    .attr("src", function(d) { return d3.select(this).getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })

                //console.log(d.photo.title)
            })
            .on('mouseleave',function(){
                var tooltip = d3.select('.custom-tooltip')
                    .transition(100)
                    .style('opacity',0);
                d3.select(this)
                    .style("opacity",1)
                $("#newImage").remove();
            })
    }

    function attachTooltip4(selection){
        selection
            .on('mouseenter',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5)

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html(d.photo.owner.location);
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#r").html(d.colors[2].r);
                tooltip.select("#g").html(d.colors[2].g);
                tooltip.select("#b").html(d.colors[2].b);
                var image=tooltip.select("#Image").append("img");

                image
                    .attr("src", function(selection) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
                    .attr("id","newImage");
            })
            .on('mousemove',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5)

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html("Newyork City");
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#season").html(
                    function (d){return "Winter"}

                );

                //console.log(id);
                //tooltip.select('#value').append("img")
                //    .attr("src", function(d) { return d3.select(this).getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })

                //console.log(d.photo.title)
            })
            .on('mouseleave',function(){
                var tooltip = d3.select('.custom-tooltip')
                    .transition(100)
                    .style('opacity',0);
                d3.select(this)
                    .style("opacity",1)
                $("#newImage").remove();
            })
    }

    function attachTooltip5(selection){
        selection
            .on('mouseenter',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5)

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html(d.photo.owner.location);
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#r").html(d.colors[2].r);
                tooltip.select("#g").html(d.colors[2].g);
                tooltip.select("#b").html(d.colors[2].b);
                var image=tooltip.select("#Image").append("img");

                image
                    .attr("src", function(selection) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
                    .attr("id","newImage");
            })
            .on('mousemove',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5)

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html("Beijing");
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#season").html(
                    function (d){return "Spring"}

                );

                //console.log(id);
                //tooltip.select('#value').append("img")
                //    .attr("src", function(d) { return d3.select(this).getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })

                //console.log(d.photo.title)
            })
            .on('mouseleave',function(){
                var tooltip = d3.select('.custom-tooltip')
                    .transition(100)
                    .style('opacity',0);
                d3.select(this)
                    .style("opacity",1)
                $("#newImage").remove();
            })
    }



    function attachTooltip6(selection){
        selection
            .on('mouseenter',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5);

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html(d.photo.owner.location);
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#r").html(d.colors[2].r);
                tooltip.select("#g").html(d.colors[2].g);
                tooltip.select("#b").html(d.colors[2].b);
                var image=tooltip.select("#Image").append("img");

                image
                    .attr("src", function(selection) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
                    .attr("id","newImage");
            })
            .on('mousemove',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5);

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html("Beijing");
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#season").html(
                    function (d){return "Summer"}

                );


            })
            .on('mouseleave',function(){
                var tooltip = d3.select('.custom-tooltip')
                    .transition(100)
                    .style('opacity',0);
                d3.select(this)
                    .style("opacity",1);
                $("#newImage").remove();
            })
    }


    function attachTooltip7(selection){
        selection
            .on('mouseenter',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5);

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html(d.photo.owner.location);
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#r").html(d.colors[2].r);
                tooltip.select("#g").html(d.colors[2].g);
                tooltip.select("#b").html(d.colors[2].b);
                var image=tooltip.select("#Image").append("img");

                image
                    .attr("src", function(selection) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
                    .attr("id","newImage");
            })
            .on('mousemove',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5);

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html("Beijing");
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#season").html(
                    function (d){return "Fall"}

                );

                //console.log(id);
                //tooltip.select('#value').append("img")
                //    .attr("src", function(d) { return d3.select(this).getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })

                //console.log(d.photo.title)
            })
            .on('mouseleave',function(){
                var tooltip = d3.select('.custom-tooltip')
                    .transition(100)
                    .style('opacity',0);
                d3.select(this)
                    .style("opacity",1)
                $("#newImage").remove();
            })


    }

    function attachTooltip8(selection){
        selection
            .on('mouseenter',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5)

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html(d.photo.owner.location);
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#r").html(d.colors[2].r);
                tooltip.select("#g").html(d.colors[2].g);
                tooltip.select("#b").html(d.colors[2].b);
                var image=tooltip.select("#Image").append("img");

                image
                    .attr("src", function(selection) { return getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })
                    .attr("id","newImage");
            })
            .on('mousemove',function(d){
                var tooltip = d3.select('.custom-tooltip');
                tooltip
                    .transition()
                    //.style('fill',"black")
                    .style('opacity',1);
                d3.select(this)
                    .style("opacity",0.5)

                tooltip.select('#title').html(d.photo.title._content);
                tooltip.select('#location').html("Beijing");
                tooltip.select('#time').html(d.photo.dates.taken);
                tooltip.select("#season").html(
                    function (d){return "Winter"}

                );

                //console.log(id);
                //tooltip.select('#value').append("img")
                //    .attr("src", function(d) { return d3.select(this).getImageUrl(d.photo.farm, d.photo.server, d.photo.id, d.photo.secret); })

                //console.log(d.photo.title)
            })
            .on('mouseleave',function(){
                var tooltip = d3.select('.custom-tooltip')
                    .transition(100)
                    .style('opacity',0);
                d3.select(this)
                    .style("opacity",1)
                $("#newImage").remove();
            })
    }



}









function parse(d){
    return {
        title: d._content,
        color: d.photo.colors

        //year: +d.Year,
        //value: +d.Value
    }
}



function getImageColor(r,g,b){
    return d3.rgb(r,g,b);
}


function getImageUrl(farm, server, image, secret) {
    return "https://farm"+farm+".staticflickr.com/"+server+"/"+image+"_"+secret+"_m.jpg";
}