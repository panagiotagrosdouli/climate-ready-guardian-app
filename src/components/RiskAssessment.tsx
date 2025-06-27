
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Flame, 
  Droplets, 
  Zap, 
  Home, 
  TrendingUp,
  AlertTriangle,
  Info
} from "lucide-react";

const RiskAssessment = () => {
  const risks = [
    {
      type: "Πυρκαγιά",
      level: 85,
      status: "Κρίσιμος",
      icon: Flame,
      color: "text-red-600",
      bgColor: "bg-red-100",
      description: "Υψηλές θερμοκρασίες και χαμηλή υγρασία"
    },
    {
      type: "Καύσωνας",
      level: 92,
      status: "Εξτρίμ",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      description: "Θερμοκρασίες άνω των 38°C αναμένονται"
    },
    {
      type: "Ξηρασία",
      level: 70,
      status: "Υψηλός",
      icon: Droplets,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "Έλλειψη βροχοπτώσεων τον τελευταίο μήνα"
    },
    {
      type: "Διακοπές Ρεύματος",
      level: 45,
      status: "Μέτριος",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      description: "Αυξημένη ζήτηση λόγω κλιματισμού"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Εξτρίμ": return "destructive";
      case "Κρίσιμος": return "destructive";
      case "Υψηλός": return "default";
      case "Μέτριος": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
          Αξιολόγηση Κινδύνων για την Περιοχή σας
        </CardTitle>
        <CardDescription>
          Βασισμένη σε τοπικά κλιματικά δεδομένα και προβλέψεις
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {risks.map((risk, index) => {
            const Icon = risk.icon;
            return (
              <div key={index} className={`p-4 rounded-lg ${risk.bgColor} border`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 ${risk.color}`} />
                    <span className="font-medium">{risk.type}</span>
                  </div>
                  <Badge variant={getStatusColor(risk.status)}>
                    {risk.status}
                  </Badge>
                </div>
                
                <Progress value={risk.level} className="mb-2" />
                
                <p className="text-sm text-gray-600 mb-3">
                  {risk.description}
                </p>
                
                <Button size="sm" variant="outline" className="w-full">
                  <Info className="w-4 h-4 mr-2" />
                  Λεπτομέρειες & Συμβουλές
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border">
          <div className="flex items-center gap-2 mb-2">
            <Home className="w-5 h-5 text-blue-600" />
            <span className="font-medium">Συνολική Αξιολόγηση Κατοικίας</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Η κατοικία σας έχει μέτρια ευαλωτότητα στις τρέχουσες κλιματικές συνθήκες.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
            Δείτε Λεπτομερή Αξιολόγηση
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAssessment;
