const colors = ['#bdccf2', '#edd9ca', '#ddedca', '#fcf8bb', '#caedeb', '#d5bdf2'];

export const colorById = (id: number) => {
    return colors[id % colors.length];
}
