export const waitFor = async (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(''), ms);
    })
}

export const isMobile = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
