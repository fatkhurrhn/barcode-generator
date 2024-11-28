import JsBarcode from 'jsbarcode';

const generateBtn = document.getElementById("generateBtn");
const barcodeInput = document.getElementById("barcodeInput");
const barcodeSVG = document.getElementById("barcode");

generateBtn.addEventListener("click", () => {
  const inputValue = barcodeInput.value.trim();
  if (!inputValue) {
    alert("Please enter some text!");
    return;
  }
  
  // Generate Barcode
  JsBarcode(barcodeSVG, inputValue, {
    format: "CODE128",
    lineColor: "#fff",
    width: 2,
    height: 100,
    displayValue: true,
  });
});
