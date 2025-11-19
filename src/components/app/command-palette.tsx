'use client'

import * as React from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  LayoutDashboard,
  Users,
  Calendar,
  Clock,
  Wallet,
  Target,
  FileText,
  Settings,
  Plus,
  FileSpreadsheet,
} from 'lucide-react'

const commands = [
  {
    group: 'navigation',
    items: [
      { name: 'dashboard', icon: LayoutDashboard, href: '/dashboard' },
      { name: 'employees', icon: Users, href: '/employees' },
      { name: 'leaves', icon: Calendar, href: '/leaves' },
      { name: 'attendance', icon: Clock, href: '/attendance' },
      { name: 'payroll', icon: Wallet, href: '/payroll' },
      { name: 'recruitment', icon: Target, href: '/recruitment' },
      { name: 'documents', icon: FileText, href: '/documents' },
      { name: 'settings', icon: Settings, href: '/settings' },
    ],
  },
  {
    group: 'actions',
    items: [
      { name: 'new_employee', icon: Plus, href: '/employees/new' },
      { name: 'new_leave', icon: Plus, href: '/leaves/new' },
      { name: 'export_excel', icon: FileSpreadsheet, action: 'export' },
    ],
  },
]

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const t = useTranslations()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleSelect = (href?: string, action?: string) => {
    setOpen(false)
    if (href) {
      router.push(href)
    } else if (action === 'export') {
      // Handle export action
      console.log('Export action triggered')
    }
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Tapez une commande ou recherchez..." />
      <CommandList>
        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
        {commands.map((group) => (
          <React.Fragment key={group.group}>
            <CommandGroup heading={group.group === 'navigation' ? 'Navigation' : 'Actions'}>
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <CommandItem
                    key={item.name}
                    onSelect={() => handleSelect(item.href, item.action)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{t(`nav.${item.name}`, { ns: 'nav', defaultValue: item.name })}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            <CommandSeparator />
          </React.Fragment>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
