type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado1:

//Ejercicio A.
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesAsignadosAPediatria = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesAsignadosAPediatria.push(pacientes[i]);
    }
  }
  return pacientesAsignadosAPediatria;
};

console.log(
  "Pacientes Asignados a pediatría:",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// Ejercicio B.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesEnPediatriaMenoresDe10Anios = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesEnPediatriaMenoresDe10Anios.push(pacientes[i]);
    }
  }
  return pacientesEnPediatriaMenoresDe10Anios;
};

console.log(
  "Pacientes asignados a padiatria menores de 10 años:",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

//Apartado2:

const activarProtocoloDeUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProtocolo = true;
      break;
    }
  }
  return activarProtocolo;
};

console.log(
  "Protoclo de emergencia activado:",
  activarProtocoloDeUrgencia(pacientes)
);

// Apartado 3:

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesReasignados = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      let pacientesModificados = {
        ...pacientes[i],
        especialidad: "Medico de familia" as Especialidad,
      };
      pacientesReasignados.push(pacientesModificados);
    }
  }
  return pacientesReasignados;
};

console.log(
  "Pacientes reasignados de pediatría a médico de familia:",
  reasignaPacientesAMedicoFamilia(pacientes)
);

// Apartado 4

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pacientesEnPediatria = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesEnPediatria = true;
      break;
    }
  }
  return pacientesEnPediatria;
};

console.log(
  "¿Hay pacientes en Pediatría?:",
  hayPacientesDePediatria(pacientes)
);

// Apartado 5:

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let totalPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      totalPacientesPorEspecialidad.medicoDeFamilia++;
    } else if (pacientes[i].especialidad === "Pediatra") {
      totalPacientesPorEspecialidad.pediatria++;
    } else if (pacientes[i].especialidad === "Cardiólogo") {
      totalPacientesPorEspecialidad.cardiologia++;
    }
  }
  return totalPacientesPorEspecialidad;
};

console.log(
  "Número total de pacientes por especialidad:",
  cuentaPacientesPorEspecialidad(pacientes)
);
