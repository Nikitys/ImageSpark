export default {
  init() {
    window.pluralize = function (count, one, two, five) {
      let reason = Math.abs(count)
      one = one || one
      two = two || one
      five = five || one
      reason %= 100
      if (reason >= 5 && reason <= 20) {
        return five
      }
      reason %= 10
      if (reason === 1) {
        return one
      }
      if (reason > 1 && reason < 5) {
        return two
      }
      return five
    }
  }
}