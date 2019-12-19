
var XML_ADDRESS = "http://localhost/demo_simple.json",
XML_METHOD = "GET",
MSG_ERR_NODATA = "There is no news from tizen.org",
MSG_ERR_NOTCONNECTED = "Connection aborted. Check your internet connection.",
NUM_MAX_NEWS = 5,
NUM_MAX_LENGTH_SUBJECT = 64,
arrayNews = [],
indexDisplay = 0,
lengthNews = 0;

function loadDataFromServer() {
    var xmlhttp = new XMLHttpRequest();
    var xmlDoc, dataItem, i;

    xmlhttp.open(XML_METHOD, XML_ADDRESS, false);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            xmlDoc = JSON.parse(xmlhttp.responseText);

            console.log(
                'data loaded' + xmlDoc
            );
            //dataItem = xmlDoc.getElementsByTagName("item");

            /*if (dataItem.length > 0) {
                lengthNews = (dataItem.length > NUM_MAX_NEWS) ? NUM_MAX_NEWS : dataItem.length;
                for (i = 0; i < lengthNews; i++) {
                    arrayNews.push({
                        title: dataItem[i].getElementsByTagName("title")[0].childNodes[0].nodeValue,
                        link: dataItem[i].getElementsByTagName("link")[0].childNodes[0].nodeValue
                    });
                    arrayNews[i].title = trimText(arrayNews[i].title, NUM_MAX_LENGTH_SUBJECT);
                }

                //showNews(indexDisplay);
            } else {
                addTextElement(objNews, "subject", MSG_ERR_NODATA);
            }*/

            xmlhttp = null;
        } else {
            throw {message: 'error'};
            //addTextElement(objNews, "subject", MSG_ERR_NOTCONNECTED);
        }
    };

    xmlhttp.send();
}

window.onload = function () {
    this.loadDataFromServer();
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
   /* document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    // Sample code
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	box = document.querySelector('#textbox');
    	box.innerHTML = box.innerHTML == "Basic" ? "Sample" : "Basic";
    });
    */
};
