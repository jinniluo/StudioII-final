/**
 * Created by KiniLuo on 4/4/16.
 */
var Key = "9dbdf9f0baaf3b1198a230d545cb7b00"
var Secret = "c738b43902b15378"

var baseFlickrUrl = "https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key="+ Key //format=json requires a json file
//method=flickr.photos.search&api_key=e172b2bc3cad4dd79c5816dcf08594e7&tags=flower&format=json
var url = baseFlickrUrl + "&method=flickr.photos.search&tags=boston,downtown&per_page=100&min_taken_date=1426896000&max_taken_date=1434844800&sort=interestingness-desc"//&nojsoncallback=1 means return json file
var masterPhotoArray = [], masterPhotoInfoArray = [];
//&place_id=5MvaTZJTUbx1uPnP
//console.log(url)
console.log(d3)
d3.json(url,function(err,response){
    //console.log(response)
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    masterPhotoArray = response.photos.photo

    //d3.select('#searchAPIUrl').node().innerHTML = 'URL:'+url
    //d3.select('#Boston-Spring').node().innerHTML = JSON.stringify(response,null,4)


    //var photosArray = response.photos.photo
    //var photo=photoArray[0]
    //for (var i = 0; i < masterPhotoArray.length; i++) {
    //    console.log(masterPhotoArray[i]);
    //}
    getImageInfo(0);
    //d3.select('#searchAPIUrl').node().innerHTML = 'URL: ' + url
    //d3.select('#searchAPIResponse').node().innerHTML = JSON.stringify(response, null, 4)

    //console.log(photo.id)

    //url = baseFlickrUrl+ "&method=flickr.photos.getInfo&photo_id="+photo.id+"&lang=en-us"
    //console.log(url)
    //d3.json(url, function(err,response){
    //    console.log(response)
    //    d3.select('#infoAPIUrl').node().innerHTML = 'URL'+url
    //    d3.select('#infoAPIResponse').node().innerHTML = JSON.stringify(response, null,4)
    //
    //})

})

//1.how to get each photo based on the first section of information, how to write the for loop function
//2.can I create different Url

function getImageInfo(index) {
    var photoId = masterPhotoArray[index].id;
    var url = baseFlickrUrl+ "&method=flickr.photos.getInfo&photo_id="+photoId+"&lang=en-us"
    //console.log(url)
    d3.json(url, function(err,response) {
        masterPhotoInfoArray.push(response.photo);

        if (masterPhotoArray.length > index + 1) {
            getImageInfo(index + 1);
        } else {
            // this section of code would run after all image's info has been fetched
            // call another function that does the visualisation
            console.log(masterPhotoInfoArray);
        }
    })
}