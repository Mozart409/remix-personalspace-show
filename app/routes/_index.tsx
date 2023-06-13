import type { V2_MetaFunction } from '@remix-run/cloudflare'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Personal Space' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

export default function Index() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to Remix</h1>
    </div>
  )
}
