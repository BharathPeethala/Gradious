var data = require('./players.json')

console.log(data['players']);

for(const i of data['players']){
    console.log(i['name'],i['age'])
}

