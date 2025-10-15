import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Building2, ArrowLeft } from "lucide-react"
import Link from "next/link"

const cultuurCoordinatoren = [
  {
    college: "ROC van Amsterdam",
    name: "Jillis Slingerland",
    email: "j.slingerland@rocva.nl",
    phone: "+31 20 123 4567",
  },
  {
    college: "Mediacollege Amsterdam",
    name: "Anna de Vries",
    email: "a.devries@ma-web.nl",
    phone: "+31 20 234 5678",
  },
  {
    college: "Hout en Meubileringscollege",
    name: "Peter Jansen",
    email: "p.jansen@hmc.nl",
    phone: "+31 20 345 6789",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/programma">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar Programma
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Contact</h1>
          <p className="text-gray-600">Neem contact op met de cultuurcoördinatoren van de MBO colleges</p>
        </div>

        <div className="space-y-6">
          {cultuurCoordinatoren.map((coordinator) => (
            <Card key={coordinator.college} className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{coordinator.college}</h3>
                  <p className="text-gray-700 mb-3">{coordinator.name}</p>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${coordinator.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {coordinator.email}
                    </a>
                    <a
                      href={`tel:${coordinator.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {coordinator.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 mt-8 bg-orange-50 border-orange-200">
          <h2 className="text-xl font-semibold mb-2">Algemene Vragen</h2>
          <p className="text-gray-700 mb-4">
            Voor algemene vragen over de Culturele INTROWEEK MBO kunt u contact opnemen met:
          </p>
          <a
            href="mailto:info@cultureleintroweek.nl"
            className="flex items-center gap-2 text-orange-600 font-medium hover:underline"
          >
            <Mail className="h-5 w-5" />
            info@cultureleintroweek.nl
          </a>
        </Card>
      </div>
    </div>
  )
}
