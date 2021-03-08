export interface Laudo {
    cabecalho: {
        clinica: {
          nome: string;
          logo: string;
        }
        subtitulo: string;
        paciente: {
          nome: string;
          idade: string;
          doutor:string;
          os:string;
          sexo:string;
          data:string;
        }
      }
}
