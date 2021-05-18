    
//GRAPH 2: Average Bonus Pay by Gender
//this graph uses the csv titled AverageBonusPay.csv
 
    var margin = {top:50 , bottom: 100 , left: 100, right:50},
        width = 900 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        //scales
        var x = d3.scaleBand()
                .range([0,width])
                .padding(0.3);

        var y =d3.scaleLinear()
                .range([height, 0]);
        var svg =d3.select("body").append("svg")
                .attr("width", width +margin.left +margin.right)
                .attr("height" , height +margin.top +margin.bottom)
                .append("g")
                .attr("transform", "translate (" +margin.left +","+ margin.top + ")");

        //title
        svg.append("text")
            .style("font-size" ,30)
            .attr("transform", "translate(100,0)")
            .attr("x", 75)
            .attr("y", -28)
            .text("Average Bonus Pay Per Gender");


        d3.csv("AverageBonusPay.csv").then(function(data){
            data.forEach(function(d){
                d.gender= d.Gender;
                d.AverageBonusPay = parseInt(d["AverageBonusPay"].replace(/,/g, ""));
            });

            console.log(data)

            
            var data1 = d3.rollup(data,
                function(i){return d3.sum(i , function(d){
                    return d.AverageBonusPay;})},
                function(d){return d.gender});
            

         
            x.domain(data.map(function(d){
                return d.gender;
            }));

           
            y.domain([0, 7000]);

        
            svg.selectAll(".bar")
                .data(data1)
                .enter().append("rect")
                .attr("class","bar")
                .attr("x", function(d){
                    return x(d[0]);
                })
                .attr("width", x.bandwidth())
                .attr("y",function(d){
                    return y(d[1]);
                })
                .attr("height", function(d){
                    return height - y(d[1]);
                })
                


            
            svg.append("g")
                .attr("transform", "translate(0,"+height+")")
                .style("font-size",18)
                .call(d3.axisBottom(x));

            svg.append("g")
                .style("font-size",18)
                .call(d3.axisLeft(y));

            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", -90)
                .attr("x", -85)
                .attr("dy", ".75em")
                .attr("transform", "rotate(-90)")
                .text("Average Bonus Pay ($)")
                .attr("font-size", 20);

            svg.append("text")
                .style("font-size" ,18)
                .attr("transform", "translate(100,0)")
                .attr("x", 90)
                .attr("y", 20)
                .text("6461.13");

            svg.append("text")
                .style("font-size" ,18)
                .attr("transform", "translate(100,0)")
                .attr("x", 425)
                .attr("y", 20)
                .text("6474.01");

            svg.append("text")
                .style("font-size" ,15)
                .attr("transform", "translate(100,0)")
                .attr("x", -175)
                .attr("y", 400)
                .text("**Here we can see that the average bonus pay for men and women is nearly identical. There are many theories for why this may be including:");


            svg.append("text")
                .style("font-size" ,15)
                .attr("transform", "translate(100,0)")
                .attr("x", -175)
                .attr("y", 415)
                .text("companies try to compensate for paying women less by giving them equal bonus pay or bonus pay is usually based of quotas. When bonus pay");

            

             svg.append("text")
                .style("font-size" ,15)
                .attr("transform", "translate(100,0)")
                .attr("x", -175)
                .attr("y", 430)
                .text("is based on quotas it is harder for companies to discriminate based on gender.");

                    

            
        })