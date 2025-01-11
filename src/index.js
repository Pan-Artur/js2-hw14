// Task 1

const startTask1 = () => {
  const delayedPromise = (value, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), delay);
    });
  };

  function getRandomDelay() {
    let min = 1000;
    let max = 5000;
    return Math.floor(Math.random() * (max - min) + min);
  }

  const delayA = getRandomDelay();
  const delayB = getRandomDelay();
  const delayC = getRandomDelay();
  const delayD = getRandomDelay();
  const delayE = getRandomDelay();

  const promiseA = delayedPromise(`promiseA worked during ${delayA}ms`, delayA);
  const promiseB = delayedPromise(`promiseB worked during ${delayB}ms`, delayB);
  const promiseC = delayedPromise(`promiseC worked during ${delayC}ms`, delayC);
  const promiseD = delayedPromise(`promiseD worked during ${delayD}ms`, delayD);
  const promiseE = delayedPromise(`promiseE worked during ${delayE}ms`, delayE);

  Promise.all([promiseA, promiseB, promiseC, promiseD, promiseE]).then(
    (values) => {
      console.log(values);
    }
  );
};

startTask1();

// Task 2

const startTask2 = () => {
  const randomDelay = (value) => {
    return new Promise((resolve) => {
      let min = 1000;
      let max = 5000;
      let delay = Math.floor(Math.random() * (max - min) + min);

      setTimeout(() => resolve({ value, delay }), delay);
    });
  };

  const promiseA = randomDelay("promiseA");
  const promiseB = randomDelay("promiseB");
  const promiseC = randomDelay("promiseC"); 
  const promiseD = randomDelay("promiseD");
  const promiseE = randomDelay("promiseE");

  Promise.race([promiseA, promiseB, promiseC, promiseD, promiseE]).then((result) => {
    console.log(`It turned out to be the fastest promise - ${result.value}, he worked during ${result.delay}ms`,);
  }).catch((error) => {
    console.error("Error!", error);
  });
};

startTask2();
