'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Plus, Search, FileText, Download, Eye, Trash2 } from 'lucide-react'

type Document = {
  id: string
  name: string
  type: string
  category: string
  uploadDate: string
  size: string
  employee?: string
}

const documents: Document[] = [
  {
    id: '1',
    name: 'Contrat CDI - Sarah Martin.pdf',
    type: 'Contrat',
    category: 'Employé',
    uploadDate: '2024-01-15',
    size: '245 KB',
    employee: 'Sarah Martin',
  },
  {
    id: '2',
    name: 'Bulletin Paie Nov 2024.pdf',
    type: 'Paie',
    category: 'Finance',
    uploadDate: '2024-11-30',
    size: '128 KB',
  },
  {
    id: '3',
    name: 'Attestation Travail - Ahmed Benali.pdf',
    type: 'Attestation',
    category: 'Employé',
    uploadDate: '2024-10-20',
    size: '89 KB',
    employee: 'Ahmed Benali',
  },
  {
    id: '4',
    name: 'Règlement Intérieur 2024.pdf',
    type: 'Règlement',
    category: 'Entreprise',
    uploadDate: '2024-01-01',
    size: '512 KB',
  },
]

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
          <p className="text-muted-foreground">
            Gérez tous vos documents RH en un seul endroit
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Téléverser
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Rechercher un document..." className="pl-9" />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="contrat">Contrat</SelectItem>
            <SelectItem value="paie">Paie</SelectItem>
            <SelectItem value="attestation">Attestation</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes</SelectItem>
            <SelectItem value="employe">Employé</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="entreprise">Entreprise</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Documents Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <Card key={doc.id} className="hover:shadow-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-tight">
                      {doc.name}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {doc.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {doc.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                {doc.employee && (
                  <div className="flex justify-between">
                    <span>Employé:</span>
                    <span className="font-medium">{doc.employee}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">{doc.uploadDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taille:</span>
                  <span className="font-medium">{doc.size}</span>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="mr-2 h-3 w-3" />
                  Voir
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="mr-2 h-3 w-3" />
                  Télécharger
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-3 w-3 text-destructive" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
