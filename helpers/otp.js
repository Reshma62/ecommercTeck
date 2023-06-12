const otpGenarator = () => {
  const randomNumber = Math.round(Math.random() * 10000);
  let randomStr = randomNumber + "";
  if ( randomStr.length === 4 )
  {
    console.log(randomNumber);
    return randomNumber;
  } else
  {
    console.log(randomNumber);
    return otpGenarator();
  }

};
module.exports = otpGenarator;
