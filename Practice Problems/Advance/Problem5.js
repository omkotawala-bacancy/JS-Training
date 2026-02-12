const apiResponse = [
  { id: 1, name: "A", tags: "x,y,z" },
  { id: 2, name: "B", tags: ["x", "y"] },
  { id: 3, name: "C" }
];

const result = apiResponse.reduce((acc, item) => {

    const {id, name, tags} = item
    
    if(!acc[id]){
        acc[id] = {}
        acc[id]["id"] = id;
        acc[id][name] = name 
        if(Array.isArray(tags)){
            acc[id]["tags"] = tags
        }
        else{
            if(tags){
                acc[id]["tags"] = tags.split(",");
            }
            else{
                acc[id]["tags"] = []
            }
        }
    }
    else{
        {}
    }
    return acc
}, {})

console.log(result);
