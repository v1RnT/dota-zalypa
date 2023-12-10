const fs = require('fs');
const d2gsi = require('dota2-gsi');
const server = new d2gsi();
 
let clients = [];
 
server.events.on('newclient', function(client) {
    console.log("New client connection, IP address: " + client.ip);
    if (client.auth && client.auth.token) {
        console.log("Auth token: " + client.auth.token);
    } else {
        console.log("No Auth token");
    }
    clients.push(client);
});

const isGameEnded = () => {
    const result = clients.map((client)=>{
        if (client.gamestate.map.matchid) {
            return ("Match is still going");
        }
        return ("Match Ended");
    });
    return result;
}

const getHeroInfo = () => {
    const result = clients.map((client, index) => {
        if (client.gamestate.hero && client.gamestate.hero.level) {
            return "Client " + index + " is level " + client.gamestate.hero.level;
        }
        return null;
    }).filter(Boolean);
    try{
        return result.join('\n');
    } catch(e){
        return `result.join('\n');` // Convert the array to a string with line breaks
    }
};
let dataJSON;
function getDataJSON(){
    clients.filter((client) => {
        dataJSON = client.gamestate
        console.log("dsadas");
        // fs.writeFile("./customer.json", dataJSON, err => {
        //     if (err) console.log("Error writing file:", err);
        // });
        return dataJSON.buildings;
    });
    
    return dataJSON.buildings;
}

//console.log(getDataJSON());
module.exports = { getHeroInfo, isGameEnded, getDataJSON }; // Export the function