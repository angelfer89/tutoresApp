export interface RespGetTutores {
  error: boolean;
  tutores: Tutor[];
}

export interface Tutor {
  tutorID: string;
  nombre: string;
  direccion: string;
  latitud: string;
  longitud: string;
  distance: string;
}

export interface Materia {
  idMateria: number;
  nombre: string;
  checked: boolean;
}

export interface Ubicacion {
  latitud: number;
  longitud: number;
}