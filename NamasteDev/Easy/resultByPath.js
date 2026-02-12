const path = "data.results.status[0].name";

const obj = {
  data: {
    results: {
      status: [{ name: "Om" }, {}],
      error: "",
    }
  },
};


function getPath(path, obj) {
    const keys = path.replace(/\[(\d+)\]/g, ".$1").split(".");
    let current = obj;

    for (let key of keys) {
        if (current === null) {
        return null;
        }
        if (current === undefined) {
        return undefined;
        }
        current = current[key];
    }

    return current;
}



console.log(getPath(path, obj)); // Om
