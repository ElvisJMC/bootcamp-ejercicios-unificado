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

// Apartado 1

// Ejercicio a:

const listaPacientesAsignadosAPediatria: Pacientes[] = pacientes.filter(
  (paciente: Pacientes) => paciente.especialidad === "Pediatra"
);

console.log(
  "Pacientes Asignados a pediatría:",
  listaPacientesAsignadosAPediatria
);

// Ejercicio b:

const pacientesEnPediatriaMenoresDe10Anios: Pacientes[] = pacientes.filter(
  (paciente: Pacientes) =>
    paciente.especialidad === "Pediatra" && paciente.edad < 10
);

console.log(
  "Pacientes en pediatría menores de 10 años:",
  pacientesEnPediatriaMenoresDe10Anios
);

// Apartado 2

const activarProtocoloDeUrgencia: boolean = pacientes.some(
  (paciente: Pacientes) =>
    paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
);

console.log("Activar protocolo de Urgenica:", activarProtocoloDeUrgencia);

// Apartado 3

const reasignarPacientesAMedicoFamilia: Pacientes[] = pacientes.map(
  (paciente: Pacientes) => {
    if (paciente.especialidad === "Pediatra") {
      return {
        ...paciente,
        especialidad: "Medico de familia" as Especialidad,
      };
    }
    return paciente;
  }
);

console.log(
  "Pacientes reasignados a médico de familia:",
  reasignarPacientesAMedicoFamilia
);

// Apartado 4

const hayPacientesAsginadosAPediatria: boolean = pacientes.some(
  (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
);

console.log(
  "Hay pacientes asignados a pediatria:",
  hayPacientesAsginadosAPediatria
);

//Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const totalPacientesPorEspecialidad = pacientes.reduce(
  (
    acc: NumeroPacientesPorEspecialidad,
    paciente: Pacientes
  ): NumeroPacientesPorEspecialidad => {
    if (paciente.especialidad === "Medico de familia") {
      acc.medicoDeFamilia++;
    } else if (paciente.especialidad === "Pediatra") {
      acc.pediatria++;
    } else if (paciente.especialidad === "Cardiólogo") {
      acc.cardiologia++;
    }

    return acc;
  },
  { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
);

console.log(
  "Número de pacientes por especialdiad:",
  totalPacientesPorEspecialidad
);
