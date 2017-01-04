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

function events(action) {
    switch (action) {
        case 'music-controls-next':
            // Do something
            break;
        case 'music-controls-previous':
            // Do something
            break;
        case 'music-controls-pause':
            audio.pause();

            
                        var notificationData = {
                track: 'Time is Running Out', // optional, default : ''
                artist: 'Muse', // optional, default : ''
                cover: 'albums/absolution.jpg' // optional, default : nothing
            };



            setTimeout(function() {
                console.log('DELAYED INIT MUSIC CREATE')
                MusicControls.create(notificationData, function(success) {
                    console.log('SUCCESS SHOW: ' + success);
                }, function(error) {
                    console.log('ERROR SHOW: ' + error);
                });
   MusicControls.updateIsPlaying(false); // toggle the play/pause notification button


            }, 0);
            // Do something
            break;
        case 'music-controls-play':

            audio.play();
            var notificationData = {
                track: 'Time is Running Out', // optional, default : ''
                artist: 'Muse', // optional, default : ''
                cover: 'albums/absolution.jpg' // optional, default : nothing
            };



            setTimeout(function() {
                console.log('DELAYED INIT MUSIC CREATE')
                MusicControls.create(notificationData, function(success) {
                    console.log('SUCCESS SHOW: ' + success);
                }, function(error) {
                    console.log('ERROR SHOW: ' + error);
                });
   MusicControls.updateIsPlaying(true); // toggle the play/pause notification button


            }, 0);


            // Do something
            break;
        case 'music-controls-destroy':
            // Do something
            break;

            // External controls (iOS only)
        case 'music-controls-toggle-play-pause':
            // Do something
            break;

            // Headset events (Android only)
        case 'music-controls-media-button':
            // Do something
            break;
        case 'music-controls-headset-unplugged':
            // Do something
            break;
        case 'music-controls-headset-plugged':
            // Do something
            break;
        default:
            break;
    }
}



var my_media = {};
var audio = document.getElementById("myAudio");




function playMedia() {
    // Register callback
    MusicControls.subscribe(events);

    // Start listening for events
    // The plugin will run the events function each time an event is fired
    MusicControls.listen();
 

    audio.play();
    console.log('play')
    console.log(audio.src)


            var notificationData = {
                track: 'asdasdasdas', // optional, default : ''
                artist: 'asdasdasd',
                  isPlaying   : false,
            };



            setTimeout(function() {
                console.log('DELAYED INIT MUSIC CREATE')
                MusicControls.create(notificationData, function(success) {
                    console.log('SUCCESS SHOW: ' + success);
                }, function(error) {
                    console.log('ERROR SHOW: ' + error);
                });



            }, 800);
    //my_media.play();






}


function pauseMedia() {
    console.log('pause')
    audio.pause();
    //my_media.pause();

    MusicControls.destroy(function(success) {
        console.log('SUCCESS SHOW: ' + success);
    }, function(error) {
        console.log('ERROR SHOW: ' + error);
    });
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
        /**ready */

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
                        // my_media = new Media('documents://logs/test1.mp3')
                        audio.src = successUrl.toURL();
                        alert('ready')
                            //my_media.play();
                    } else {
                        audio.src = successUrl.toURL();
                        // my_media = new Media(successUrl.toURL())
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