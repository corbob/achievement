let set = (function() {
  let union = function(set) {
    try {
      let sets = new Set(set);
      for (let i = 1; i < arguments.length; i++) {
        for (const e of arguments[i]) sets.add(e);
      }
      return [...sets];
    } catch (err) {
      console.log(err.name, ": only accept arrays , strings or sets");
    }
  };

  let intersection = function(a, b) {
    try {
      let set = [];
      for (let i = 0; i < arguments.length; i++) {
        set.push(new Set(arguments[i]));
      }
      let result = set.reduce((a, b) => {
        return new Set([...a].filter(x => b.has(x)));
      });
      return [...result];
    } catch (err) {
      console.log(err.name, ": only accept arrays , strings or sets");
    }
  };

  let complement = (a, b) => {
    try {
      return a.filter(e => !b.includes(e));
    } catch (err) {
      console.log(err.name);
    }
  };

  return {
    union: union,
    intersection: intersection,
    complement: complement
  };
})();