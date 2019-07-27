//load the google charts
google.charts.load('current', { 'packages': ['corechart'] });

//load the Callback function that runs when page loads
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
    drawSheetName('Military-C10', 'SELECT A,B,C,D,E,F,G',
        MilitaryC10ResponseHandler);
    drawSheetName('GDP', 'SELECT A,H',
        GDPResponseHandler);
    drawSheetName('Education-C10', 'SELECT A,F',
        EducationC10PieResponseHandler);
    drawSheetName('Health-GDP', 'SELECT A,G,P',
        HealthGDPC10ResponseHandler);
    drawSheetName('Health-GDP', 'SELECT A,H,Q',
        HealthcareGDPMeanResponseHandler);
    drawSheetName('Military-GDP', 'SELECT A,H,Q',
        MilitaryGDPMeanResponseHandler);
    drawSheetName('Health-Military', 'SELECT A,G,Q',
        HealthMilitaryC10ResponseHandler);
    drawSheetName('PPEducation-GDP', 'SELECT A,G,AB',
        PPEducationGDPResponseHandler);
    drawSheetName('Fastest-Health', ' SELECT A,H',
        FastestHealthC10PercentValueResponseHandler);
    drawSheetName('Education-GDP-Health', 'SELECT A,G,Q,Z',
        EducationGDPHealthResponseHandler);
    drawSheetName('Health-C10', 'SELECT A,B,C,D,E,F,G',
        HealthC10ResponseHandler);
    drawSheetName('Education-C10', 'SELECT A,B,C,D,E,F,G',
        EducationC10StackResponseHandler);
    drawSheetName('Health-C10', 'SELECT A,G',
        HealthC10GeoResponseHandler);
    drawSheetName('Health-C10', 'SELECT A,F',
        HealthC10PieResponseHandler);
    drawSheetName('Military-GDP', 'SELECT A,G,P',
        MilitaryGDPC10ResponseHandler);
    drawSheetName('Education-GDP', 'SELECT A,G,P',
        EducationGDPC10ResponseHandler);
    drawSheetName('Education-GDP', 'SELECT A,H,Q',
        EducationGDPMeanResponseHandler);
    drawSheetName('PPHealth-GDP', 'SELECT A,G,X',
        PPHealthGDPResponseHandler);
    drawSheetName('PPMilitary-GDP', 'SELECT A, G, O',
        PPMilitaryGDPResponseHandler);
    drawSheetName('Fastest-Education', ' SELECT A, H',
        FastestEducationC10PercentValueResponseHandler);
    drawSheetName('Health-C10', 'SELECT A,B,C,D,E,F,G',
        HealthC10StackResponseHandler);
    drawSheetName('PPHealth-GDP', 'SELECT A,G,X',
        PPHealthGDPResponseHandler);
    drawSheetName('Fastest-Education', 'SELECT A,I',
        FastestEducationC10FixedValueResponseHandler);
    drawSheetName('Education-C10', 'SELECT A,B,C,D,E,F,G',
        EducationC10ResponseHandler);
    drawSheetName('Education-GDP', 'SELECT A,H,Q',
        EducationGDPMeanResponseHandler);
    drawSheetName('Education-C10', 'SELECT A,G',
        EducationC10GeoResponseHandler);
    drawSheetName('Education-Military', 'SELECT A,G,Q',
        EducationMilitaryC10ResponseHandler);
    drawSheetName('Military-C10', 'SELECT A,F',
        MilitaryC10PieResponseHandler);
    drawSheetName('Fastest-Health', 'SELECT A,I',
        FastestHealthC10FixedValueResponseHandler);
} //drawAllSheets

function drawSheetName(sheetName, query, responseHandler) {
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1txAhclYsPQi_oWpOzv3oEeWdED_nUQsk/gviz/tq?sheet='
        + sheetName + '&headers=1&tq=' + queryString);
    query.send(responseHandler);
} //drawSheetName

function checkError(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() +
            ' ' + response.getDetailedMessage());
        return;
    }
}
//Function end


function MilitaryC10ResponseHandler(response) {

    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 6, desc: true });

    var options = {
        title: 'Military spending of top 10 countries, 2009-2014',
        vAxis: { title: 'Spending in Millions USD ($)' },
        hAxis: { title: 'Country' },
        height: 500

    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('MilitaryC10_div'));

    chart.draw(data, options);
} //Column chart representation of top 10 countries military spending

function GDPResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        height: 500,
        colorAxis: { colors: ['#FFCCBC', '#DD2C00'] },
        title: 'Top 10 countries GDP in Millions USD $'

    };

    var chart = new google.visualization.GeoChart(
        document.getElementById('GDP_div'));
    chart.draw(data, options);
} //Geomap to depict GDP of 10 nations in USD Millions $

