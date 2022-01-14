// 2021-01-14
// GenerateQRCodeWeb
// https://github.com/BaseMax/GenerateQRCodeWeb

// Elements
const qrdata_elm = document.querySelector("#qr-data")
const qrcode_elm = document.querySelector("#qr-code")

// QRCode
const qrcode = new QRCode(qrcode_elm)
// QR-Code generator
const generateQrCode = (value) => {
  qrcode.makeCode(value)
}

// Events
qrdata_elm.addEventListener("change", () => {
  generateQrCode(qrdata_elm.value)
})
qrdata_elm.addEventListener("input", () => {
  generateQrCode(qrdata_elm.value)
})
