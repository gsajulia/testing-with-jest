function sumForEach(items, funcao) {
  var array = []
  for (let index = 0; index < items.length; index++) {
    array.push(funcao(items[index]) + index);
  }
  return array
}
module.exports = sumForEach

