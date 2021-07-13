const tasks = () => {
    const email1 = document.getElementById('form1-email');
    const email2 = document.getElementById('form2-email');
    const email3 = document.getElementById('form3-email');
    const btn1 = document.querySelector('.form-btn');
    // const btn2 = document.querySelectorAll('.form-btn')[5];
    // const btn3 = document.querySelectorAll('.form-btn')[4];
    const body = document.querySelector('body');
    email1.setAttribute('required', 'true');
    email2.setAttribute('required', 'true');
    email3.setAttribute('required', 'true');

    body.addEventListener('input', (e) => {
    let target = e.target;

    if (e.inputType === 'insertFromPaste') {
        target.value = '';
        return;
    }
    
    if (target.matches('#form3-name,#form2-name,#form2-message,#form1-name')) {
        target.value = target.value.replace(/[^а-я\s\-]/i,'');
    } else if (target.matches('#form3-email,#form2-email,#form1-email')) {
        target.setAttribute('required', 'true');
        target.value = target.value = target.value.replace(/[^a-z\@\-\_\.\!\~\*\']/gi, '');
    } else if(target.matches('#form3-phone,#form2-phone,#form1-phone')) {
        target.value = target.value.replace(/[^\+\d\(\)\-]/i, '');
        target.setAttribute('maxlength', '12');
    }
    });

    body.addEventListener('focusout', (e) => {
    let target = e.target;

    if (target.value) {
        if (target.matches('#form3-name,#form2-name,#form2-message,#form1-name')) {
            // target.value = target.value.replace(/^\s+|\s+$/g, '');
            if (target.value.length < 2){
                target.classList.add("error");
                target.focus();
            } else{
                target.classList.remove("error");
            }
        } else if (target.matches('#form3-email,#form2-email,#form1-email')) {
            // target.value = target.value.replace(/^\-+|\-+$/g, '');
            // target.value = target.value.replace(/\-{2,}/g, '-');
            if (!target.value.includes('.')){
                target.classList.add("error");
                target.focus();
            } else {
                target.classList.remove("error");
            }
        } else if (target.matches('#form3-phone,#form2-phone,#form1-phone')) {
            // target.value = target.value.replace(/^\-+|\-+$/g, '');
            // target.value = target.value.replace(/\-{2,}/g, '-');
            console.log(target.value.length);
            if (target.value[0] !== '+' && target.value[0] !== '8'){
                btn1.setAttribute('disabled', 'true');
                // btn2.setAttribute('disabled', 'true');
                // btn3.setAttribute('disabled', 'true');
                target.classList.add("error");
                target.focus();
            } else{
                btn1.removeAttribute('disabled');
                // btn2.removeAttribute('disabled');
                // btn3.removeAttribute('disabled');
                target.classList.remove("error");
            }
        }
        if (target.matches('#form3-name,#form2-name,#form1-name')) {
            let str = target.value;
            str = str.split(' ');
            str.forEach((el, id) => str[id] = el[0].toUpperCase() + el.substring(1).toLowerCase());
            str = str.join(' ');
            target.value = str;
        }
    }
    });
};

export default tasks;