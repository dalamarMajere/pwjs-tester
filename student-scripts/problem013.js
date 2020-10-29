function parametricSort(a, b) {
    if (b == 'asc') return a.sort((a, b) => a - b)
    if (b == 'desc') return a.sort((a, b) => b - a)
    return false;
}