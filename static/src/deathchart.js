getData();
   async function getData() {
      const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      const data = await response.json();
      console.log(data);
      let date = new Date().toLocaleDateString();
      labels = [];
      values = [];
      for (i = 1; i < 150; i++) {
        labels.push(Object.keys(data.deaths).at(-150+i));
        values.push(data.deaths[Object.keys(data.deaths)[Object.keys(data.deaths).length - 150 + i]])
     }
      new Chart(document.getElementById("deathchart"), {
         type: 'line',
         data: {
            labels: labels,
            datasets: [{
              label: 'Deaths',
              data: values,
              fill: true,
              borderColor: 'rgb(229, 62, 62)',
              backgroundColor: 'rgba(229, 62, 62,0.2)',
              tension: 0.1,
              
            }]
          },
              options: {
               
                 legend: { display: false },
                 responsive: false,
                 title: {
                    display: true,
                    
                 }
              }
           });
        }