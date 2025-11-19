import { AppSidebar } from '@/components/app/sidebar'
import { AppHeader } from '@/components/app/header'
import { CommandPalette } from '@/components/app/command-palette'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <AppHeader />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Command Palette */}
      <CommandPalette />
    </div>
  )
}
