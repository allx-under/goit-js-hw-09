import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name=delay]'),
  inputStep: document.querySelector('[name=step]'),
  inputAmount: document.querySelector('[name=amount]'),
};

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
  e.preventDefault();
  setTimeout(() => {
    for (let i = 0; i < refs.inputAmount.value; i += 1) {
    const position = i + 1;
      const delayStep = +refs.inputDelay.value + +refs.inputStep.value * i;
    createPromise(position, delayStep)
      .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
      .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
  }, refs.inputStep.value)
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else
        reject({ position, delay })
    }, delay)
  })
    return promise;
};