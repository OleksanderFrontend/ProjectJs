import checkNumberInput from "./checkNumberInput";
const changeModalState = (state) => {
  const windowsForms = document.querySelectorAll('.balcon_icons_img '),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    viewType = document.querySelectorAll('#view_type'),
    checkbox = document.querySelectorAll('.checkbox');

  checkNumberInput('#width');
  checkNumberInput('#height');

  function bindchangeModal(elem, event, prop) {


    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;

          case "INPUT":
            if(item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              elem.forEach((box, j) => {
                box.checked = false;
                if(i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;

             case "SELECT":
              state[prop] = item.value;
             break;
        }
      });
    });
  }

  bindchangeModal(windowsForms, 'click', 'forms');
  bindchangeModal(windowWidth, 'input', 'width');
  bindchangeModal(windowHeight, 'input', 'height');
  bindchangeModal(viewType, 'change', 'type');
  bindchangeModal(checkbox, 'change', 'profile');

}

export default changeModalState;