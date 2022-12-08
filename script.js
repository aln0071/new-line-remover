window.onload = () => {
    const textArea = document.getElementById('input-text')
    const convertButton = document.getElementById('convert')
    const copy = document.getElementById('convert-copy');
    convertButton.onclick = () => {
        const input = textArea.value;
        const convertedInput = input.replaceAll('\n', ' ');
        textArea.value = convertedInput;
        if(copy.checked) {
            navigator.clipboard.writeText(convertedInput)
        }
    }

    textArea.onfocus = () => {
        textArea.select();
    }
}