function forEach(items, funcao) {
  for (let index = 0; index < items.length; index++) {
    funcao(items[index]);
  }
}
module.exports = forEach

