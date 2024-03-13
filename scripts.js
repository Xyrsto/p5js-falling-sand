// Make an instance of two and place it on the page.
var params = {
    fullscreen: true,
};
var elem = document.body;
var two = new Two(params).appendTo(elem);

var rectWidth = 30;
var rectHeight = 30;
var startX = 30;
var startY = 30;

var rectangles = [];

for (var i = 0; i < 25; i++) {
    rectangles[i] = [];
    var x = startX + i * (rectWidth + 3); 
    
    for (var j = 0; j < 25; j++) {
        var y = startY + j * (rectHeight + 3); 
        
        var rect = two.makeRectangle(x, y, rectWidth, rectHeight);
        rect.fill = "#c9c9c9";
        rect.opacity = 0.75;
        rect.stroke = "rgb(0, 0, 0)";
        
        rectangles[i][j] = rect;
    }
}

elem.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX - elem.getBoundingClientRect().left;
    var mouseY = event.clientY - elem.getBoundingClientRect().top;

    for (var i = 0; i < 25; i++) {
        for (var j = 0; j < 25; j++) {
            var rect = rectangles[i][j];
            
            if (mouseX > rect.position.x - rect.width / 2 && 
                mouseX < rect.position.x + rect.width / 2 &&
                mouseY > rect.position.y - rect.height / 2 &&
                mouseY < rect.position.y + rect.height / 2) {
                rect.fill = "#000000"; 
            } else {
                rect.fill = "#c9c9c9"; 
            }
        }
    }
    two.update();
});
