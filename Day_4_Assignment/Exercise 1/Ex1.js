const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // The output will be 2 as we are doing the shallow copy and in that primitive datatype remains unmutable while the non primitive datatype can be mutate.
console.log(registry.active[0].name); // Gama the reason is as above only
console.log(registry.version);       // undefined as the version is primitive and will not be added in registery so when it will find there but will be undefined as registery doesn't have version 
