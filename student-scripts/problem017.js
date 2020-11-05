function compose(...args) {
    return function(x) {
        for (let i = args.length - 1; i >= 0; i--)
            x = args[i](x);
        return x;
    }
}