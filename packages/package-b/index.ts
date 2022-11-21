import {packageA} from "package-a";

export function packageB() {
    packageA()
    console.log('Package B')
}
