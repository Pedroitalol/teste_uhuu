export type User = {
  id: number
  name?: string
}

export type Clientes = {
  id: number
  nome: string
  peso: number
  endereco: Endereco
}

export type Endereco = {
  logradouro: string
  numero: string
  bairro: string
  complemento: string
  cidade: string
  estado: string
  pais: string
  latitude: number
  longitude: number
}