// Using Pie Chart to depict the education expenditure of the top 10 G20 nations in 2014
function EducationC10PieResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    // data.sort({column:1, desc:true});

    var options = {
        height: 500,
        title: 'Educational expenditure(Millions USD $) of top 10 countries in 2014'

    };

    var chart = new google.visualization.PieChart(
        document.getElementById('EducationC10Pie_div'));
    chart.draw(data, options);
}// Function end

function HealthGDPC10ResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        height: 500,
        legend: 'none',
        bars: 'horizontal',
        colors: ['#FF9900', '#6633CC'],
        isStacked: true,
        annotations: { alwaysOutside: true },
        title: ' Healthcare Vs GDP, 2014',
        vAxis: { title: 'Country' },
        hAxis: { title: 'Spending in Millions USD $' }
    };

    var chart = new google.visualization.BarChart(
        document.getElementById('HealthcareGDP_div'));

    chart.draw(data, options);
}//Healthcare Vs GDP, 2014

function HealthcareGDPMeanResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    var options = {
        title: 'Mean healthcare spending Vs Mean GDP, 2009-2014',
        hAxis: { title: 'Healthcare Millions USD $' },
        vAxis: { title: 'GDP Millions USD $' },
        colors: ['#FF0000', '#008000'],
        legend: 'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('ScatterHealth_div'));
    chart.draw(data, options);
} //Mean Health care Vs Mean GDP, 2009-2014


function HealthMilitaryC10ResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        height: 500,
        legend: 'none',
        bars: 'horizontal',
        isStacked: true,
        annotations: { alwaysOutside: true },
        title: 'Healthcare Spending vs Military spending in 2014 (Millions USD $)',
        vAxis: { title: 'Country' },
        hAxis: { title: 'Spending in Millions USD $' }
    };

    var chart = new google.visualization.BarChart(
        document.getElementById('HealthMilitary_div'));

    chart.draw(data, options);
} //Healthcare spending vs military spending in the year 2014


function PPEducationGDPResponseHandler(response) {
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: 'Per person Educational spending Vs per person GDP in 2014(USD $)',
        vAxis: { title: 'Country' },
        hAxis: { title: 'USD $' },
        width: 650,
        height: 500,
        colors: ['#DC3912', '#FF9900'],
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true

    };

    var formatter = new google.visualization.NumberFormat({
        fractionDigits: 2, prefix: '$'
    });

    formatter.format(data, 1);



    var chart = new google.visualization.BarChart(
        document.getElementById('PercapitaEducationGdp_div'));
    chart.draw(data, options);

} //Per person education spending vs per person GDP in 2014(USD $)



function FastestHealthC10PercentValueResponseHandler(response) {
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        title: 'Growth Rate in Percentage (Healthcare)',
        height: 500,
        colors: ['#DB7093'],
        vAxis: { title: 'Percentage' },
        hAxis: { title: 'Country' }
    };

    var view = new google.visualization.DataView(data);

    view.setColumns([0, 1,
        {
            calc: function (dt, row) {
                return Math.floor(dt.getFormattedValue(row, 1)) + '%';
            },
            sourceColumn: 1,
            type: 'string',
            role: 'annotation'
        }]);

    var chart = new google.visualization.AreaChart(
        document.getElementById('HealthC10PercentValue_div'));
    chart.draw(view, options);
} //annualgrowthratehealthcare


// Function for comparing per person Educational and Healthcare spending for per person GDP
function EducationGDPHealthResponseHandler(response) {

    var data = response.getDataTable();
    data.sort({ column: 3, desc: true });
    var view = new google.visualization.DataView(data);


    var options = {
        title: ' ',
        hAxis: { title: 'Health' },
        vAxis: { title: 'Education' },
        width: 900,
        height: 900,
        colors: ['#E0FFFF', '#191970']
    };

    var chart = new google.visualization.BubbleChart(
        document.getElementById('HGE_div'));
    chart.draw(data, options);

} //Educational, healthcare spending, and GDP for the year 2014 (Millions USD $)

//Health care spending of top 10 nations for 6 years of data using column chart
function HealthC10ResponseHandler(response) {

    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 6, desc: true });

    var options = {
        title: 'Health spending of top 10 nations, 2009-2014',
        height: 500,
        vAxis: { title: 'Spending in Millions USD ($)' },
        hAxis: { title: 'Country' }

    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('HealthC10_div'));

    chart.draw(data, options);
}


//Using stack chart to depict the educational expenditure of the top 10 G20 nations
function EducationC10StackResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 6, desc: true });

    var options = {
        width: 650,
        height: 500,
        title: 'Educational spending of top 10 nations, 2009-2014',
        vAxis: { title: 'Country' },
        hAxis: { title: 'Spending in Millions USD ($)' },
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
    };

    var chart = new google.visualization.BarChart(
        document.getElementById('EducationC10Stack_div'));
    chart.draw(data, options);

}




