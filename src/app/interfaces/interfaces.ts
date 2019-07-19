export interface RespGetTutores {
  error: boolean;
  tutores: Tutor[];
}

export interface RespGetMaterias {
  error: boolean;
  materias: Materia[];
}

export interface RespGetNiveles{
  error: boolean;
  niveles: Nivel[];
}

export interface RespGetDistancia{
  error: boolean;
  distancia: Distancia;
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
  nivel: string;
  nombreMateria: string;
  checked: boolean;
}

export interface Ubicacion {
  latitud: number;
  longitud: number;
}

export interface Nivel {
  idNivel: number;
  nivel: string;
}

export interface Distancia{
  valor: number;
}