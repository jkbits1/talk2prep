/**
 * Created by Jon on 24/06/16.
 */

"use strict";

//Create the SVG
// var svg = d3.select("body").append("svg")
//     .attr("width", 400)
//     .attr("height", 120);
//
// //Create an SVG path
// svg.append("path")
//   .attr("id", "wavy") //very important to give the path element a unique ID to reference later
//   .attr("d", "M 10,90 Q 100,15 200,70 Q 340,140 400,30") //Notation for an SVG path, from bl.ocks.org/mbostock/2565344
//   .style("fill", "none")
//   .style("stroke", "#AAAAAA");
//
// //Create an SVG text element and append a textPath element
// svg.append("text")
//   .append("textPath") //append a textPath to the text element
//   .attr("xlink:href", "#wavy") //place the ID of the path here
//   .style("text-anchor","middle") //place the text halfway on the arc
//   .attr("startOffset", "50%")
//   .text("Yay, my text is on a wavy path");


// var svg = d3.select("body").append("svg")
//   .attr("width", 400)
//   .attr("height", 120);
//
// //Create an SVG path
// svg.append("path")
//   .attr("id", "wavy") //very important to give the path element a unique ID to reference later
//   .attr("d",
//     // "M 10,90 Q 100,15 200,70 Q 340,140 400,30"
//     "M 0,300 A 200,200 0 0,1 400,300"
//   ) //Notation for an SVG path, from bl.ocks.org/mbostock/2565344
//   .style("fill", "none")
//   .style("stroke", "#AAAAAA");
//
// //Create an SVG text element and append a textPath element
// svg.append("text")
//   .append("textPath") //append a textPath to the text element
//   .attr("xlink:href", "#wavy") //place the ID of the path here
//   .style("text-anchor","middle") //place the text halfway on the arc
//   .attr("startOffset", "50%")
//   .text("Yay, my text is on a wavy path");
//
// // svg.selectAll("path")
// //   .transition().duration(2000).delay(2000)
// //   .attr("d", "M75,300 A125,125 0 0,1 325,300");
//
// svg.selectAll(".monthArc")
//   .data(pie(monthData))
//   .enter().append("path")
//   .attr("class", "monthArc")
//   .attr("id", function(d,i) { return "monthArc_"+i; }) //Give each slice a unique ID
//   .attr("d", arc);
//
//

// stretching arc
//Create the SVG
// var svg = d3.select("body").append("svg")
//   .attr("width", 400)
//   .attr("height", 400);
//
// //Create an SVG arc starting at location [0,300], ending at [400,300] with a radius of 200 (circle)
// var path = svg.append("path")
//   .attr("id", "wavy") //A unique ID to reference later
//   .attr("d", "M0,300 A200,200 0 0,1 400,300") //Notation for an SVG path
//   .style("fill", "none")
//   .style("stroke", "#AAAAAA")
//   .style("stroke-dasharray", "5,5");
//
// //Create an SVG text element and append a textPath element
// var textArc = svg.append("text")
//   .style("text-anchor","middle")
//   .append("textPath")				//append a textPath to the text element
//   .attr("xlink:href", "#wavy") 	//place the ID of the path here
//   .attr("startOffset", "50%")		//place the text halfway on the arc
//   .text("Yay, my text is moving back & forth");
//
// //Transition to an arc starting at location [75,300], ending at [325,300] with a radius of 125 (circle)
// //svg.selectAll("path")
// //	.transition().duration(2000).delay(2000)
// //	.attr("d", "M75,300 A125,125 0 0,1 325,300");
//
// function repeat() {
//   path
//     .transition().duration(2000)
//   //Transition to an arc starting at location [75,300], ending at [325,300] with a radius of 125 (circle)
//     .attr("d", "M50,300 A150,150 0 0,1 350,300")
//     .transition().duration(2000)
//   //Transition back to original arc
//     .attr("d", "M0,300 A200,200 0 0,1 400,300")
//     .each("end", repeat);
// }//repeat
//
// //Repeatedly change the arcs back and forth
// repeat();

// // Scales & Data
// start date number and end date number of the months in a year
// var monthData = [
//   {month: "January", 	startDateID: 0, 	endDateID: 30},
//   {month: "February", startDateID: 31, 	endDateID: 58},
//   {month: "March", 	startDateID: 59, 	endDateID: 89},
//   {month: "April", 	startDateID: 90, 	endDateID: 119},
//   {month: "May", 		startDateID: 120, 	endDateID: 150},
//   {month: "June", 	startDateID: 151, 	endDateID: 180},
//   {month: "July", 	startDateID: 181, 	endDateID: 211},
//   {month: "August", 	startDateID: 212, 	endDateID: 242},
//   {month: "September",startDateID: 243, 	endDateID: 272},
//   {month: "October", 	startDateID: 273, 	endDateID: 303},
//   {month: "November", startDateID: 306, 	endDateID: 333},
//   {month: "December",	startDateID: 334, 	endDateID: 364}
// ];


