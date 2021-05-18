//this is a filller sketch and it summarizes the first objective
//it also leads into the next objective


    var margin = {top:100 , bottom: 100 , left: 20, right:250},
        width =1200 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

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
        .text("Objective 1 Summary: From my analysis so far, it seems like on average women make less than men. Women make about the same bonus"); 

    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", -60)
        .attr("fill", "black")
        .text("pay as men, which may be due to bonus pay being based on achievements. Men have almost all of the unusually high salaries.");


    svg.append("text")
        .style("font-size" , 30)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", 20)
        .attr("fill", "purple")
        .text("Objective 2: What do these gaps look like in the tech field?");