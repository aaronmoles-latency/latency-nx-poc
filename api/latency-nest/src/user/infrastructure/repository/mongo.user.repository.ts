import UserRepository from "../../domain/user.repository";

export default class MongoUserRepository implements UserRepository {
    async save(): Promise<void> {
        console.log('SAVE');
    }

    async find(): Promise<any> {
        console.log('FIND');
        return [];
    }
}
