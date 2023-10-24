var set = new Set(['bharath','mani','mani'])


for(let i of set){
    console.log(i);
}

for(let i=0;i<5;i++){
    set.add('std:'+i)
}

console.log(set);
