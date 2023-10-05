const liff = window.liff;

document.addEventListener('DOMContentLoaded', (event) => {
  liff
    .init({ liffId: "1657923072-yxmxZ8Ak" })
    .then(() => {
      console.log('Success! you can do something with LIFF API here.');
    })
    .then(()=>{
      console.log(liff.getProfile())
    })
    .catch((error) => {
      console.log(error);
      
    });
});
