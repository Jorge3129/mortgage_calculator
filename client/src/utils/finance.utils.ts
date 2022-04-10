export const money = (num: number) => {
    return (num + '')
        .split('')
        .map((ch, i, {length}) =>
            (length - i) % 3 === 0 ? ' ' + ch : ch
        )
        .join('') + '$'
}

export const calculateMortgage = (num: number) => {

}
