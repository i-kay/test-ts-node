// import { User } from '../entities/user.entity'
import { User } from '@entities/user.entity'

export class UserFactory {
	createUser({ name }: { name: string }) {
		return new User({ name })
	}
}
