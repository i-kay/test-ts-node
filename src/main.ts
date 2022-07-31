import { ShortNameException, User } from './entities/user.entity'
import { UserFactory } from './services/UserFactory.service'
// import { UserFactory } from '@services/UserFactory.service'

const userFactory = new UserFactory()
const user1 = userFactory.createUser({ name: 'AAA' })
const user2 = new User({ name: 'BBB' })

try {
	user1.changeName('AB')
} catch(e) {
	console.log('AAA')
	console.log(e.constructor.name) // ShortNameException
	console.log(e instanceof ShortNameException) // false
}

try {
	user2.changeName('BC')
} catch (e) {
	console.log('BBB')
	console.log(e.constructor.name) // ShortNameException
	console.log(e instanceof ShortNameException) // true
}
