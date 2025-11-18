'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DataGrid, SortableHeader } from '@/components/advanced/data-grid'
import { Plus, MoreHorizontal } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Employee = {
  id: string
  firstName: string
  lastName: string
  email: string
  department: string
  position: string
  status: 'active' | 'inactive'
  hireDate: string
}

const employees: Employee[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Martin',
    email: 'sarah.martin@company.com',
    department: 'RH',
    position: 'Manager RH',
    status: 'active',
    hireDate: '2022-01-15',
  },
  {
    id: '2',
    firstName: 'Ahmed',
    lastName: 'Benali',
    email: 'ahmed.benali@company.com',
    department: 'IT',
    position: 'Développeur',
    status: 'active',
    hireDate: '2023-03-20',
  },
  {
    id: '3',
    firstName: 'Fatima',
    lastName: 'Zahra',
    email: 'fatima.zahra@company.com',
    department: 'Finance',
    position: 'Comptable',
    status: 'active',
    hireDate: '2021-06-10',
  },
  {
    id: '4',
    firstName: 'Karim',
    lastName: 'Alami',
    email: 'karim.alami@company.com',
    department: 'Commercial',
    position: 'Commercial',
    status: 'inactive',
    hireDate: '2020-09-05',
  },
]

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'firstName',
    header: ({ column }) => (
      <SortableHeader column={column}>Prénom</SortableHeader>
    ),
  },
  {
    accessorKey: 'lastName',
    header: ({ column }) => (
      <SortableHeader column={column}>Nom</SortableHeader>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'department',
    header: ({ column }) => (
      <SortableHeader column={column}>Département</SortableHeader>
    ),
  },
  {
    accessorKey: 'position',
    header: 'Poste',
  },
  {
    accessorKey: 'status',
    header: 'Statut',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      return (
        <Badge variant={status === 'active' ? 'success' : 'secondary'}>
          {status === 'active' ? 'Actif' : 'Inactif'}
        </Badge>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Voir détails</DropdownMenuItem>
            <DropdownMenuItem>Modifier</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Désactiver
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function EmployeesPage() {
  const handleExport = () => {
    console.log('Exporting employees...')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employés</h1>
          <p className="text-muted-foreground">
            Gérez vos {employees.length} employés
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un employé
        </Button>
      </div>

      {/* Data Grid */}
      <DataGrid
        columns={columns}
        data={employees}
        searchKey="firstName"
        onExport={handleExport}
      />
    </div>
  )
}
