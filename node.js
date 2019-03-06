"use strict";

$(document).ready(function() {
    main();
});

function main() {
	var nodes = window.pslviz.nodes;

	var links = window.pslviz.links;

	var width = 1000;
	var height = 1000;

   var OTHER_EDGE_OPACITY = 0.1;
   var OTHER_NODE_OPACITY = 0.2;
   var NEIGHBOR_NODE_OPACITY = 0.6;
   var SELF_EDGE_OPACITY = 1.0;
   var SELF_NODE_OPACITY = 1.0;
   var SELECTED_NODE_STOKE_WIDTH = '2px';
   var SELECTED_NODE_STOKE_COLOR = '#8e8e8e';

	var tip = d3.tip()
  			.attr('class', 'd3-tip')
 			
   			.html(function(d) {
    			return "Type: " + d.type ;
  			});


	var showRule = d3.tip()
			.attr('class', 'rules')
			.html(function(d){
				return 'Rule' + d.rule;
			});


	var color = d3.scaleOrdinal(d3.schemeAccent);
	var svg = d3.select("#psl_graph")
			.append("svg")
    		.attr("width", width)
    		.attr("height", height);

	

    	svg.call(tip);
	svg.call(showRule);
	
	// https://medium.com/@sxywu/understanding-the-force-ef1237017d5
	// https://medium.com/@bryony_17728/d3-js-two-v-4-network-charts-compared-8d3c66b0499c
	// https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8
	// https://beta.observablehq.com/@mbostock/disjoint-force-directed-graph
	// https://bl.ocks.org/mbostock/950642


	// https://bost.ocks.org/mike/selection/ (See how select works)

	var chargeForce = d3.forceManyBody()
			.strength(function() { return -30; })
			.distanceMin(1)
			.distanceMax(10000);

   var linkForce = d3.forceLink()
         .id(function(d) { return d.groundAtom; })
         .strength(function(link) { return 0.001; });

	// Need to make so I wont have to have specific x and y value (Used to create a force graph)
	var simulation = d3.forceSimulation()
					.force('charge', chargeForce)  // causes all elements to attract or repel one another
  	  			    .force('center', d3.forceCenter(width / 2, height / 2))  // centering your elements as a whole about a center point (So it doesnt disappear off the page)
  	  			    .force("link", linkForce);




/************************************************

//Why is it when I instatiate link first node goes to the front?

/********************************************/

   // Adding all link data into
	var link = svg.selectAll(".link")
			.data(links)
         		.enter()
         		.append("line")
         		.attr("class", "link")
         		.attr("data-source", function(edge) { return edge.source; })
         		.attr("data-target", function(edge) { return edge.target; })
			.on('mouseover', showRule.show)
			.on('mouseout', showRule.hide) 
   ;


	//Adding the nodes data into the svg

	var node_svg = svg
					.selectAll('g')  
					.data(nodes)
					.enter()
					.append('g'); //g is used to group SVG shapes together. (In this case node and link)

   // Adding all the node_svg data into circle
	var circles =  node_svg.append('circle')
			.attr("class", "circle")
        	.attr("fill", function(d) { return color(d.group); })
        	.attr('r', 20)
        	.attr('stroke', SELECTED_NODE_STOKE_COLOR)
        	.attr('stroke-width', '0px')
        	.attr("data-atom", function(node) { return node.groundAtom; })
        	.attr("data-type", function(node) { return node.type; })
        	.attr('stroke-width', SELECTED_NODE_STOKE_WIDTH)
        	.on('mouseover', tip.show)
        	.on('mouseout', tip.hide)
         	.on('click', function(element) {
         		// Removing all text.
               $('circle ~ text').hide();

               // All element.
               $('circle').css('opacity', OTHER_NODE_OPACITY);;
               $('circle').css('stroke-width', '0px');
               $('line').hide();
//css('opacity', OTHER_EDGE_OPACITY);

               // Neighbors.
               var links = $('line[data-target="' + element.groundAtom + '"]');
               links.each(function(index) {
                  $('circle[data-atom="' + links[index].getAttribute('data-source') + '"]').css('opacity', NEIGHBOR_NODE_OPACITY);
                  $('circle[data-atom="' + links[index].getAttribute('data-target') + '"]').css('opacity', NEIGHBOR_NODE_OPACITY);
                  
                 // Making neighboring node's text show 
                  $('circle[data-atom="' + links[index].getAttribute('data-source') + '"] ~ text').show();
                  $('circle[data-atom="' + links[index].getAttribute('data-target') + '"] ~ text').show();


               });

               // Self.
               $('circle[data-atom="' + element.groundAtom + '"]').css('opacity', SELF_NODE_OPACITY);
               $('circle[data-atom="' + element.groundAtom + '"]').css('stroke-width', SELECTED_NODE_STOKE_WIDTH);
               $('line[data-target="' + element.groundAtom + '"]').show();
//css('opacity', SELF_EDGE_OPACITY);
       
               // Add text to clicked node 
               $('circle[data-atom="' + element.groundAtom + '"] ~ text').show();
       })
;

	     /* Create the text for each block */
	var text = node_svg.append('text')
	    .attr('x', 12)
	    .attr('font-size', 8)
	    .attr('dy', '.35em')
	    .text(function(node) { return node.groundAtom; })
	    
	;

   // Hide all closed node text.
   	$('circle[data-type="closed"] ~ text').hide();

   // TODO(jason): You will need to have some "reset" when nothing is selected.

	var oldGraph = $('#psl_graph').html();
	document.getElementById('resetMe').onclick = function(){$('#psl_graph').html(oldGraph);};



//turning ticks on

simulation.nodes(nodes);
//including the link
simulation.force("link")
      	  .links(links);

simulation.on("tick", ticked);


//This function is called to update position of node-link
function ticked() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });


   
   circles.attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        });
  

	text.attr("x", function(d){return d.x - 30;})
	    .attr("y", function(d){return d.y;});

  };

  
// Creating Legends




var svg = d3.select('#sideBar')
		.append('svg')
		.attr('height',2000)
		.attr('width', 600);


var ruleBar = svg.append('g')
		.attr('class', 'scroll')
		.attr('transform','translate(-20,50)')
		 

;
	
ruleBar.selectAll('text')
		.data(links)
		.enter()
		.append('text')
		.attr('x', 20)
		.attr('y', function(d,i){
				return (i -1) * 20;
				})
		.text(function(link){
			return link.rule;
			})
		.attr('font-size', 10)
;
}
