import requests
import shutil
import json
import csv
import ssl



# armin.akhavan@gmail.com
# this class is using the data scraped from flicker to construct the relevant url to the images files and download into a folder
# make a new instance of the class by:
# newInstanceOfTheClass = Flicker_Downloader()
# methods:
#    .makeName(respond) # returns image_name # respond from results of the fliker scraping
#    .makeUpUrl(respond) # returns images_url
#    .downloadImage(image_url, image_name)


class Flicker_Downloader(object):
    def __init__(self):
        self.base_url = "https://c1.staticflickr.com"

    def makeName(self, each):
        each_js = each["photo"]
        name =  "NyFall/{0}_{1}_b.jpg".format(each_js["id"], each_js["secret"])
        return name

    def makeUpUrl(self, each):
        each_js = each["photo"]
        url_made =  "{0}/{1}/{2}/{3}_{4}_b.jpg".format(self.base_url, each_js["farm"], each_js["server"], each_js["id"], each_js["secret"])
        return url_made

    def downloadImage(self, url, filename):
        # downloads an image from url and saves it to filename
        # returns True is download was successful
        r = requests.get(url, stream=True)
        if r.status_code == 200:
            with open(filename, 'wb') as f:
                r.raw.decode_content = True
                shutil.copyfileobj(r.raw, f)
                return True
        else:
            print "Bad status code for: " + filename
            return False



dataNames = []
with open('dataScripts/flickr-node/NyFall.json') as json_data:
    d = json.load(json_data)

    for each_img in d:
        downloader = Flicker_Downloader()
        namemade = downloader.makeName(each_img)
        urlmade = downloader.makeUpUrl(each_img)
        dataNames.append({"file_names": "{0}".format(namemade)})
        downloader.downloadImage(urlmade, namemade)


with open('/Users/KiniLuo/Desktop/studio/dataScripts/csv/NyFall.csv', 'w') as csvfile:
    filenames = ["file_names"]
    writer = csv.DictWriter(csvfile, filenames)
    writer.writeheader()
    for each_row in dataNames:
        writer.writerow(each_row)




        