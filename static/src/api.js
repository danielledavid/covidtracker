getData();
   async function getData() {
      const response = await fetch('https://corona.lmao.ninja/v2/countries/Philippines');
      const data = await response.json();
      console.log(data);

      new Chart(document.getElementById("bar-chart"), {
         type: 'bar',
         data: {
            labels: ['Tests Conducted', 'Cases', 'Recovered', 'Deaths', 'Active Cases'],
            datasets: [
               {
                  label: "All Time",
                  backgroundColor: ['rgba(43, 108, 176, 0.7)',
                  'rgba(74, 85, 104, 0.7)',
                  'rgba(47, 133, 90, 0.7)',
                  'rgba(229, 62, 62, 0.7)',
                  'rgba(214, 158, 46, 0.7)',
                   ],
                     data: [data.tests, data.cases, data.recovered, data.deaths, data.active],
                    }
                 ]
              },
              options: {
                indexAxis: 'y',
                 legend: { display: false },
                 responsive: false,
                 
                 title: {
                    display: true,
                 }
              }
           });
        }


