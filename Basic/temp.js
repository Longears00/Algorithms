let toyota = {
    drive() {
        console.log('drive toyota');
    }
}

let camry = {
    wifi() {
        console.log('wifi')
    }
}

Object.assign(camry, toyota)

console.log(camry);

camry.drive()

toyota.drive = () => {
    console.log('drive toyota!!!');
}

toyota.drive()