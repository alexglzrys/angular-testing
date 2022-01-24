export function incrementar(numero: number): number {
    if (numero > 100) {
        return 100;
    }
    return numero + 1;
}