/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var my_media = {};

function playMedia(){
    console.log('play')
    my_media.play();
}


function pauseMedia(){
    console.log('pause')
    my_media.pause();
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        /***** */
        var fileTransfer = new FileTransfer();
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onError);

        function onError(e) {
            navigator.notification.alert("Error : Downloading Failed");
        };

        function onFileSystemSuccess(fileSystem) {
            var entry = "";

            entry = fileSystem.root;
            console.log(fileSystem.root.toURL())

            console.log('entry.nativeURL')
            console.log(entry.nativeURL);
            // if(entry.nativeURL == 'undefined'){
            console.log('en if')
            gotFileEntry(fileSystem.root.toURL())
                //   }else{
                // gotFileEntry(entry.nativeURL)
                //}
        }

        function gotFileEntry(entry) {
            // URL in which the pdf is available
            var documentUrl = "https://d3hu8de7rtp6ki.cloudfront.net/widols/november.mp3"; //
            var uri = encodeURI(documentUrl);
            console.log('init download')
            fileTransfer.download(uri, entry + "logs/test1.mp3",
                function(successUrl) {
                    console.log('success')
                    console.log('success')
                    console.log(successUrl.toURL())
                    var devicePlatform = device.platform;
                    if (devicePlatform == 'iOS') {
                        my_media = new Media('documents://logs/test1.mp3')
                        alert('ready')
                        //my_media.play();
                    }else{
                        my_media = new Media(successUrl.toURL())
                        //my_media.play();
                        alert('ready')
                    }

                },
                function(error) {
                    console.log(error)

                    //navigator.notification.alert(ajaxErrorMsg);
                },
                false
            );
        };

        /****** */



        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        console.log(cordova.file.applicationDirectory);
        console.log('cordova.file.applicationStorageDirectory');
        console.log(cordova.file.applicationStorageDirectory);
        console.log("cordova.file.dataDirectory");
        console.log(cordova.file.dataDirectory);
        console.log("------");
        console.log("------");
        console.log("------");
        //console.log(DirectoryEntry);
        //console.log(DirectoryEntry.toURL());

        var fileEntry = cordova.file.dataDirectory;
        var uri = "http://sjjec.yt-downloader.org/download.php?id=8d2f5712cdd56ddc2e5b29036755d21a";
        var readBinaryData = null;
        //download(fileEntry, uri, readBinaryData)















    }
};

app.initialize();