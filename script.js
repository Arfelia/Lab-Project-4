document.getElementById('btn-nasa').addEventListener('click', function() {
    const apiKey = 'l7HKzFirN0qEN2yFfnmuALiZNKvxgiFg9SnHqMeF';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.textContent = data.title;
        const td2 = document.createElement('td');
        td2.textContent = data.explanation;
        const td3 = document.createElement('td');
        td3.innerHTML = `<a href="${data.url}" target="_blank">Посмотреть фото</a>`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tableBody.appendChild(tr);
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('btn-geocoder').addEventListener('click', function() {
    const apiKey = 'b4e5b625066941de9ba1202ea2c9555d';
    const query = 'Paris';
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';

        data.results.forEach(result => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.textContent = result.formatted;
            const td2 = document.createElement('td');
            td2.textContent = result.geometry.lat;
            const td3 = document.createElement('td');
            td3.textContent = result.geometry.lng;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tableBody.appendChild(tr);
        });
    })
    .catch(error => console.error('Error:', error));
});
