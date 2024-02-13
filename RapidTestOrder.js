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
      MENU: (sInput) =>{
        let aReturn = [];
        if(sInput.toLowerCase() === "yes"){
         this.stateCur = this.OrderState.SIZE;
        aReturn.push("What type of bubble tea would you like to order?"); 
        aReturn.push("We have Taro Milk Tea and Mango Milk Tea");
        }
        else{
            this.isDone = true;
            aReturn.push("Goodbye");
        }
        return aReturn;
      },
      SIZE: (sInput) =>{
        let aReturn = [];
        this.stateCur = this.OrderState.TOPPINGS;
        aReturn.push("What size of bubble tea would you like to order?"); 
        aReturn.push("We have small, medium and large");
        return aReturn;
      },
       TOPPINGS: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.UPSELL;
        aReturn.push("What kind of toppings would you like to add?"); 
        aReturn.push("We have tapioca, mango jelly and lychee jelly");
        return aReturn;
      },
       UPSELL: (sInput) =>{
        let aReturn = [];
         this.stateCur = this.OrderState.TIRAMISU;
        aReturn.push("Would you like a slice of Tiramisu cake on the side?"); 
        
        return aReturn;
      },
      TIRAMISU: (sInput) =>{
        let aReturn = [];
        if(sInput.toLowerCase() === "yes"){
        this.isDone = true; 
        aReturn.push("Lovely! It has been added"); 
        aReturn.push("Your order has been submitted! Thank you for ordering from Bav's Bubble Tea");
        }
        else{
            aReturn.push("No worries!");
            aReturn.push("Your order has been submitted! Thank you for ordering from Bav's Bubble Tea");
        }
        return aReturn;
      },
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