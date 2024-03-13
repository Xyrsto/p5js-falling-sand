// Make an instance of two and place it on the page.
var params = {
    fullscreen: true,
};
var elem = document.body;
var two = new Two(params).appendTo(elem);

// Definição das dimensões e posição inicial
var rectWidth = 30;
var rectHeight = 30;
var startX = 30;
var startY = 30;

var rectangles = [];

// Desenhar a matriz 25x25
for (var i = 0; i < 25; i++) {
    rectangles[i] = [];
    var x = startX + i * (rectWidth + 3); // Não há espaço entre colunas
    
    for (var j = 0; j < 25; j++) {
        var y = startY + j * (rectHeight + 3); // Não há espaço entre linhas
        
        // Desenhar retângulo
        var rect = two.makeRectangle(x, y, rectWidth, rectHeight);
        rect.fill = "#c9c9c9";
        rect.opacity = 0.75;
        rect.stroke = "rgb(0, 0, 0)";
        
        // Armazenar referência do retângulo no array
        rectangles[i][j] = rect;
        console.log(rectangles[i][j])
    }
}

// Adiciona um evento de mousemove ao elemento DOM
elem.addEventListener('mousemove', function(event) {
    // Obtém a posição do mouse em relação ao elemento DOM
    var mouseX = event.clientX - elem.getBoundingClientRect().left;
    var mouseY = event.clientY - elem.getBoundingClientRect().top;

    // Verifica em qual retângulo o cursor do mouse está
    for (var i = 0; i < 25; i++) {
        for (var j = 0; j < 25; j++) {
            var rect = rectangles[i][j];
            
            // Verifica se as coordenadas do mouse estão dentro do retângulo atual
            if (mouseX > rect.translation.x - rect.width / 2 && 
                mouseX < rect.translation.x + rect.width / 2 &&
                mouseY > rect.translation.y - rect.height / 2 &&
                mouseY < rect.translation.y + rect.height / 2) {
                // Faça algo com o retângulo atual
                console.log("O mouse está sobre o retângulo em (" + i + ", " + j + ")");
                // Por exemplo, mude a cor do retângulo
                rect.fill = "#ff0000";
            } else {
                // Retorna a cor original para retângulos não destacados
                rect.fill = "#c9c9c9";
            }
        }
    }
});



// Don’t forget to tell two to draw everything to the screen
two.update();
