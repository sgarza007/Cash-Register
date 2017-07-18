/*
*Author: Saul Garza
*Description: Cash register code with staff discount, voiding last transaction
*and giving total charge
*Note: Mock cash register only has eggs, chocolate, milk and magazine to scan
*/

//creates staff member with their discount percentage
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

//creating 3 different staff
var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember(“Saul“,20);


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){//adds item scanned to cost
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){//gets price of item and calls add fnc
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){//cancelling/subtracting last charge if needed
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    //applying starr discount to total
    applyStaffDiscount : function(employee){
        this.total -= (this.total * ((employee.discountPercent)/100))
    }
    
};
//testing code
cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
cashRegister.applyStaffDiscount(me);
console.log('Your bill is '+cashRegister.total.toFixed(2));
