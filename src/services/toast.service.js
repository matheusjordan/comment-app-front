const successToast = (c, msg) => {
    c.$toast.success(msg);
}

const infoToast = (c, msg) => {
    c.$toast.info(msg);
}

const errorToast = (c, msg) => {
    c.$toast.error(msg);
}


export {
    successToast,
    infoToast,
    errorToast
}