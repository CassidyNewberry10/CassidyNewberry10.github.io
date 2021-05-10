 var margin = {top:100 , bottom: 100 , left: 20, right:250},
        width =1200 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

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
        .text("Objective 4 Summary: This graph shows that women experienced higher rates of unemployment during the peak of the pandemic."); 

    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", -60)
        .attr("fill", "black")
        .text("The unemployment rates are nearly the same now, but COVID caused a gap to exist in many months of 2020.");


    svg.append("text")
        .style("font-size" , 30)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", -20)
        .attr("fill", "purple")
        .text("Project Sources:");

    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", 0)
        .attr("fill", "purple")
        .text("objective 1: https://www.kaggle.com/nilimajauhari/glassdoor-analyze-gender-pay-gap/activity");

    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", 20)
        .attr("fill", "purple")
        .text("objective 2: https://www.kaggle.com/nilimajauhari/glassdoor-analyze-gender-pay-gap/activity");

    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", 40)
        .attr("fill", "purple")
        .text("objective 3: https://www.bls.gov/news.release/pdf/wkyeng.pdf");

    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", -50)
        .attr("y", 60)
        .attr("fill", "purple")
        .text("objective 4:  https://beta.bls.gov/dataViewer/view/timeseries/LNS14000025");

    svg.append("text")
        .style("font-size" , 20)
        .attr("transform", "translate(100,0)")
        .attr("x", 48)
        .attr("y", 80)
        .attr("fill", "purple")
        .text("https://beta.bls.gov/dataViewer/view/timeseries/LNS14000026");

    