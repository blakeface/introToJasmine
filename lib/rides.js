module.exports = {
  isTooShort: function( child, ride) {
    return child.height >= ride.minHeight;
  },
  isTallEnough: function (child, ride){
    return child.height >= ride.minHeight && child.height <= ride.maxHeight;
  }
  
}
