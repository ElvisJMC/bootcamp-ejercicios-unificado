interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

const IVA = 0.21;
const EXTRA_PERSONA = 40;
const EXTRA_DESAYUNO = 15;
const PRECIOS: Record<Reserva["tipoHabitacion"], number> = {
  standard: 100,
  suite: 150,
};

//------CLASE BASE:

class CalculadoraHotel {
  reservas: Reserva[];
  subtotal: number;
  iva: number;
  total: number;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.subtotal = 0;
    this.iva = 0;
    this.total = 0;
  }

  precioBaseNoche(reserva: Reserva): number {
    return PRECIOS[reserva.tipoHabitacion];
  }

  extraPorPersonas(reserva: Reserva): number {
    if (reserva.pax < 1) {
      throw new Error("Pax debe ser como mínimo 1");
    }

    return Math.max(0, reserva.pax - 1) * EXTRA_PERSONA;
  }

  extraPorDesayuno(reserva: Reserva): number {
    if (!reserva.desayuno) return 0;
    if (reserva.pax < 1) {
      throw new Error("Pax debe ser como mínimo 1");
    }

    return reserva.pax * EXTRA_DESAYUNO;
  }

  costePorNoche(reserva: Reserva): number {
    const base = this.precioBaseNoche(reserva);
    const extra = this.extraPorPersonas(reserva);
    const extraDesayuno = this.extraPorDesayuno(reserva);

    return base + extra + extraDesayuno;
  }

  costeLinea(reserva: Reserva): number {
    if (reserva.noches < 1) {
      throw new Error("Noches debe ser como mínimo 1");
    }
    return this.costePorNoche(reserva) * reserva.noches;
  }

  calcularIva(baseImponible: number): number {
    return baseImponible * IVA;
  }

  calcularSubtotal(): number {
    let sub = 0;
    for (const reserva of this.reservas) {
      sub += this.costeLinea(reserva);
    }
    this.subtotal = sub;

    return this.subtotal;
  }

  calcularTotal(): number {
    this.iva = this.calcularIva(this.subtotal);
    return (this.total = this.subtotal + this.iva);
  }

  calcularTotales(): number {
    this.calcularSubtotal();
    return this.calcularTotal();
  }
}

//----- Caso 1:

class CalculadoraClienteParticular extends CalculadoraHotel {
  constructor(reservas: Reserva[]) {
    super(reservas);
  }
}

const reservasParticular = new CalculadoraClienteParticular(reservas);
reservasParticular.calcularTotales();

console.log("Subtotal sin IVA :", reservasParticular.subtotal.toFixed(2));
console.log("IVA :", reservasParticular.iva.toFixed(2));
console.log("Total con IVA :", reservasParticular.total.toFixed(2));

//----- Caso 2:

const PRECIO_HABITACION_TOUR = 100;
const DESCUENTO_TOUR = 0.15;

class CalculadoraTourOperador extends CalculadoraHotel {
  subtotalDescuento: number;

  constructor(reservas: Reserva[]) {
    super(reservas);
    this.subtotalDescuento = 0;
  }

  precioBaseNoche(_reserva: Reserva): number {
    return PRECIO_HABITACION_TOUR;
  }

  calcularTotal(): number {
    const precioBase = this.subtotal;
    this.subtotalDescuento = precioBase * (1 - DESCUENTO_TOUR);
    this.iva = this.calcularIva(this.subtotalDescuento);
    this.total = this.subtotalDescuento + this.iva;
    return this.total;
  }
}

const reservasTour = new CalculadoraTourOperador(reservas);
reservasTour.calcularTotales();

console.log("[TOUR] Subtotal sin IVA:", reservasTour.subtotal.toFixed(2));
console.log(
  "[TOUR] Subtotal con descuento sin IVA:",
  reservasTour.subtotalDescuento.toFixed(2)
);
console.log("[TOUR] IVA:", reservasTour.iva.toFixed(2));
console.log("[TOUR] Total con IVA:  ", reservasTour.total.toFixed(2));
