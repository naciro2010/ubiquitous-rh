'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Plus, Mail, Phone } from 'lucide-react'

const kanbanColumns = [
  {
    id: 'new',
    title: 'Nouveaux',
    candidates: [
      {
        id: '1',
        name: 'Hassan Idrissi',
        position: 'Développeur Full-Stack',
        email: 'hassan@email.com',
        phone: '0612345678',
        source: 'LinkedIn',
      },
      {
        id: '2',
        name: 'Samira Benjelloun',
        position: 'Commercial',
        email: 'samira@email.com',
        phone: '0687654321',
        source: 'Site carrière',
      },
    ],
  },
  {
    id: 'screening',
    title: 'Présélection',
    candidates: [
      {
        id: '3',
        name: 'Youssef Alami',
        position: 'Développeur Full-Stack',
        email: 'youssef@email.com',
        phone: '0656781234',
        source: 'Recommandation',
      },
    ],
  },
  {
    id: 'interview',
    title: 'Entretien',
    candidates: [
      {
        id: '4',
        name: 'Nadia Fassi',
        position: 'Manager RH',
        email: 'nadia@email.com',
        phone: '0698765432',
        source: 'LinkedIn',
      },
    ],
  },
  {
    id: 'offer',
    title: 'Offre envoyée',
    candidates: [
      {
        id: '5',
        name: 'Omar Tazi',
        position: 'Commercial',
        email: 'omar@email.com',
        phone: '0634567890',
        source: 'Site carrière',
      },
    ],
  },
]

export default function RecruitmentPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recrutement</h1>
          <p className="text-muted-foreground">
            Suivez vos candidatures et processus de recrutement
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau poste
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kanbanColumns.map((column) => (
          <div key={column.id} className="space-y-4">
            {/* Column Header */}
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{column.title}</h3>
              <Badge variant="secondary">{column.candidates.length}</Badge>
            </div>

            {/* Candidates */}
            <div className="space-y-3">
              {column.candidates.map((candidate) => (
                <Card key={candidate.id} className="cursor-pointer hover:shadow-2">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold">
                      {candidate.name}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {candidate.position}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-2 pb-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      <span className="truncate">{candidate.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      <span>{candidate.phone}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {candidate.source}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add button */}
            <Button variant="outline" className="w-full" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
