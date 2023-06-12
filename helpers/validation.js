const emailValidation = (email) => {
  if ( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( email ) )
  {
    return true
  }
};
const passwordValidation = ( pass ) =>
{
  const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!paswd.test(pass)) {
    return true;
  } else
  {

  }
};

module.exports = { emailValidation, passwordValidation };
