console.log('hello there');

// variables

svgDims = {
    'width': 770,
    'height': 400,
    'padding': 20

};

window.onload = function() {

    
    // Figure 1 #fig1-q1egs
    // create group element in the svg to draw to. 
    figure1 = d3.select('#fig1-q1egs')
    .attr('width', svgDims.width)
    .attr('height', svgDims.height)
    .style('background', '#ffffff')
    .style('border', '1px solid black')
    .on("mouseover", function(d) {
        console.log('general kenobi!');
    })
    .append('g');
    
    // create 
    figure1Hover = d3.select('#fig1-q1egs-hover')


};

