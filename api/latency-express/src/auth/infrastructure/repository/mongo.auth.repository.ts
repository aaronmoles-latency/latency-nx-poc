import {AuthRepository} from "../../domain/auth.repository";
import {Repository} from "../../../shared/decorators/repository.decorator";

@Repository()
export default class MongoAuthRepository implements AuthRepository {
    async save(): Promise<void> {
        console.log('SAVE AUTH -> MONGO REPOSITORY')
    }
}
