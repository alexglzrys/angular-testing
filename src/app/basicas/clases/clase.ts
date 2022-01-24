export class Jugador {

  // Puntos de vida
  public hp: number;

  constructor() {
    this.hp = 100;
  }

  // Al recibir un golpe mis puntos de vida se ven afectados
  recibeGolpe(poder: number): number {
    if (poder >= this.hp) {
      this.hp = 0;
    } else {
      this.hp -= poder;
    }
    return this.hp;
  }

}
