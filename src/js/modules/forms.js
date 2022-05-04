import checkNumberInput from "./checkNumberInput";
import { closeModal } from "./modals";
const forms = (state) => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
      
     checkNumberInput('input[name="user_phone"]');

    const message = {
      loading: 'Загрузка',
      success: 'Спасибо мы с вами свяжемся',
      erorr: 'Что то пошло не так'
    }

    const postInfromation = async (url, data) => {
      document.querySelector('.status').innerHTML = message.loading;
      const res = await fetch(url, {
        method: 'POST',
        body: data
      })

      return await res.text();
    }

    form.forEach(item => {
      item.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.append(statusMessage);

        const dataForm = new FormData(item);

        if(item.getAttribute('data-end') === 'end') {
          for(let key in state) {
            dataForm.append(key, state[key]);
          }
        }

        postInfromation('assets/server.php', dataForm)
          .then(res => {
            console.log(res);
            statusMessage.innerHTML = message.success;
          }) .catch(() => {
            statusMessage.innerHTML = message.erorr;
          }) 
          .finally(() => {
            clearInputs();
            for(let key in state) {
              delete state[key];
            }
            setTimeout(() => {
              statusMessage.remove();
              closeModal('.popup_calc_end');
            }, 2000);
          })

      });
    });

    const clearInputs = () => {
      inputs.forEach(item => {
        item.value = '';
      });
    }
}

export default forms;