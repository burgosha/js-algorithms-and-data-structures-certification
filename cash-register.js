function checkCashRegister(price, cash, cid) {
    //Define los tres status posibles:
    const insufficientFunds = {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  
    const closed = {
      status: "CLOSED",
      change: [...cid]
    }
  
    const open = {
      status: "OPEN",
      change: []
    }
  
    //Arreglo de Unidades Monetarias
    let currUnit = [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01]
    ]
  
    //Cálculo del total de la caja ingresada
    let cidTotal = parseFloat(cid.reduce((a,b) => a + b[1], 0)).toFixed(2); //Número redondeado a dos decimales
    
    //Cálculo del valor del vuelto
    let changeVal = parseFloat(cash - price).toFixed(2);
  
  //Casos:
  
    //Primer caso: Efectivo de caja menor al cambio necesario
    if(cidTotal * 100 < changeVal * 100) { //Multiplica por 100 para evitar error con números float
      return insufficientFunds;
    }
  
    //Segundo caso: Efectivo de caja igual al cambio necesario
    if(cidTotal === changeVal) {
      return closed;
    }
  
    //Efectivo de caja mayor al cambio necesario - Se calcula vuelto
  
    for(let i = 0; i < currUnit.length ; i++) {
      let currUnitName = currUnit[i][0];
      let currUnitVal = currUnit[i][1];
      let totalDispCash = cid.find(item => item[0] === currUnitName)[1];
  
      //Situaciones
      //El valor del cambio es mayor a la unidad monetrai y al dinero disponible de dicha unidad
      if(changeVal > currUnitVal && changeVal > totalDispCash) {
        //Resta al cambio el dinero disponible
        changeVal -= totalDispCash;
        //Devuelve el resultado al arreglo del objeto open
        open.change.push([currUnitName, totalDispCash]);
  
      } else if (changeVal > currUnitVal && totalDispCash > changeVal)
      //El valor del cambio es mayor a la unidad monetaria pero menor al dinero disponible de dicha unidad
      {
        let q = Math.floor(changeVal / currUnitVal) * currUnitVal; //Cálculo de un coeficiente
        changeVal -= q; //Resta el coeficiente
        changeVal = parseFloat(changeVal).toFixed(2); //Corrije número resultado
        open.change.push([currUnitName, q]) //Empuja resultado al arreglo del objeto open
      }
    }
  
    //El cambio es mayor a cero y no se cumple ninguna de la otras condiciones
    if(changeVal > 0) {
      return insufficientFunds;
    }
  
    //Devuelve el objeto open para todas las situaciones
    return open;
  }
  
  
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))