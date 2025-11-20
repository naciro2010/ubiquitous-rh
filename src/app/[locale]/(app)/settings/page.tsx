'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { FileSpreadsheet, Database, Zap, Plus } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
        <p className="text-muted-foreground">
          Configurez votre espace RH Manager
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="integrations">Intégrations</TabsTrigger>
          <TabsTrigger value="custom">Personnalisation</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations de l&apos;entreprise</CardTitle>
              <CardDescription>
                Gérez les informations de votre entreprise
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nom de l&apos;entreprise</Label>
                  <Input id="company-name" placeholder="Votre entreprise" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ice">ICE</Label>
                  <Input id="ice" placeholder="000000000000000" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cnss">Numéro CNSS</Label>
                  <Input id="cnss" placeholder="1234567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" placeholder="+212 5XX-XXXXXX" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" placeholder="Adresse complète" />
              </div>
              <Button>Enregistrer les modifications</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="h-5 w-5 text-primary" />
                    <CardTitle>Microsoft Excel</CardTitle>
                  </div>
                  <Badge variant="success">Connecté</Badge>
                </div>
                <CardDescription>
                  Import/Export de vos données RH
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full">
                  Importer depuis Excel
                </Button>
                <Button variant="outline" className="w-full">
                  Exporter vers Excel
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <CardTitle>Sage Comptabilité</CardTitle>
                  </div>
                  <Badge variant="secondary">Non connecté</Badge>
                </div>
                <CardDescription>
                  Synchronisation avec Sage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Connecter Sage
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <CardTitle>Badgeuse</CardTitle>
                  </div>
                  <Badge variant="secondary">Non connecté</Badge>
                </div>
                <CardDescription>
                  Système de pointage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Connecter une badgeuse
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API REST</CardTitle>
                <CardDescription>
                  Intégrez vos outils via API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Voir la documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Champs personnalisés</CardTitle>
              <CardDescription>
                Ajoutez des champs spécifiques à vos besoins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un champ
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Builder</CardTitle>
              <CardDescription>
                Créez des formulaires personnalisés
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Créer un formulaire
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
