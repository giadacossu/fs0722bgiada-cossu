abstract  class Tasse {
  tasseinps: number;
  tasseirpef: number;
  constructor(
    tasseinps: number,tasseirpef: number) {
    this.tasseinps = tasseinps;
    this.tasseirpef = tasseirpef;
  }

}



class commerciante extends Tasse {
  codredd: number;
  redditoannuolordo: number;
constructor (codredd: number,redditoannuolordo: number,tasseinps: number,tasseirpef: number){
super(tasseinps,tasseirpef )
this.codredd = codredd;
this.redditoannuolordo =redditoannuolordo
}
getUtileTasse(){
  return this.redditoannuolordo * this.codredd;
}
getTasseInps(){
  return this.redditoannuolordo * this.tasseinps
}
getTasseIrpef(){
  return this.redditoannuolordo * this.tasseirpef
}
getredditoannuonetto(){
  return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd
}
}
class liberoProfessionista extends Tasse {
  codredd: number;
  redditoannuolordo: number;
constructor (codredd: number,redditoannuolordo: number,tasseinps: number,tasseirpef: number){
super(tasseinps,tasseirpef )
this.codredd = codredd;
this.redditoannuolordo =redditoannuolordo
}
getUtileTasse(){
  return this.redditoannuolordo * this.codredd;
}
getTasseInps(){
  return this.redditoannuolordo * this.tasseinps
}
getTasseIrpef(){
  return this.redditoannuolordo * this.tasseirpef
}
getredditoannuonetto(){
  return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd
}
}

class artigiano extends Tasse {
  codredd: number;
  redditoannuolordo: number;
constructor (codredd: number,redditoannuolordo: number,tasseinps: number,tasseirpef: number){
super(tasseinps,tasseirpef )
this.codredd = codredd;
this.redditoannuolordo =redditoannuolordo
}
getUtileTasse(){
  return this.redditoannuolordo * this.codredd;
}
getTasseInps(){
  return this.redditoannuolordo * this.tasseinps
}
getTasseIrpef(){
  return this.redditoannuolordo * this.tasseirpef
}
getredditoannuonetto(){
  return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd
}
}
let luca = new commerciante(0.58,20000,0.25, 0.30)
let anna = new liberoProfessionista(0.58,20000,0.25, 0.30)
let laura = new artigiano(0.58,20000,0.25, 0.30)
console.log(luca.getUtileTasse())
console.log(luca.getTasseInps())
console.log(luca.getTasseIrpef())
console.log(luca.getredditoannuonetto())

console.log(anna.getUtileTasse())
console.log(anna.getTasseInps())
console.log(anna.getTasseIrpef())
console.log(anna.getredditoannuonetto())

console.log(laura.getUtileTasse())
console.log(laura.getTasseInps())
console.log(laura.getTasseIrpef())
console.log(laura.getredditoannuonetto())