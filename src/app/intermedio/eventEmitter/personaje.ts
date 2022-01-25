import { EventEmitter } from "@angular/core";

export class Personaje {

  // Puntos de vida
  public puntos_vida: number;
  public puntosVidaActualizados: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
    this.puntos_vida = 100;
  }

  // Al recibir un golpe mis puntos de vida se ven afectados
  recibeGolpe(poder: number): void {
    if (poder >= this.puntos_vida) {
      this.puntos_vida = 0;
    } else {
      this.puntos_vida -= poder;
    }
    // Emitir un evento personalizado, avisando sobre los puntos de vida actuales que tiene el personaje
    this.puntosVidaActualizados.emit(this.puntos_vida);
  }

}
