getData();
   async function getData() {
      const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      const data = await response.json();
      console.log(data);
      let date = new Date().toLocaleDateString();
      labels = [];
      values = [];
      for (i = 1; i < 150; i++) {
        labels.push(Object.keys(data.cases).at(-150+i));
        values.push(data.cases[Object.keys(data.cases)[Object.keys(data.cases).length - 150 + i]])
     }
      new Chart(document.getElementById("chart2"), {
         type: 'line',
         data: {
            labels: labels,
            datasets: [{
              label: 'Confirmed Cases',
              data: values,
  
              borderColor: 'rgb(23, 43, 77)',
              tension: 0.1
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