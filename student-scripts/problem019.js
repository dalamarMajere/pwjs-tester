function carry(a) {
    let size = a.length;
    let new_args = [];
    let curried = (...b) => new_args.push(...b) >= size ?
                    a(...new_args)
                    : curried;

    return curried;
}