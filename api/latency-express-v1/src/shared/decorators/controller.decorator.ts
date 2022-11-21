export const Controller = (): ClassDecorator => {
    return <TFunction extends Function>(target: TFunction): TFunction => {
        return target
    }
}
