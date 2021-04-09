export interface ContratoVerbaWebEntity {
  id?: string;
  tpContratoVerba?: string;
  tpMovimentacao?: string;
  dsContratoVerba?: string;
  idUsuNegociador?: string;
  dsUsuNegociador?: string;
  dtIni?: string;
  dtFim?: string;
  mecanicaContrato?: string;
  vlrLimiteContrato?: any;
  vlrRessarcimento?: any;
  contratoAtivo?: boolean;
  idUsu?: string;
  dsUsu?: string;
  dtCad?: string;
  dtLiberacao?: string;
  idUsuLiberacao?: string;
  dsUsuLiberacao?: string;
  idUsuUltAlt?: string;
  dsUsuUltAlt?: string;
  dtUltAlt?: string;
  fcContratoVerbaFiliais?: FcContratoVerbaFilialWebEntity[];
  fcContratoVerbaProds?: FcContratoVerbaProdWebEntity[];
  fcContratoVerbaProdUsos?: FcContratoVerbaProdUsoWebEntity[];
}

export interface FcContratoVerbaFilialWebEntity {
  id?: number;
  idContratoVerba?: number;
  idBandeira?: number;
  idClusterFilial?: number;
  idFilial?: number;
}

export interface FcContratoVerbaProdWebEntity {
  id?: number;
  idContratoVerba?: number;
  idProd?: number;
  dsProd?: string;
  qtdeProd?: number;
  vlrVerbaProd?: any;
  vlrLimiteProd?: any;
  percDescProd?: any;
}

export interface FcContratoVerbaProdUsoWebEntity {
  id?: number;
  idContratoVerba?: number;
  idProd?: number;
  dsProd?: string;
  qtdeProd?: number;
  vlrVerbaProd?: any;
  vlrLimiteProd?: any;
  percDescProd?: any;
}

// nomeContrato: string;
// negociador: string;
// dataCriacao: string;
// responsavelCriacao: string;
// periodoVigenciaInicio: string;
// periodoVigenciaFinal: string;
// valorRessarcimento: string;
// valorLimite: string;
// textoArea: string;
// contratoVerbaProds: any;
// contratoVerbaProdUsos: any;
