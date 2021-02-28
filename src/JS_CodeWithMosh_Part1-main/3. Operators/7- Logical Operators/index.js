// Logical Operators

    //Logical AND (&&) --> returns TRUE if all are TRUE
    /*let highIncome = true;
    let goodCreditScore = true;
    let eligibleForLoan = highIncome && goodCreditScore;
    console.log(eligibleForLoan);*/
    
    //Logical OR (||) --> returns TRUE if one of them is TRUE
    let highIncome = false;
    let goodCreditScore = false;
    let eligibleForLoan = highIncome || goodCreditScore;
    console.log('Eligible',eligibleForLoan);
    
    //NOT(!)
    let applicationRefused = !eligibleForLoan;
    console.log('Application Refused',applicationRefused);
