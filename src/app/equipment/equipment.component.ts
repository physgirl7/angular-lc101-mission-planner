import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})

export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   cargoFull: boolean = false;
   massRemaining: number = 2000;
   tooClose: boolean = false;
   

   constructor() { }

   ngOnInit() { }

   addItem(equipment: object[]){
    this.cargoHold.push(equipment);
    this.cargoMass = this.cargoMass + equipment["mass"];
    this.massRemaining = this.maximumAllowedMass - this.cargoMass;
    if(this.massRemaining<= 200){
      this.tooClose = true;
      return true;
    }
   }

   checkCargoFull(item: object){
    if(this.cargoHold.length === this.maxItems){
      return true;
    } else if(this.cargoMass + item["mass"] >= this.maximumAllowedMass){
      return true;
    } else{
    return false;
    }
   }

  //  tooClose(){
  //   if(this.maximumAllowedMass - this.cargoMass <= 200){
  //     return true;
  //  }
  // }

  resetCargo(){
    this.cargoHold = [];
    this.cargoMass = 0;
    this.tooClose = false;
    this.massRemaining = this.maximumAllowedMass;
  }
}
