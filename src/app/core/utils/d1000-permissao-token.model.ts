export interface D1000PermissaoTokenModel {
  unique_name: string;
  Nome: string;
  role: string;
  Permissao: string[];
  Filial: string[];
  nbf: number;
  exp: number;
  iat: number;
}
