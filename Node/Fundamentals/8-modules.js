//exporting encapsuladed code per default
const sayHi = require('./2-utils')
const names = require('./1-names')


require('./7-mind-granade') // it runs the function called in mind-granade, it only runs the function because the function was previously called in the origin function file
sayHi('Susan')
sayHi(names.John)
sayHi(names.Peter)