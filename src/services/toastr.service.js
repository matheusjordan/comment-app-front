import toastr from 'toastr';

const sucessToast = (msg) => {
    toastr.success(msg);
}

const infoToast = (msg) => {
    toastr.info(msg);
}

const errorToast = (msg) => {
    toastr.error(msg);
}


export {
    sucessToast,
    infoToast,
    errorToast
}