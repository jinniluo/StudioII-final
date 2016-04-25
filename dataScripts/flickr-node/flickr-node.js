"use strict";

var flickrAPIKey = "9dbdf9f0baaf3b1198a230d545cb7b00";

var Client = require("node-rest-client").Client;
var client = new Client();
const getColors = require("get-image-colors");

var baseFlickrUrl = "https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key="+ flickrAPIKey;
//BeijingSpring
//var url = baseFlickrUrl + "&method=flickr.photos.search&tags=beijing,daytime&woeid=2151330&per_page=100&min_taken_date=1426896000&max_taken_date=1434844800&sort=interestingness-desc";


//beijing summer
//var url = baseFlickrUrl + "&method=flickr.photos.search&tags=Beijing,daytime&woeid=2151330&per_page=100&min_taken_date=1434844800&max_taken_date=1442880000&sort=interestingness-desc";

//Beijing fall
//var url = baseFlickrUrl + "&method=flickr.photos.search&tags=Beijing,daytime&woeid=2151330&per_page=100&min_taken_date=1442880000&max_taken_date=1450656000&sort=interestingness-desc";

//Beijing Winter
var url = baseFlickrUrl + "&method=flickr.photos.search&tags=Beijing,daytime&woeid=2151330&per_page=100&min_taken_date=1450656000&max_taken_date=1458518400&sort=interestingness-desc";


//newyork spring
//var url = baseFlickrUrl + "&method=flickr.photos.search&tags=NYC,daytime&woeid=2459115&per_page=100&min_taken_date=1426896000&max_taken_date=1434844800&sort=interestingness-desc";


//newyork summer
//var url = baseFlickrUrl + "&method=flickr.photos.search&tags=NYC,daytime&woeid=2459115&per_page=100&min_taken_date=1434844800&max_taken_date=1442880000&sort=interestingness-desc";

//newyork fall
//var url = baseFlickrUrl + "&method=flickr.photos.search&tags=NYC,daytime&woeid=2459115&per_page=100&min_taken_date=1442880000&max_taken_date=1450656000&sort=interestingness-desc";

////newyork Winter
var url = baseFlickrUrl + "&method=flickr.photos.search&tags=NYC,daytime&woeid=2459115&per_page=100&min_taken_date=1450656000&max_taken_date=1458518400&sort=interestingness-desc";

var masterPhotoArray = [], masterPhotoInfoArray = [];

function getImageInfo(index) {
    var photoId = masterPhotoArray[index].id;
    var url = baseFlickrUrl+ "&method=flickr.photos.getInfo&photo_id="+photoId+"&lang=en-us";

    client.get(url, function(data) {
        if (masterPhotoArray.length > index + 1) {
            var imageUrl = getImageUrl(data.photo.farm, data.photo.server, data.photo.id, data.photo.secret);
            getColors(imageUrl, function(err, colors){
              // colors is an array of colors
              if (err) {
                setTimeout(getImageInfo(index), 0);
                return;
              }
              var colorsArray = [];
              for (var i in colors) {
                var color = colors[i];
                var colorObject = {r: color._rgb[0], g: color._rgb[1], b: color._rgb[2]};
                colorsArray.push(colorObject);
              }
              data.colors = colorsArray;
              masterPhotoInfoArray.push(data);
              setTimeout(getImageInfo(index + 1), 0);
            })
        } else {
            // this section of code would run after all image's info has been fetched
            // call another function that does the visualisation
            // console.log(masterPhotoInfoArray);
            var fs = require('fs');
            fs.writeFile("BjWinter.json", JSON.stringify(masterPhotoInfoArray, null, 2), function(err) {
                if(err) {
                    return console.log(err);
                }
            });
        }
    })
}

client.get(url, function(data) {
    masterPhotoArray = data.photos.photo;
    getImageInfo(0);
});

function getImageUrl(farmId, serverId, imageId, secret) {
    return "https://farm"+farmId+".staticflickr.com/"+serverId+"/"+imageId+"_"+secret+"_m.jpg";
}
