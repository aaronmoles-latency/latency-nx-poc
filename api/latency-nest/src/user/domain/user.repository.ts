export default abstract class UserRepository {
    abstract save(): Promise<void>;

    abstract find(): Promise<any>;
}
