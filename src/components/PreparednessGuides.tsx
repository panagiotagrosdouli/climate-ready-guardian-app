
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Flame, 
  Droplets, 
  Zap, 
  Home, 
  Thermometer,
  Wind,
  CheckCircle,
  Clock,
  Download
} from "lucide-react";

const PreparednessGuides = () => {
  const guides = [
    {
      title: "Προετοιμασία για Καύσωνα",
      icon: Thermometer,
      progress: 75,
      priority: "Υψηλή",
      color: "text-red-600",
      bgColor: "bg-red-100",
      tasks: 8,
      completed: 6,
      description: "Βασικές ενέργειες για προστασία από υψηλές θερμοκρασίες"
    },
    {
      title: "Πρόληψη Πυρκαγιάς",
      icon: Flame,
      progress: 40,
      priority: "Κρίσιμη",
      color: "text-orange-600", 
      bgColor: "bg-orange-100",
      tasks: 12,
      completed: 5,
      description: "Μέτρα προστασίας κατοικίας και περιβάλλοντος χώρου"
    },
    {
      title: "Διαχείριση Νερού",
      icon: Droplets,
      progress: 90,
      priority: "Μέτρια",
      color: "text-blue-600",
      bgColor: "bg-blue-100", 
      tasks: 6,
      completed: 5,
      description: "Εξοικονόμηση και αποθήκευση νερού"
    },
    {
      title: "Ενεργειακή Ασφάλεια",
      icon: Zap,
      progress: 30,
      priority: "Μέτρια",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      tasks: 10,
      completed: 3,
      description: "Προετοιμασία για διακοπές ρεύματος"
    }
  ];

  const quickTips = [
    {
      category: "Έκτακτη Ανάγκη",
      tips: [
        "Kit πρώτων βοηθειών πλήρως εξοπλισμένο",
        "Φακός και εφεδρικές μπαταρίες",
        "Ραδιόφωνο με μπαταρίες",
        "Τρόφιμα για 3 ημέρες ανά άτομο"
      ]
    },
    {
      category: "Καύσωνας",
      tips: [
        "Νερό 3L ανά άτομο ανά ημέρα",
        "Ελαφρά, ανοιχτόχρωμα ρούχα",
        "Αποφυγή εξόδου 11:00-18:00",
        "Δροσερό μπάνιο ή ντους"
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Κρίσιμη": return "destructive";
      case "Υψηλή": return "default";
      case "Μέτρια": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${guide.bgColor}`}>
                      <Icon className={`w-6 h-6 ${guide.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={getPriorityColor(guide.priority)}>
                    {guide.priority}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Πρόοδος</span>
                    <span>{guide.completed}/{guide.tasks} ολοκληρώθηκαν</span>
                  </div>
                  <Progress value={guide.progress} />
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>~{15 + Math.floor(Math.random() * 20)} λεπτά</span>
                  </div>
                  <Button size="sm">
                    Συνέχεια
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Γρήγορες Συμβουλές
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickTips.map((category, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600">
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-600" />
              Οδηγοί PDF
            </CardTitle>
            <CardDescription>
              Κατεβάστε λεπτομερείς οδηγούς για εκτύπωση
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Πλήρης Οδηγός Προετοιμασίας Καύσωνα",
              "Checklist Πρόληψης Πυρκαγιάς",
              "Οδηγός Διαχείρισης Νερού στο Σπίτι",
              "Kit Έκτακτης Ανάγκης - Πλήρης Λίστα"
            ].map((guide, index) => (
              <Button key={index} variant="outline" className="w-full justify-between">
                <span className="text-left">{guide}</span>
                <Download className="w-4 h-4" />
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PreparednessGuides;