// Using Geo Map to depict the health expenditure of the top 10 G20 nations in 2014
function HealthC10GeoResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        height: 500,

        colorAxis: { colors: ['#9E9E9E', '#212121'] },
        title: 'Health expenditure(Millions USD $) of top 10 nations in the year 2014'

    };

    var chart = new google.visualization.GeoChart(
        document.getElementById('HealthC10Geo_div'));
    chart.draw(data, options);
}

//Using Pie Chart to depict the health expenditure of the top 10 G20 nations in 2014
function HealthC10PieResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    //data.sort({column:1, desc:true});

    var options = {
        height: 500,
        title: 'Health expenditure(Millions USD $) of top 10 countries in 2014'

    };

    var chart = new google.visualization.PieChart(
        document.getElementById('HealthC10Pie_div'));
    chart.draw(data, options);
}

function MilitaryGDPC10ResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        height: 500,
        legend: 'none',
        bars: 'horizontal',
        colors: ['#FFDE03', '#0336FF'],
        isStacked: true,
        annotations: { alwaysOutside: true },
        title: 'Military Vs GDP, 2014',
        vAxis: { title: 'Country' },
        hAxis: { title: 'Spending in Millions USD ($)' }
    };

    var chart = new google.visualization.BarChart(
        document.getElementById('MilitaryGDP_div'));

    chart.draw(data, options);
} //Military Spending Vs GDP in 2014


function EducationGDPMeanResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    var options = {
        title: 'Mean education spending Vs Mean GDP, 2009-2014',
        hAxis: { title: 'Healthcare Millions USD $' },
        vAxis: { title: 'GDP Millions USD $' },
        colors: ['#22AA99', '#5574A6'],
        legend: 'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('ScatterEducation_div'));
    chart.draw(data, options);
} //Mean Education spending vs Mean GDP, 2009-2014


function PPHealthGDPResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });
    var options = {
        title: 'Per Person Healthcare spending Vs per person GDP in 2014(USD $)',
        vAxis: { title: 'Country' },
        hAxis: { title: 'USD $' },
        width: 650,
        height: 500,
        colors: ['#2483b3', '#AAC789'],
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },

        isStacked: true

    };

    var chart = new google.visualization.BarChart(
        document.getElementById('PercapitaHealthGdp_div'));
    chart.draw(data, options);

} //Per person healthcare spending vs per person GDP, 2014(USD $)



function PPMilitaryGDPResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });
    var options = {
        title: 'Per Person Military spending Vs per person GDP in 2014(USD $)',
        vAxis: { title: 'Country' },
        hAxis: { title: 'USD $' },
        width: 650,
        height: 500,
        colors: ['#22AA99', '#3B3EAC'],
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },

        isStacked: true

    };

    var chart = new google.visualization.BarChart(
        document.getElementById('PercapitaMilitaryGdp_div'));
    chart.draw(data, options);

} //Per person military spending vs per person GDP, 2014(USD $))

function EducationGDPC10ResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        height: 500,
        legend: 'none',
        bars: 'horizontal',
        colors: ['#994499', '#AAAA11'],
        isStacked: true,
        annotations: { alwaysOutside: true },
        title: 'Education Vs GDP, 2014',
        vAxis: { title: 'Country' },
        hAxis: { title: 'Spending in Millions USD ($)' }
    };

    var chart = new google.visualization.BarChart(
        document.getElementById('EducationGDP_div'));

    chart.draw(data, options);
} //Education Spending Vs GDP in 2014


function FastestEducationC10PercentValueResponseHandler(response) {
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        title: 'Growth rate in Percentage(Education)',
        height: 500,
        colors: ['#5F9EA0'],
        vAxis: { title: 'Percentage' },
        hAxis: { title: 'Country' }
    };

    var view = new google.visualization.DataView(data);

    view.setColumns([0, 1,
        {
            calc: function (dt, row) {
                return Math.floor(dt.getFormattedValue(row, 1)) + '%';
            },
            sourceColumn: 1,
            type: 'string',
            role: 'annotation'
        }]);

    var chart = new google.visualization.AreaChart(
        document.getElementById('EducationC10PercentValue_div'));
    chart.draw(view, options);
} //annualgrowthrateeduction

//Health care spending of top 10 nations for 6 years of data using stack chart
function HealthC10StackResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 6, desc: true });

    var options = {
        width: 650,
        height: 500,
        title: 'Health spending of top 10 nations, 2009-2014)',
        vAxis: { title: 'Country' },
        hAxis: { title: 'Spending in Millions USD ($)' },
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
    };

    var chart = new google.visualization.BarChart(
        document.getElementById('HealthC10Stack_div'));
    chart.draw(data, options);

} //function end

function PPHealthGDPResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });
    var options = {
        title: 'Per Person Healthcare spending Vs per person GDP in 2014(USD $)',
        vAxis: { title: 'Country' },
        hAxis: { title: 'USD $' },
        width: 650,
        height: 500,
        colors: ['#2483b3', '#AAC789'],
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },

        isStacked: true

    };

    var chart = new google.visualization.BarChart(
        document.getElementById('PercapitaHealthGdp_div'));
    chart.draw(data, options);

} //Per person healthcare spending vs per person GDP, 2014(USD $)


function FastestEducationC10FixedValueResponseHandler(response) {
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        title: 'Fastest growing countries in fixed value (Education)',
        height: 500,
        colors: ['#FF6347'],
        vAxis: { title: 'Country' },
        hAxis: { title: 'Millions USD $' },
    };

    var view = new google.visualization.DataView(data);

    view.setColumns([0, 1,
        {
            calc: function (dt, row) {
                return Math.floor(dt.getFormattedValue(row, 1)) + 'M';
            },
            sourceColumn: 1,
            type: 'string',
            role: 'annotation'
        }]);

    var chart = new google.visualization.BarChart(
        document.getElementById('EducationC10FixedValue_div'));
    chart.draw(view, options);
} //fastestgrowingcountriesfixedvalue(education)
//Using column chart to depict the educational expenditure of the top 10 G20 nations
function EducationC10ResponseHandler(response) {

    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 6, desc: true });

    var options = {
        title: 'Educational spending of top 10 nations, 2009-2014',
        vAxis: { title: 'Spending in Millions USD ($)' },
        hAxis: { title: 'Country' },
        height: 500

    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('EducationC10_div'));

    chart.draw(data, options);
}

function EducationGDPMeanResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    var options = {
        title: 'Mean education spending Vs Mean GDP, 2009-2014',
        hAxis: { title: 'Healthcare Millions USD $' },
        vAxis: { title: 'GDP Millions USD $' },
        colors: ['#22AA99', '#5574A6'],
        legend: 'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('ScatterEducation_div'));
    chart.draw(data, options);
} //Mean Education spending vs Mean GDP, 2009-2014



function MilitaryGDPMeanResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    var options = {
        title: 'Mean military spending Vs Mean GDP, 2009-2014',
        hAxis: { title: 'Military Spending Millions USD $' },
        vAxis: { title: 'GDP Millions USD $' },
        colors: ['#000080', '#FF00FF'],
        legend: 'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('ScatterMilitary_div'));
    chart.draw(data, options);
}//Mean Military spending vs Mean GDP, 2009-2014


//  Using Geo Map to depict the education expenditure of the top 10 G20 nations in 2014
function EducationC10GeoResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        height: 500,

        colorAxis: { colors: ['#4CAF50', '#1B5E20'] },
        title: 'Educational expenditure(Millions USD $) of top 10 nations in the year 2014'

    };

    var chart = new google.visualization.GeoChart(
        document.getElementById('EducationC10Geo_div'));
    chart.draw(data, options);
}

function EducationMilitaryC10ResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);
    var options = {
        height: 500,
        legend: 'none',
        bars: 'horizontal',
        isStacked: true,
        colors: ['#0099C6', '#B82E2E'],
        annotations: { alwaysOutside: true },
        title: 'Education Spending vs Military spending in 2014 (Millions USD $)',
        vAxis: { title: 'Country' },
        hAxis: { title: 'Spending in Millions USD $' }
    };

    var chart = new google.visualization.BarChart(
        document.getElementById('EducationMilitary_div'));

    chart.draw(data, options);
} //Education spending vs miilitary spending in the year 2014


// Using Pie Chart to depict the military expenditure of the top 10 G20 nations in 2014
function MilitaryC10PieResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    // data.sort({column:1, desc:true});

    var options = {
        height: 500,
        title: 'Military expenditure(Millions USD $) of top 10 countries in 2014'

    };

    var chart = new google.visualization.PieChart(
        document.getElementById('MilitaryC10Pie_div'));
    chart.draw(data, options);
} // Function end


function FastestHealthC10FixedValueResponseHandler(response) {
    var data = response.getDataTable();
    data.sort({ column: 1, desc: true });

    var options = {
        title: 'Fastest growing countries in fixed value (Healthcare)',
        height: 500,
        colors: ['#BD9CDB'],
        vAxis: { title: 'Country' },
        hAxis: { title: 'Millions USD $' }
    };

    var view = new google.visualization.DataView(data);

    view.setColumns([0, 1,
        {
            calc: function (dt, row) {
                return Math.floor(dt.getFormattedValue(row, 1)) + 'M';
            },
            sourceColumn: 1,
            type: 'string',
            role: 'annotation'
        }]);

    var chart = new google.visualization.BarChart(
        document.getElementById('HealthC10FixedValue_div'));
    chart.draw(view, options);
} //fastestgrowingcountriesfixed(healthcare)