//
// //Creates a function that makes SVG paths in the shape of arcs with the specified inner and outer radius
// var arc = d3.svg.arc()
//   .innerRadius(width*0.9/2)
//   .outerRadius(width*0.9/2 + 30);
//
// //Creates function that will turn the month data into start and end angles
// var pie = d3.layout.pie()
//   .value(function(d) { return d.endDateID - d.startDateID; })
//   .padAngle(.01)
//   .sort(null);
//
// // slices
// //Draw the arcs themselves
// svg.selectAll(".monthArc")
//   .data(pie(monthData))
//   .enter().append("path")
//   .attr("class", "monthArc")
//   .attr("id", function(d,i) { return "monthArc_"+i; })
//   .attr("d", arc);
//
// //Append the month names within the arcs
// svg.selectAll(".monthText")
//   .data(monthData)
//   .enter().append("text")
//   .attr("class", "monthText")
//   .attr("x", 5) //Move the text from the start angle of the arc
//   .attr("dy", 18) //Move the text down
//   .append("textPath")
//   .attr("xlink:href",function(d,i){return "#monthArc_"+i;})
//   .text(function(d){return d.month;});

function circles() {
  return [
    // {name: "c1", value: 1, dataItems: donutDataList[0]}
    // , {name: "c2", value: 2, dataItems: donutDataList[1]}
    // donutDataList[0], donutDataList[1]
    ["a", "b", "c"]
    , ["x", "y", "z"]
    , ["m", "n", "o"]
  ]
}

var svg;

function showCircle (donutDataList) {

  var donutData = donutDataList[0];


  // animals
//Create a color scale
  var colorScale = d3.scale.linear()
    .domain([1, 3.5, 6])
    .range(["#2c7bb6", "#ffffbf", "#d7191c"])
    .interpolate(d3.interpolateHcl);

//Create an arc function
  var arc = d3.svg.arc()
    // .innerRadius(width * 0.75 / 2)
    // .outerRadius(width * 0.75 / 2 + 30);
      .innerRadius(function (d) {
        return d.data.sz * 0.1 * width * 0.75 / 2;
      })
      .outerRadius(function (d) {
        return d.data.sz * 0.1 * width * 0.75 / 2 + 30;
      })
  // .cornerRadius(6)
    ;
// .innerRadius(width*0.55/2)
//   .outerRadius(width*0.55/2 + 30);

// Set-up - months on chart, animals on chart
  var screenWidth = window.innerWidth;

  var margin = {left: 20, top: 20, right: 20, bottom: 20},
    width = Math.min(screenWidth, 500) - margin.left - margin.right,
    height = Math.min(screenWidth, 500) - margin.top - margin.bottom;

  // width = Math.min(screenWidth, 1000) - margin.left - margin.right,
  //   height = Math.min(screenWidth, 1000) - margin.top - margin.bottom;

  svg = d3.select("#chart svg").remove();

  // var
    svg = d3.select("#chart").append("svg")
    .attr("width", (width + margin.left + margin.right))
    .attr("height", (height + margin.top + margin.bottom))
    .append("g").attr("class", "wrapper")
    .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")")
    // .attr("transform", "translate(" + (width + margin.left) + "," + (height + margin.top) + ")")
    //   .attr("transform", "translate(250,250)")
    ;

// test
  svg = svg.selectAll("g")
    .data(circles)
    // .data(circles, d => {
    //   return d.name;
    // })
    .enter().append("g")
    .attr("class", "circles")
  ;

  // NOTE set MATRIX
  // https://github.com/d3/d3-3.x-api-reference/blob/master/Selections.md


