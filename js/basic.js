//basic BASIC tk90x functions =D
var BASIC = function() {
    console.log('new instance');

    //zoom
    this.zoom = 3;

    //screen x, y
    this.x = 0;
    this.y = 0;

    //canvas and context
    this.canvas = window.document.getElementById("tk90x");
    this.context = this.canvas.getContext("2d");
};

BASIC.prototype.PLOT = function(x, y) {
    this.context.fillRect(x * this.zoom, y * this.zoom, 1 * this.zoom, 1 * this.zoom);
    this.x = x;
    this.y = y;
};

BASIC.prototype.PAPER = function(color) {
    /**
     * PAPER colors
     *   0 - black
     *   1 - blue
     *   2 - red
     *   3 - purple, technically called magenta
     *   4 - green
     *   5 - pale blue, technically called cyan
     *   6 - yellow
     *   7 - white
     *   8 - transparent (Do not change the paper value in the square being printed)
     */

     var namedColor = '';

     switch(color) {
        case 0:
            namedColor = 'black';
            break;
        case 1:
            namedColor = 'blue';
            break;
        case 2:
            namedColor = 'red';
            break;
        case 3:
            namedColor = 'magenta';
            break;
        case 4:
            namedColor = 'green';
            break;
        case 5:
            namedColor = 'cyan';
            break;
        case 6:
            namedColor = 'yellow';
            break;
        case 7:
            namedColor = 'white';
            break
     }

     this.canvas.style.backgroundColor = namedColor;
};