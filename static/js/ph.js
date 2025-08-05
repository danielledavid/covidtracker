// Fetch Philippines data
fetch('https://covid-api.com/api/reports?iso=PHL')
  .then(response => response.json())
  .then(result => {
    const data = result.data[0];

    document.getElementById("todayCases").innerHTML = "N/A"; // API doesn't provide todayCases
    document.getElementById("todayDeaths").innerHTML = "N/A"; // API doesn't provide todayDeaths
    document.getElementById("cases").innerHTML = data.confirmed.toLocaleString();
    document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
    document.getElementById("active").innerHTML = (data.confirmed - data.recovered - data.deaths).toLocaleString();
    document.getElementById("tests").innerHTML = "N/A"; // Not provided
    document.getElementById("population").innerHTML = data.region.population.toLocaleString();
  });

// Fetch global totals
fetch('https://covid-api.com/api/reports/total')
  .then(response => response.json())
  .then(data => {
    document.getElementById("alltests").innerHTML = "N/A"; // Not available
    document.getElementById("allcases").innerHTML = data.data.confirmed.toLocaleString();
    document.getElementById("allactive").innerHTML = (data.data.confirmed - data.data.recovered - data.data.deaths).toLocaleString();
    document.getElementById("allrecovered").innerHTML = data.data.recovered.toLocaleString();
    document.getElementById("alldeaths").innerHTML = data.data.deaths.toLocaleString();

    // Update the chart with real values
    const chartData = [
      0, // No test data
      data.data.confirmed,
      data.data.recovered,
      data.data.deaths,
      data.data.confirmed - data.data.recovered - data.data.deaths
    ];

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Tests Conducted', 'Cases', 'Recovered', 'Deaths', 'Active Cases'],
        datasets: [{
          label: 'All Time (Global)',
          data: chartData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(54, 162, 235, 0.7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
