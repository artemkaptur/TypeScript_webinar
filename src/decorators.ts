export function sealed(p: string) {
    return function (target: Function): void {
        console.log(`Sealing the constructor ${p}`);
        console.log(target.prototype);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}

export function logger<T extends Function>(target: T): T {
    let newConstructor: Function = function () {
        console.log('Creating new instanse');
        console.log(target);
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <T>newConstructor;
}
export function writable(isWritable: boolean) {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
        console.log('Decorator method: ${methodName}');

        descriptor.writable = isWritable;
    };
}