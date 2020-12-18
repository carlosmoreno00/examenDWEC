google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(function(){
    drawChart();
});
      
function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Año');
    data.addColumn('number', 'Poblacion');
    data.addRows([
        ['2017', 14252],
        ['2018', 23360],
        ['2019', 40421],
        ['2020', 43500]
    ]);
    var options = {
                title: 'Evolucion de la poblacion de Navalcarnero',
                width: 700,
                'colors': ['green'],
                'opacity': '0.2',
                backgroundColor: 'blue',
                animation: {
                    duration: 5000,
                    easing: 'out',
                    startup: true
                },};
    let chart = new google.visualization.ColumnChart(document.getElementById('chart'))
    chart.draw(data, options);
}