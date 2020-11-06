let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
let city;

document.querySelector('input').addEventListener('change', event => {
    city = event.target.value;
})

document.querySelector('button').addEventListener('click',() => {
    let weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    weather.then(response => {
        return response.json();
    }).then(resData => {
        if(!document.querySelector('.container').children.length){
            displayData(resData);
            document.querySelector('input').value = '';
        }else{
            while(document.querySelector('.container').firstChild){
                document.querySelector('.container').removeChild(document.querySelector('.container').lastChild);
            }
            displayData(resData);
            document.querySelector('input').value = '';
        }
    }).catch(error => {
        console.log('Bad request brodi');
    })
});

function displayData(resData){

    let city = document.createElement('p');
    city.innerHTML = document.querySelector('input').value;
    document.querySelector('.container').appendChild(city);

    let main = document.createElement('p');
    main.innerHTML = resData.weather[0].main;
    document.querySelector('.container').appendChild(main);

    let temp = document.createElement('p');
    temp.innerHTML = resData.main.temp;
    document.querySelector('.container').appendChild(temp);

    let temp_min = document.createElement('p');
    temp_min.innerHTML = resData.main.temp_min;
    document.querySelector('.container').appendChild(temp_min);

    let temp_max = document.createElement('p');
    temp_max.innerHTML = resData.main.temp_max;
    document.querySelector('.container').appendChild(temp_max);
}
