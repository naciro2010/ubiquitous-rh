'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DateRangePicker } from '@/components/advanced/date-range-picker'
import { Plus, Check, X } from 'lucide-react'
import { DateRange } from 'react-day-picker'

type LeaveRequest = {
  id: string
  employee: string
  type: string
  startDate: string
  endDate: string
  days: number
  status: 'pending' | 'approved' | 'rejected'
  reason: string
}

const leaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employee: 'Sarah Martin',
    type: 'Congé payé',
    startDate: '2024-12-20',
    endDate: '2024-12-27',
    days: 5,
    status: 'pending',
    reason: 'Vacances de fin d\'année',
  },
  {
    id: '2',
    employee: 'Ahmed Benali',
    type: 'Maladie',
    startDate: '2024-11-15',
    endDate: '2024-11-17',
    days: 2,
    status: 'approved',
    reason: 'Consultation médicale',
  },
  {
    id: '3',
    employee: 'Fatima Zahra',
    type: 'Congé sans solde',
    startDate: '2024-12-01',
    endDate: '2024-12-05',
    days: 4,
    status: 'rejected',
    reason: 'Raisons personnelles',
  },
]

const leaveBalances = [
  { employee: 'Sarah Martin', total: 22, used: 10, remaining: 12 },
  { employee: 'Ahmed Benali', total: 22, used: 15, remaining: 7 },
  { employee: 'Fatima Zahra', total: 22, used: 8, remaining: 14 },
]

export default function LeavesPage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="warning">En attente</Badge>
      case 'approved':
        return <Badge variant="success">Approuvé</Badge>
      case 'rejected':
        return <Badge variant="destructive">Refusé</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion des Congés</h1>
          <p className="text-muted-foreground">
            Gérez les demandes et soldes de congés
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle demande
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <DateRangePicker value={dateRange} onChange={setDateRange} />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="requests" className="space-y-4">
        <TabsList>
          <TabsTrigger value="requests">Demandes</TabsTrigger>
          <TabsTrigger value="balances">Soldes</TabsTrigger>
          <TabsTrigger value="calendar">Calendrier</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          {leaveRequests.map((request) => (
            <Card key={request.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">
                  {request.employee}
                </CardTitle>
                {getStatusBadge(request.status)}
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{request.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Période:</span>
                    <span className="font-medium">
                      {request.startDate} au {request.endDate} ({request.days}{' '}
                      jours)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Motif:</span>
                    <span className="font-medium">{request.reason}</span>
                  </div>
                  {request.status === 'pending' && (
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Check className="mr-2 h-4 w-4" />
                        Approuver
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <X className="mr-2 h-4 w-4" />
                        Refuser
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="balances" className="space-y-4">
          {leaveBalances.map((balance) => (
            <Card key={balance.employee}>
              <CardHeader>
                <CardTitle className="text-base">{balance.employee}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Total annuel:
                    </span>
                    <span className="font-medium">{balance.total} jours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Utilisés:</span>
                    <span className="font-medium">{balance.used} jours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Restants:</span>
                    <span className="font-bold text-primary">
                      {balance.remaining} jours
                    </span>
                  </div>
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary"
                      style={{
                        width: `${(balance.used / balance.total) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardContent className="flex h-[400px] items-center justify-center">
              <p className="text-muted-foreground">
                Calendrier des congés (à implémenter)
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
