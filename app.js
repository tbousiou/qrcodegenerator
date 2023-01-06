const qrForm = document.getElementById("qr-form");
const qrImage = document.getElementById('qr-image');


const onGenerateSubmit = (e) => {
    e.preventDefault();
    clearUI();
    
    const qrText = document.getElementById("qr-input").value;
    const qrSize = document.getElementById("qr-size").value;
    
    generateQRCode(qrText, qrSize);
    createDownloadButton();
}

const generateQRCode = (url, size) => {

    const qrcode = new QRCode('qr-image', {
        text: url,
        width: size,
        height: size,
        colorDark: "#1D1D1D",
    });
}


// Clear QR code and save button
const clearUI = () => {
    qrImage.innerHTML = '';
};


// Create the button to downlaod the qr code image
const createDownloadButton = () => {

    let download_link = document.createElement("a");

    download_link.setAttribute("download", "qr_code.png");
    download_link.classList.add('btn', 'btn-info', 'd-block', 'mt-2');
    download_link.innerText = "Download";

    xx = document.querySelector("canvas").toDataURL();
    console.log(xx);

    setTimeout(() => {
        //download_link.setAttribute("href", qrImage.querySelector('img').src);
        download_link.setAttribute("href", xx);
    }, 300);

    qrImage.appendChild(download_link);
};

qrForm.addEventListener('submit', onGenerateSubmit);

