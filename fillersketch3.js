//this is a filller sketch and it summarizes the third objective
//it also leads into the next objective


 var margin = {top:100 , bottom: 100 , left: 20, right:250},
        width =1200 - margin.left - margin.right,
        height = 125 - margin.top - margin.bottom;

        //scales

    var svg =d3.select("body").append("svg")
                .attr("width", width +margin.left +margin.right)
                .attr("height" , height +margin.top +margin.bottom)
                .append("g")
                .attr("transform", "translate (" +margin.left +","+ margin.top + ")")


    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", -80)
        .attr("fill", "black")
        .text("Objective 3 Summary: People of color in the United States make less on average per week. Hispanic women and black women are impacted"); 

    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", -60)
        .attr("fill", "black")
        .text("by the wage gap more than any other demographic.");

     svg.append("text")
        .style("font-size" , 30)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", 20)
        .attr("fill", "purple")
        .text("Objective 4: How did COVID impact all of this?");
