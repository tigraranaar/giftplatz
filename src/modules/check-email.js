const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let correctEmail = (email) => email.match(mailformat);

export {correctEmail};
