module.exports = {
  hasEnoughGas: function (car, route) {
    if ( car.mpg * car.gallonsInTank > route.miles )
      return true
    else return false
  }
}
