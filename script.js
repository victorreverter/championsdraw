var allData;

// $.getJSON('teams.json', (json) => {
//     allData = json;
//     console.log(allData);        
// });

// V1

// fetch('teams.json')
// .then(
//     function(response) {
//         return response.json();
// })
// .then(
//     function (dataTeams) {
//         allData = dataTeams;
//         console.log(allData);
// });

// V2

// fetch('teams.json')
//     .then(response => response.json())
//     .then(json => console.log(json));

// V3 sync/await

const request = async () => {
    try {
        const response = await fetch('teams.json');
        const json = await response.json();
        console.log(json);


    } catch (err) {
        console.log('%c Ohh this is the error => ', 'color: red; font-size:15px', err);
        
    }
}

request();
