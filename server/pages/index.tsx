import type { Clientes } from '../interfaces'
import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr<Clientes[]>('/api/cliente', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((cliente) => (
        <li key={cliente.id}>
          <Link href="api/cliente/[id]" as={`api/cliente/${cliente.id}`} legacyBehavior>
            {`Cliente ${cliente.nome} (id ${cliente.id})`}
          </Link>
        </li>
      ))}
    </ul>
  )
}
