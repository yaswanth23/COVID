setInterval(function(){fetch('https://thevirustracker.com/free-api?global=stats')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  
  document.getElementById('title').innerText = "COVID-19 STATISTICS - GLOBAL";
  
    
  document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${data.results[0].total_cases}</div>
      <div class="factor">Infected</div>
    </div>`;
  
  document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${data.results[0].total_recovered}</div>
      <div class="factor">Recovered</div>
    </div>`;
  
  document.getElementById('sick').innerHTML = `<div class="stats">
      <div class="number">${data.results[0].total_active_cases}</div>
      <div class="factor">Sick</div>
    </div>`;
  
  document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number">${data.results[0].total_deaths}</div>
      <div class="factor">Deaths</div>
    </div>`; 
    
  });}, 120000);

fetch('https://thevirustracker.com/free-api?global=stats')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  
  document.getElementById('title').innerText = "COVID-19 STATISTICS - GLOBAL";
    
  document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${data.results[0].total_cases}</div>
      <div class="factor">Infected</div>
    </div>`;
  
  document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${data.results[0].total_recovered}</div>
      <div class="factor">Recovered</div>
    </div>`;
  
  document.getElementById('sick').innerHTML = `<div class="stats">
      <div class="number">${data.results[0].total_active_cases}</div>
      <div class="factor">Sick</div>
    </div>`;
  
  document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number">${data.results[0].total_deaths}</div>
      <div class="factor">Deaths</div>
    </div>`;    
  });