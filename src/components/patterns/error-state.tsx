import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ErrorStateProps {
  title?: string
  message: string
  onRetry?: () => void
  className?: string
}

export function ErrorState({
  title = 'Une erreur est survenue',
  message,
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <Card className={cn('border-destructive/50', className)}>
      <CardContent className="flex flex-col items-center justify-center p-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="h-8 w-8 text-destructive" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-6 max-w-sm text-sm text-muted-foreground">{message}</p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Réessayer
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
