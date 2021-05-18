
//this is a filller sketch and it summarizes the second objective
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
        .text("Objective 2 Summary: Many outliers exist in the tech field. In this dataset, women actually make more in the data science field."); 

    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", -60)
        .attr("fill", "black")
        .text("In the software development field, men make significantly more than women in base salaries and bonuses. Within the tech field in");

     svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", -40)
        .attr("fill", "black")
        .text("general, the men still hold all of the unusually high salaries.");

    svg.append("text")
        .style("font-size" , 30)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", 20)
        .attr("fill", "purple")
        .text("Objective 3: What do these gaps look like by demographic?");