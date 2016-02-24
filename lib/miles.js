module.exports = {
  hasEnoughGas: function (car, route) {
    return car.mpg * car.gallonsInTank > route.miles
  }
}
