let Vectors =  {
    sum(a, b) {
        if (a.length == b.length) {
            for (let i = 0; i < a.length; i++)
                a[i] += b[i];
            return a;
        }
        return false;
    }, 

    mulByScalar(a, b) {
        if (a instanceof Array && typeof b == "number")
        {
            for (let i = 0; i < a.length; i++)
                a[i] *= b;
            return a;
        }
        return false;
    }
}
