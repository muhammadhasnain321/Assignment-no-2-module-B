

var mobiles = {
  iphone: {
    iphone7: {
    },
    iphone8: {},
    iphone8plus: {},
    iphoneX: {},
    iphone11: {},
  },
  xiomi: {
    redmiA2: {},
    redmi10: {},
    redmi11: {},
    redmi12: {},
    redmi13: {},
    redmi13C: {},
  },
  realme: {
    realmiNote50: {},
    realmiC67: {},
    realmiC53: {},
    realmi9: {},
    realmi9i: {},
  },
  tecno: {
    spark20: {},
    spark20Pro: {},
    spark20C: {},
    POVA6: {},
    PhantomV: {},
  },
};

 
 var brand = document.getElementById("brand");
 var model = document.getElementById("model");
 var resultDiv = document.getElementById("result")
 var allBrands = Object.keys(mobiles);
 for (var i=0; i< allBrands.length; i++){

   brand.innerHTML += `<option>${allBrands[i]}</option>`;
   }

 
function selectBrand() {
  var selectedBrand = brand.value;
  var allModels = Object.keys(mobiles[selectedBrand]);
  // model.innerHTML = "";
  for (var i = 0; i < allModels.length; i++) {
    model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}</option>`;
    resultDiv.innerHTML = '';
  }
}

function selectModel() {
  var selectedModel = model.value;
  resultDiv.innerHTML = `<p>You selected brand name is:</p> <b> ${brand.value}</b> <br> <p>You selected Model is:</p> <b>${selectedModel}<b>`;
}


  
  
