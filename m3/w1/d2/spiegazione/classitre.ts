// override -> la classe figlia ridfinisce il metodo della super classe 
class PrinterClass{
    doPrint():void{
        console.log('doprint()  from parent callde ..')
    }
}
 class StringPrinter extends PrinterClass{
    doPrint():void{
        super.doPrint()
        console.log('doPrint() is a printing string..')
    }
 }
  var obw = new StringPrinter()
  obw.doPrint()