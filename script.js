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
        // console.log(json);
        return json;        // this return the all data and allow us use it in following promises
    } catch (err) {
        console.log('%c Ohh this is the error => ', 'color: red; font-size:15px', err);
        
    }
}

// Extract the data from the async/await

request()
    .then(
        (json) => {     // bring here all the JSON data
            // console.log(json);
            var {bombo1, bombo2, bombo3, bombo4} = json;
            // console.log(bombo1);
            // console.log(bombo2);
            // console.log(bombo3);
            // console.log(bombo4);

            var getTeams = (bomboValues) => {
                var bomboKeys = Object.keys(bomboValues);
                for (const keysObj in bomboKeys) {
                    // console.log(keysObj); 
                    // console.log(bomboKeys[keysObj]);
                    var a = bomboKeys[keysObj];
                    console.log(bomboValues[a]); // access to Teams Objects   
                }
            }

            // access to all the bombos teams

            for (let bomboVal = 1; bomboVal <= 4; bomboVal++) {
                // console.log(bomboVal);
                var currentBombo = 'bombo' + bomboVal;
                console.log(currentBombo);
                getTeams(eval(currentBombo));
            }

            // getTeams(bombo1);
            
                    
        }    
    )

