// Immediately Invoked Function Expression(IIFE) is used because of global scope's pollution,so to avoid that pollution or global scope's variables.(and it makes function to run immediately)

(function chai() {
    //Named IIFE (chai)
    console.log('DB CONNECTED');
})();
//DB CONNECTED
//chai(); O/P=> DB CONNECTED

//(Function Defination)(Execution Call) => as we wrapped funtion inside () paranthesis and then put () for execution call

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ANANYA');//DB CONNECTED TWO ANANYA