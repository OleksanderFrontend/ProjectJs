const checkNumberInput = (selector) => {
  const numberInput = document.querySelectorAll(selector);

  numberInput.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
} 

export default checkNumberInput;