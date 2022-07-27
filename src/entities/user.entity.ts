let _id = 1

export class User {
	id: number
	name: string
	constructor(args: { name: string }) {
		this.id = _id++
		this.name = args.name
	}

	changeName(changedName: string) {
		if (changedName.length < 3) {
			throw new ShortNameException('이름이 너무 짧아요.')
		}
		
		this.name = changedName
	}
}

export class ShortNameException extends Error {
	constructor(msg: string) {
		super(msg)
	}
}
