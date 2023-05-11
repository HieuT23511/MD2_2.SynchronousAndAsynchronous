const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error("Error... :(( I am sad. I Cant go to the "));
            }
        }, 2000);
    });
};
function onMyBirthdayScript (boolean){
    onMyBirthday(boolean)
        .then((result) => {
            console.log(`I have ${result} cakes for`);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => {
            console.log(" Party");
        });
}
onMyBirthdayScript(false);