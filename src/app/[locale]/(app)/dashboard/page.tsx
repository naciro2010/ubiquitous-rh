import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Calendar, Clock, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  {
    title: 'Employés Actifs',
    value: '142',
    change: '+12%',
    icon: Users,
    trend: 'up',
  },
  {
    title: 'Demandes de Congés',
    value: '8',
    change: 'En attente',
    icon: Calendar,
    trend: 'neutral',
  },
  {
    title: 'Présences Aujourd\'hui',
    value: '98.5%',
    change: '+2.3%',
    icon: Clock,
    trend: 'up',
  },
  {
    title: 'Recrutements Actifs',
    value: '5',
    change: '3 postes',
    icon: TrendingUp,
    trend: 'neutral',
  },
]

const recentActivities = [
  {
    id: 1,
    type: 'leave',
    message: 'Sarah Martin a demandé 5 jours de congé',
    time: 'Il y a 2 heures',
    status: 'pending',
  },
  {
    id: 2,
    type: 'employee',
    message: 'Nouvel employé: Ahmed Benali ajouté',
    time: 'Il y a 4 heures',
    status: 'success',
  },
  {
    id: 3,
    type: 'alert',
    message: 'Rappel: Échéance CNSS dans 3 jours',
    time: 'Il y a 1 jour',
    status: 'warning',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de Bord</h1>
          <p className="text-muted-foreground">
            Vue d'ensemble de votre activité RH
          </p>
        </div>
        <Button>Actions rapides</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Activité Récente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center gap-4 rounded-lg border p-4"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  {activity.status === 'pending' && (
                    <AlertCircle className="h-5 w-5 text-warning" />
                  )}
                  {activity.status === 'success' && (
                    <CheckCircle className="h-5 w-5 text-success" />
                  )}
                  {activity.status === 'warning' && (
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Actions Rapides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Ajouter un employé
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Gérer les congés
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="mr-2 h-4 w-4" />
              Voir les rapports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
