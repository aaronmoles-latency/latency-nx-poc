export const ControllerDecorator = (): ClassDecorator => {
    return <TFunction extends Function>(target: TFunction): TFunction => {
        return target
    }
}
