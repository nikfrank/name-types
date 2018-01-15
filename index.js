module.exports = function(file, api, options) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.VariableDeclarator)
    .forEach(path => {
      console.log(path.value.id.name);
      console.log(path.value.init.value);
    })
    .toSource();
};


// next steps:
/*

1) why is this in a transform? -> should it be naming your vars for you?
2) get params and classes and everything
3) compile together the types:
  i) static values (N, S, [], {}, Date or other constructed OO, fn, fa, ...)
 ii) computed values (named variables can have type inferred)
iii) functions return a type, which may be a function which returns a type ...
 iv) classes might be a mess, or named functions, catch blocks, ...
  v) object shapes are a type...
 vi) types can be declared by inference from example?

4) resolve connexions between the names (adjectiveNoun, or other patterns) and the types!
5) complain about inconsistencies
6) fix them automatically?

*/
