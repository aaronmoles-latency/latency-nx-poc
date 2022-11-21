import UserRepository from "../../../src/user/domain/user.repository";

export default class MockUserRepository implements UserRepository {
    private readonly saveSpy = jest.fn()

    async find(): Promise<any> {
        return [];
    }

    async save(): Promise<void> {
        this.saveSpy()
    }

    toHaveBeenCalledSave() {
        expect(this.saveSpy).toHaveBeenCalled()
    }
}
