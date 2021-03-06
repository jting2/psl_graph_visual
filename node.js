"use strict";

$(document).ready(function() {
    main();
});

var OTHER_EDGE_OPACITY = 0.1;
var OTHER_NODE_OPACITY = 0.2;
var NEIGHBOR_NODE_OPACITY = 0.6;
var SELF_EDGE_OPACITY = 1.0;
var SELF_NODE_OPACITY = 1.0;
var SELECTED_NODE_STOKE_WIDTH = '2px';
var SELECTED_NODE_STOKE_COLOR = '#8e8e8e';

function main() {
	var nodes = window.pslviz.nodes;

	var links = window.pslviz.links;

	var width = 1000;
	var height = 1000;






	var tip = d3.tip()
  			.attr('class', 'd3-tip')
 			
   			.html(function(d) {
    			return "Value: " + d.value ;
  			});


	var showRule = d3.tip()
			.attr('class', 'd3-tip')
			.html(function(d){
				return 'Rule: ' + d.rule;
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
			.attr("data-rule", function(d){ return d.rule;})
			.attr("data-satisfaction", function(d){return d.satisfaction;})
			.on('mouseover', showRule.show)
			.on('mouseout', showRule.hide) 
   ;


	//Adding the nodes data into the svg

	var node_svg = svg.selectAll('g')  
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
            selectNode(element.groundAtom);
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




  // turning ticks on

  simulation.nodes(nodes);
  // including the link
  simulation.force("link")
      	  .links(links);

  simulation.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });


   
    circles.attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        });
  

	  text.attr("x", function(d){return d.x - 30;})
	    .attr("y", function(d){return d.y;});

  });




  
// Creating Legends

  reset();

}


//Unselecting the node
function reset(){
  // Setting the opacity and stroke width of all nodes to default
  $('circle').css('opacity', 1.0);
  $('circle').css('stroke-width', 2.0);

  // Showing all the lines
  $('line').show();
  // Showing text of open nodes
  $('circle ~ text').show();
  $('circle[data-type="closed"] ~ text').hide();

  $('.sideBar').empty();
  $('.sideBar').append('<input type="text" onChange="findNode(this)" id="search"><br>');
}

function findNode(arg) {
  if ($('circle[data-atom="' + arg.value + '"]').length) {
    selectNode(arg.value);
  }
  console.log('circle[data-atom="' + arg.value + '"]');
}

function selectNeighbor(links) {
    links.each(function(index) {
    console.log('HERE');
    $('circle[data-atom="' + links[index].getAttribute('data-source') + '"]').css('opacity', NEIGHBOR_NODE_OPACITY);
    $('circle[data-atom="' + links[index].getAttribute('data-target') + '"]').css('opacity', NEIGHBOR_NODE_OPACITY);
  
 // Making neighboring node's text show 
    $('circle[data-atom="' + links[index].getAttribute('data-source') + '"] ~ text').show();
    $('circle[data-atom="' + links[index].getAttribute('data-target') + '"] ~ text').show();

    $('.sideBar').append('<p>' + links[index].getAttribute('data-rule') + " : " + links[index].getAttribute('data-satisfaction') +  '</p>');
  });
}

// Selecting the node that you clicked / searched up
function selectNode(groundAtom) {
    // Removing all text for circle and sidebar.
     $('circle ~ text').hide();
     $('.sideBar').empty();	// Removing all element inside g
     // All element.
     $('circle').css('opacity', OTHER_NODE_OPACITY);;
     $('circle').css('stroke-width', '0px');
     $('line').hide();

     // Neighbors and rules to display.
     var targetLinks = $('line[data-target="' + groundAtom + '"]');
     var sourceLinks = $('line[data-source="' + groundAtom + '"]');



   // Add button inside sidebar div
     $('.sideBar').append('<button type="button" id = "unselect" onclick=reset()> Unselect All </button>' );
     selectNeighbor(targetLinks);
     selectNeighbor(sourceLinks);
         // Self.
         $('circle[data-atom="' + groundAtom + '"]').css('opacity', SELF_NODE_OPACITY);
         $('circle[data-atom="' + groundAtom + '"]').css('stroke-width', SELECTED_NODE_STOKE_WIDTH);
         $('line[data-target="' + groundAtom + '"]').show();  
 		 $('line[data-source="' + groundAtom + '"]').show();
         
         // Add text to clicked node 
         $('circle[data-atom="' + groundAtom + '"] ~ text').show();

}

