cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-document-scanner/www/scan.js",
        "id": "cordova-plugin-document-scanner.scan",
        "pluginId": "cordova-plugin-document-scanner",
        "clobbers": [
            "scan"
        ]
    },
    {
        "file": "plugins/cordova-plugin-mobile-ocr/www/rectext.js",
        "id": "cordova-plugin-mobile-ocr.rectext",
        "pluginId": "cordova-plugin-mobile-ocr",
        "clobbers": [
            "textocr"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-camera": "4.0.3",
    "cordova-plugin-document-scanner": "2.0.2",
    "cordova-plugin-mobile-ocr": "2.0.0",
    "cordova-plugin-whitelist": "1.3.3"
}
// BOTTOM OF METADATA
});