import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sum: number;
        for (let x: number = 0; x < items.length; x++){
            sum += items[x].massKg;
        }
        // items.forEach(element => function(element) {
        //     sum += element.massKg;
        // })
        return sum;
    }

    currentMassKg(): number {
        let totalMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
        return totalMass;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}