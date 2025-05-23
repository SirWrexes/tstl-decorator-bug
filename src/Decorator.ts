declare function print(...args: any[]): void

declare let Decorator: <Class, Params extends unknown[]>(
    this: unknown,
    cls: new (...params: Params) => Class,
    ctx: ClassDecoratorContext
) => void

Decorator = (cls, ctx) => {
    print(ctx.name)
}