const COLORS = {
    confirmed: '#ff0000',
    recovered: '#008000',
    deaths: '#373c43',
}

const CASE_STATUS = {
    confirmed: 'confirmed',
    recovered: 'recovered',
    deaths: 'deaths',
}

let body = document.querySelector('body')

let countries_list

let all_time_chart, days_chart, recover_rate_chart

window.onload = async () => {
    console.log('ready...')

    // only init chart on page loaded first time

    initTheme()

    initContryFilter()

    await initAllTimesChart()

    await initDaysChart()
    
    await initRecoveryRate()

    await loadData('Global')

    await loadCountrySelectList()

    document.querySelector('#country-select-toggle').onclick = () => {
        document.querySelector('#country-select-list').classList.toggle('active')
    }
}

loadData = async (country) => {
    startLoading()
    
    await loadSummary(country)

    await loadAllTimeChart(country)

    await loadDaysChart(country)

    endLoading()
}

startLoading = () => {
    body.classList.add('loading')
}

endLoading = () => {
    body.classList.remove('loading')
}

isGlobal = (country) => {
    return country === 'Global'
}

numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


// dark mode switch

initTheme = () => {
    let dark_mode_switch = document.querySelector('#darkmode-switch')

    dark_mode_switch.onclick = () => {
        dark_mode_switch.classList.toggle('dark')
        body.classList.toggle('dark')
        box.classList.toggle('darkss')

        setDarkChart(body.classList.contains('dark'))
    }
}

// set dark mode for charts
setDarkChart = (dark) => {
    let theme = {
        theme: {
            mode: dark ? 'dark' : 'light'
        }
    }
    all_time_chart.updateOptions(theme)
    days_chart.updateOptions(theme)
    recover_rate_chart.updateOptions(theme)
}



function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "flex";
      x.style.flexWrap = "wrap";
    } else {
      x.style.display = "none";
    }
  }

  function myFunctioone() {
    var x = document.getElementById("myDIVone");
    if (x.style.display === "none") {
      x.style.display = "flex";
      x.style.flexWrap = "wrap";
    } else {
      x.style.display = "none";
    }
  }



  let date = new Date().toLocaleDateString();
  document.getElementById('current_date').innerHTML = date;