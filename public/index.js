(function () {
    'use strict';
    var socket = io(),
        keycodes = {};

    keycodes['38'] = 'up';
    keycodes['40'] = 'down';
    keycodes['37'] = 'left';
    keycodes['39'] = 'right';
    keycodes['32'] = 'demoralize';

    function sendCommand(command) {
        socket.emit('command', {
            command: command,
            senderId : socket.id
        });
    };
    document.addEventListener('keyup', function(key) {
        sendCommand('stop');
    });

    document.querySelector('#top-triangle').addEventListener('click', function() {
        sendCommand('fire');
    });

    document.addEventListener('keydown', function(key) {
        var keyVal = keycodes[key.keyCode];
        if(keyVal) {
            sendCommand(keyVal);

        }
    });
}());
