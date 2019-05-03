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

export interface Materias {
  nombre: string;
  seleccionada: boolean;
}

export interface Ubicacion {
  latitud: number;
  longitud: number;
}