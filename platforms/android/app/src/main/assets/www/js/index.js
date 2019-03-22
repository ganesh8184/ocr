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
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        scan.scanDoc(1, onSuccess, onFail);

function onSuccess(imageURI) {
      textocr.recText(0, /*3,*/ imageURI, onSuccess, onFail); // removed returnType (here 3) from version 2.0.0
      // for sourceType Use 0,2 // 1,3,4 won't work
      // for returnType Use 0,1,2 or 3 // 3 returns duplicates[see table]
      function onSuccess(recognizedText) {
           var txt = (JSON.stringify(recognizedText));
            try{
                var obj = JSON.parse(txt);
alert(JSON.stringify(obj));
document.getElementById("blocks").innerHTML = obj.blocks.blocktext;
document.getElementById("line").innerHTML = obj.lines.linetext;

        }
        catch(ex)
        {
            alert(ex.message);
            // $("#text").text(text);
        }
      }
      function onFail(message) {
            alert('Failed because: ' + message);
      }
}
function onFail(message) {
      alert('Failed because: ' + message);
}
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