//Turn the pie chart 90 degrees counter clockwise, so it starts at the left
  var pie = d3.layout.pie()
    .startAngle(-90 * Math.PI / 180)
    .endAngle(-90 * Math.PI / 180 + 2 * Math.PI)
    .value(
      d => {
        return d.value;
      }
    )
    .padAngle(.01)
    .sort(null);

  function getDataList (d) {
    var n = 2;

    if (d[0] == "a") {
      n = 0;
    }
    else if (d[0] == "x") {
      n = 1;
    }

    return pie(donutDataList[n]);
  }

  donuts();

  function donuts ()
  {
//Create the donut slices

// experiments
//     svg = d3.select("#chart").selectAll("g")
    //
    //
    // svg
    // .each(function (d) {
    //   this._value = d.value;
    //
    // });

  svg.selectAll(".donutArcSlices")
    // .selectAll(".donutArcSlices")
    .data(getDataList)
    .enter().append("path")
    .attr("class", "donutArcSlices")

    // animals, left aligned
    // .attr("id", function(d,i) { return "donutArc"+i; })

    // animals, centered, left aligned, flipped
    .attr("d", arc)
    .style("fill", (d, i) => {
      if (i === 7) return "#CCCCCC"; //Other
      else return colorScale(i);
    })
    // animals, left aligned
    // ;

    // animals, centered (section of this code below flips the lower text)
    //
    // note - can't convert this to fat arrow syntax,
    // something inside function gets broken, maybe regex syntax issue?
    .each(function (d, i) {

      //A regular expression that captures all in between the start of a string (denoted by ^) and a capital letter L
      //The letter L denotes the start of a line segment
      //The "all in between" is denoted by the .+?
      //where the . is a regular expression for "match any single character except the newline character"
      //the + means "match the preceding expression 1 or more times" (thus any single character 1 or more times)
      //the ? has to be added to make sure that it stops at the first L it finds, not the last L
      //It thus makes sure that the idea of ^.*L matches the fewest possible characters
      //For more information on regular expressions see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
      var firstArcSection = /(^.+?)L/;

      //Grab everything up to the first Line statement
      //The [1] gives back the expression between the () (thus not the L as well) which is exactly the arc statement
      var newArc = firstArcSection.exec(d3.select(this).attr("d"))[1];
      //Replace all the comma's so that IE can handle it -_-
      //The g after the / is a modifier that "find all matches rather than stopping after the first match"
      newArc = newArc.replace(/,/g, " ");

      // flips the text
      //If the end angle lies beyond a quarter of a circle (90 degrees or pi/2)
      //flip the end and start position
      if (d.endAngle > 90 * Math.PI / 180) {
        var startLoc = /M(.*?)A/,		//Everything between the first capital M and first capital A
          middleLoc = /A(.*?)0 0 1/,	//Everything between the first capital A and 0 0 1
          endLoc = /0 0 1 (.*?)$/;	//Everything between the first 0 0 1 and the end of the string (denoted by $)
        //Flip the direction of the arc by switching the start en end point (and sweep flag)
        //of those elements that are below the horizontal line
        var newStart = endLoc.exec(newArc)[1];
        var newEnd = startLoc.exec(newArc)[1];
        var middleSec = middleLoc.exec(newArc)[1];

        //Build up the new arc notation, set the sweep-flag to 0
        newArc = "M" + newStart + "A" + middleSec + "0 0 0 " + newEnd;
      }//if

      //Create a new invisible arc that the text can flow along
      svg.append("path")
        .attr("class", "hiddenDonutArcs")
        .attr("id", "donutArc" + i)
        .attr("d", newArc)
        .style("fill", "none");

    });

    // text, left aligned, centered, flipped (see specific sections below)
    //Append the label names on the outside
    svg.selectAll(".donutText")
    // left aligned and centered
    //   .data(donutData)

    // flipped
    .data( getDataList )

    // left aligned, centered, flipped
    .enter().append("text")
    .attr("class", "donutText")

    // left aligned and centered
    // .attr("dy", -13)

    // flipped
    //Move the labels below the arcs for those slices with an end angle greater than 90 degrees
    .attr("dy", (d, i) => {
      var dy = (d.endAngle > 90 * Math.PI / 180 ? 18 : -11);

      var adjDy = dy;

      if (dy < 0) {
        if (d.data.sz == 6) {
          adjDy = (-0.3 * dy) * 17;
        }
        else if (d.data.sz == 4) {
          adjDy = (-0.3 * dy) * 27;
        }
        else {
          adjDy = dy * -1.9;
        }
      }
      else {
        if (d.data.sz == 6) {
          adjDy = (-0.9 * dy) * 2.4;
        }
        else if (d.data.sz == 4) {
          adjDy = (-0.9 * dy) * 4.8;
        }
        else {
          adjDy = dy * -0.44;
        }
      }

      if (i >= 4) {
        // adjDy -= 10;
      }

      return adjDy;
    })

    // left aligned, centered, flipped
    .append("textPath")
    // animals, left aligned
    // .attr("xlink:href",function(d,i){return "#donutArc"+i;})
    // .text( d => d.name );

    // animals, centered, flipped
    .attr("startOffset", "50%")
    .style("text-anchor", "middle")
    .attr("xlink:href", (d, i) => "#donutArc" + i)

    // animals, centered
    // .text(d => d.name);

    // animals, flipped
    .text(d => d.data.name);

}
}