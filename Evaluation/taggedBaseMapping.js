const input = [
  { id: 3, tags: ["a", "b"] },
  { id: 1, tags: ["b", "c"] },
  { id: 2, tags: ["a", "c", "d"] },
  { id: 2, tags: ["d", "e"] }
];

function tagMapping(arr){

    const tagMap =  arr.reduce((acc, item) => {

        const {id, tags} = item;

        tags.forEach(tag => {
            
            if(!acc[tag]){
                acc[tag] = []
            }

            if(acc[tag].includes(id) !== true){
                acc[tag].push(id)
            }
        });

        return acc
    }, {})

    const output = {}

    for (const tag in tagMap) {
        output[tag] = [...tagMap[tag]].sort((a,b) => a-b)
    }

    return output
}

console.log(tagMapping(input));
