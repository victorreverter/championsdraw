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

            var groupBox = [[], [], [], [], [], [], [], []];

            var groupA = groupBox[0],
            groupB = groupBox[1],
            groupC = groupBox[2],
            groupD = groupBox[3],
            groupE = groupBox[4],
            groupF = groupBox[5],
            groupG = groupBox[6],
            groupH = groupBox[7];

            // console.log(groupA);  
            // console.log(groupBox);

            var bomboOneBox = [];
            var bomboTwoBox = [];
            var bomboThreeBox = [];
            var bomboFourBox = [];

            // get the teams from the bombos

            var getTeams = (bomboValues) => {
                var bomboKeys = Object.keys(bomboValues);
                for (const keysObj in bomboKeys) {
                    // console.log(keysObj); 
                    // console.log(bomboKeys[keysObj]);
                    var allTeams = bomboKeys[keysObj];
                    // console.log(bomboValues[allTeams]); // access to Teams Objects

                    // console.log(bomboValues[allTeams].name);  
                    // console.log(bomboValues[allTeams].bomboNumber);

                    var bomboVal = bomboValues[allTeams].bomboNumber;
                    var bomboTeamObj = bomboValues[allTeams];                    
                    
                    if(bomboVal === 1) {                        
                        bomboOneBox.push(bomboValues[allTeams]);

                        orderTeams(bomboOneBox);

                        // console.log(bomboValues[allTeams].name);
                        // console.log('Coco is One');

                        // console.log(bomboOneBox);
                        
                        // if (bomboOneBox.length === 8) {

                        //     // console.log(bomboOneBox);
                        //     // console.log('Coco One is 8 teams now');

                        //     // drawerLogic(bomboOneBox);
                            
                        //     //Original Function to Draw

                        //     // var a = [0, 1, 2, 3, 4, 5, 6, 7];
                        //     // var b = [];

                        //     // for (let i = 0; i < a.length;) {
                        //     //     var c = Math.floor(Math.random() * 8);

                        //     //     // console.log(b);

                        //     //     if (b.includes(a[c])) {
                        //     //         continue;
                        //     //     } else {
                        //     //         b.push(a[c]);
                        //     //         i++;
                        //     //     }
                        //     // }

                        // }
                    } else if (bomboVal === 2) {
                        bomboTwoBox.push(bomboValues[allTeams]);
                        orderTeams(bomboTwoBox);
                    } else if (bomboVal === 3) {
                        bomboThreeBox.push(bomboValues[allTeams]);
                        orderTeams(bomboThreeBox);
                    } else {
                        bomboFourBox.push(bomboValues[allTeams]);
                        orderTeams(bomboFourBox);
                    }

                    function orderTeams(bomboBoxVal) {

                        if (bomboBoxVal.length === 8) {
                            drawerLogic(bomboBoxVal);
                            // console.log(bomboBoxVal);
                        }

                        function drawerLogic(bomboLabel) {
                            var a = [0, 1, 2, 3, 4, 5, 6, 7];
                            var b = [];

                            // console.log(b);                            

                            for (let i = 0; i < a.length;) {
                                var c = Math.floor(Math.random() * 8);

                                // console.log(b);

                                // if (b.includes(bomboLabel[c])) {
                                //     continue;
                                // } else {
                                //     b.push(bomboLabel[c]);
                                //     i++;
                                // }

                                if (b.includes(bomboLabel[c])) {
                                    continue;
                                } else {
                                    b.push(bomboLabel[c]);
                                    i++;
                                }
                                // console.log(b);
                                // console.log(groupBox[c]);
                            }

                            // Put all the Bombo 1 teams in their groups

                            for (let j = 0; j < b.length; j++) {

                                var countryGrab = [];

                                groupBox[j].push(b[j]);                                  
                                
                                // console.log(groupBox[j]);

                                for (let h = 0; h < groupBox[j].length; h++) {
                                    
                                    //------------------------------------------

                                    if (countryGrab.includes(b[j].country)) {

                                        console.log('country is the same');
                                        continue;

                                    } else {
                                        countryGrab.push(groupBox[j][h].country);
                                        // h++; // do not do that is an infinite loop
                                    }

                                    // countryGrab.push(groupBox[j][h].country);
                                    console.log(countryGrab);

                                    //-------------------------------------------                                
                                }
                            }
                                                      
                            // console.log(b);
                            // console.log(groupBox);

                            // -------------------------------------------
                        }

                    }
                    
                }
            }

            // access to all the bombos and the teams through the getTeams function

            for (let bomboVal = 1; bomboVal <= 4; bomboVal++) {
                // console.log(bomboVal);
                var currentBombo = 'bombo' + bomboVal;

                // console.log(currentBombo);
                getTeams(eval(currentBombo));
                // console.log(groupA);
                
            }

            //this is another test comment

            // getTeams(bombo1);            
                    
        }    
    )

