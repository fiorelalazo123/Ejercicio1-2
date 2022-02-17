

let values = {
  1: {
    carrier: 'CCH',
    service: 'DEX',
  },
  17: {
    carrier: 'CHP',
    service: 'express',
  }
};

let json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17
    }
  }
};


let firstText = document.getElementById('first-json');
firstText.innerHTML = `json = ${JSON.stringify(json)}`;

let secondText = document.getElementById('second-json');
secondText.innerHTML = `values = ${JSON.stringify(values)}`;

function resultJson() {
  const result = {};

  Object.keys(json.data).forEach(city => {

    const limit = json.data[city].limit;
    const over = json.data[city].over_carrier_service_id;
    const under = json.data[city].under_carrier_service_id;

    result[city] = {
      limit,
      over: {
        carrier: values[over].carrier,
        service: values[over].service
      },
      under: {
        carrier: values[under].carrier,
        service: values[under].service
      }
    };
  });

  let div = document.getElementById('result-div');

  div.innerHTML = `result = ${JSON.stringify(result)}`;
}

function primo() {
  let numberPrime = document.getElementById('result-number');

  const elementos = document.getElementById('prime-number').value;
  const primos = [];
  let iteraciones = 0;

  for (let i = 2; i <= elementos; i++) {
    let primo = true;
    for (let divisor = 2; divisor < i; divisor++) {
      iteraciones++;
      if (i % divisor === 0) {
        primo = !primo;
        break;
      }
    }
    if (primo) primos.push(i);

  }
  numberPrime.innerHTML = primos;

}

