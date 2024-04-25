import { Navbar } from "@/components"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid grid-rows-[5rem_minmax(auto,_1fr)]">
      <Navbar className="flex items-start justify-between p-4 min-w-full h-20"/>
      {children}
    </div>
  )
}