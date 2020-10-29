function deepFindAndCount(a, b) {
    let ans = 0;
    for (let i = 0; i < a.length; i++)
    {
        if (typeof a[i] == typeof b) {
            if (a[i] == b)
                ans++; 
        }
        else ans += deepFindAndCount(a[i], b);
    }
    return ans;
}