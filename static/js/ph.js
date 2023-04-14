fetch('https://corona.lmao.ninja/v2/countries/Philippines')
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    document.getElementById("todayCases").innerHTML = data.todayCases.toLocaleString();
    document.getElementById("todayDeaths").innerHTML = data.todayDeaths.toLocaleString();
    document.getElementById("cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
    document.getElementById("active").innerHTML = data.active.toLocaleString();
    document.getElementById("tests").innerHTML = data.tests.toLocaleString();
    document.getElementById("population").innerHTML = data.population.toLocaleString();
  })


fetch('https://corona.lmao.ninja/v2/all')
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
   
    document.getElementById("alltests").innerHTML = data.tests.toLocaleString();
    document.getElementById("allcases").innerHTML = data.cases.toLocaleString();
    document.getElementById("allactive").innerHTML = data.active.toLocaleString();
    document.getElementById("allrecovered").innerHTML = data.recovered.toLocaleString();
    document.getElementById("alldeaths").innerHTML = data.deaths.toLocaleString();
    datatests = data.tests;
  })
  


  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Tests Conducted', 'Cases', 'Recovered', 'Deaths', 'Active Cases'],
      datasets: [{
        label: 'All Time',
        data: [4, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      borderWidth: 1,
      responsive: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(201, 203, 207, 0.7)'
      ],
      scales: {
        y: {
          beginAtZero: true
        }
      }
      
    }
  });