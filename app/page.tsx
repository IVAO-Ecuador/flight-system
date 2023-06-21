import TablaVuelos from './components/TablaVuelos'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-degrade-black">
      <TablaVuelos></TablaVuelos>
    </main>
  )
}
