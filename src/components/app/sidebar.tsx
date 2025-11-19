'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useRTL } from '@/hooks/useRTL'
import {
  LayoutDashboard,
  Users,
  Calendar,
  Clock,
  Wallet,
  Target,
  FileText,
  Settings,
  Building2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const navigation = [
  { name: 'dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'employees', href: '/employees', icon: Users },
  { name: 'leaves', href: '/leaves', icon: Calendar },
  { name: 'attendance', href: '/attendance', icon: Clock },
  { name: 'payroll', href: '/payroll', icon: Wallet },
  { name: 'recruitment', href: '/recruitment', icon: Target },
  { name: 'documents', href: '/documents', icon: FileText },
  { name: 'settings', href: '/settings', icon: Settings },
]

export function AppSidebar() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const { dir } = useRTL()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        'flex flex-col border-r bg-muted/30 transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
      dir={dir}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b px-4">
        <Building2 className="h-6 w-6 shrink-0 text-primary" />
        {!collapsed && (
          <span className="font-semibold">{t('dashboard', { ns: 'common' })}</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname?.includes(item.href)

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                collapsed && 'justify-center'
              )}
              title={collapsed ? t(item.name) : undefined}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{t(item.name)}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Toggle button */}
      <div className="border-t p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className={cn('w-full', collapsed && 'px-0')}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4" />
              <span className="ml-2">Réduire</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  )
}
