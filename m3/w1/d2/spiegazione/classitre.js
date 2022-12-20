"use strict";
// override -> la classe figlia ridfinisce il metodo della super classe 
class PrinterClass {
    doPrint() {
        console.log('doprint()  from parent callde ..');
    }
}
class StringPrinter extends PrinterClass {
    doPrint() {
        super.doPrint();
        console.log('doPrint() is a printing string..');
    }
}
var obw = new StringPrinter();
obw.doPrint();
