'use strict';
// const openForm = 

const navigation=document.querySelector('.body');
const nav=document.querySelector('.navigation');
const account1 = {
  movements: ['ቅኔ ምንድን ነው?', 'ቅኔ መቸ ተጀመረ?', 'የግእዝ ቅኔ ምንድን ነው?', 'አማርኛ ቅኔ ምንድን ነው?', 'የአማርኛ ቅኔ እና የግእዝ ቅኔ ልዩነት ምንድን ነው?']
}
const containerMovements = document.querySelector('.movements');

const movements = ['ቅኔ ምንድን ነው?', 'ቅኔ መቸ ተጀመረ?', 'የግእዝ ቅኔ ምንድን ነው?', 'አማርኛ ቅኔ ምንድን ነው?', 'የአማርኛ ቅኔ እና የግእዝ ቅኔ ልዩነት ምንድን ነው?'];


const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const html = `
<div class="movements__row">
  <div class="movements__value">${i + 1}=${mov}</div>
</div>`
    containerMovements.insertAdjacentHTML('beforeend', html);
  })
}
displayMovements(account1.movements);


const navFun=function(entries){
const [selam]=entries;
if(sealm.isIntersecting)
nav.classList.remove('sticky');
else 
nav.classList.add('sticky');
}

const navOb={
  root:null,
  threshold:0,
}


const navigationObserver=new IntersectionObserver(navOb,navFun);
navigationObserver.observe(navigation);

// const obsCallback = function (entries) {
//   const [selam] = entries;
//   if (selam.isIntersecting
//     === false)//  which is similar to  this one =if(!sealm.isIntersecting) because we know that isIntersecting return boolean value.
//    { nav.classList.remove('sticky');
//   console.log(selam);
// }

//   else {nav.classList.add('sticky');
//   console.log(selam);
// }
// }

// const headerObserver = new IntersectionObserver(obsCallback, obsOptions);
// headerObserver.observe();