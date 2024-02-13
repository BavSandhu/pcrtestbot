class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.MENU;
        aReturn.push("Welcome to Bav's Bubble Tea.");
        aReturn.push("Would you like to order from Toronto's most popular Bubble Tea location?");
        return aReturn;
      },
      MENU: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.SIZE;
        aReturn.push("What type of bubble tea would you like to order?"); 
        aReturn.push("We have Taro Milk Tea and Mango Milk Tea");
        return aReturn;
      },
      SIZE: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.TOPPINGS;
        aReturn.push("What size of bubble tea would you like to order?"); 
        aReturn.push("We have small, medium and large");
        return aReturn;
      },
       TOPPINGS: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.CONFIRM;
        aReturn.push("What kind of toppings would you like to add?"); 
        aReturn.push("We have tapioca, mango jelly and lychee jelly");
        return aReturn;
      },
      CONFIRM: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }