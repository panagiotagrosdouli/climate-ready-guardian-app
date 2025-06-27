
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  AlertTriangle, 
  Thermometer, 
  Flame, 
  Droplets, 
  Wind,
  Zap,
  Bell,
  Settings,
  Clock,
  MapPin
} from "lucide-react";

const WeatherAlerts = () => {
  const activeAlerts = [
    {
      id: 1,
      type: "Κριτική Θερμοκρασία",
      icon: Thermometer,
      level: "Κρίσιμο",
      message: "Αναμένονται θερμοκρασίες άνω των 38°C τις επόμενες 48 ώρες",
      location: "Αττική",
      time: "Ενεργό έως 15/07 20:00",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      id: 2,
      type: "Υψηλός Κίνδυνος Πυρκαγιάς",
      icon: Flame,
      level: "Εξτρίμ",
      message: "Κατηγορία κινδύνου 4 - Αποφύγετε δραστηριότητες που μπορούν να προκαλέσουν φωτιά",
      location: "Ανατολική Αττική",
      time: "Ενεργό έως 16/07 06:00",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 3,
      type: "Ισχυροί Άνεμοι",
      icon: Wind,
      level: "Υψηλό",
      message: "Άνεμοι 7-8 μποφόρ από βορειοδυτικές διευθύνσεις",
      location: "Πελοπόννησος",
      time: "Ενεργό έως 14/07 18:00",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  const upcomingAlerts = [
    {
      type: "Διακοπές Ρεύματος",
      probability: "75%",
      timeframe: "Επόμενες 24 ώρες",
      description: "Πιθανές διακοπές λόγω υπερφόρτωσης δικτύου"
    },
    {
      type: "Λειψυδρία",
      probability: "60%",
      timeframe: "Επόμενες 72 ώρες", 
      description: "Περιορισμοί στην υδροδότηση σε συγκεκριμένες περιοχές"
    }
  ];

  const notificationSettings = [
    { label: "Κρίσιμες Ειδοποιήσεις", enabled: true },
    { label: "Καιρικές Προειδοποιήσεις", enabled: true },
    { label: "Κοινοτικές Ειδοποιήσεις", enabled: false },
    { label: "Ειδοποιήσεις SMS", enabled: true },
    { label: "Email Ειδοποιήσεις", enabled: false }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Κρίσιμο": return "destructive";
      case "Εξτρίμ": return "destructive"; 
      case "Υψηλό": return "default";
      case "Μέτριο": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Ειδοποιήσεις & Προειδοποιήσεις</h2>
          <p className="text-gray-600">Πάντα ενημερωμένοι για κλιματικούς κινδύνους</p>
        </div>
        
        <Button variant="outline">
          <Settings className="w-4 h-4 mr-2" />
          Ρυθμίσεις
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Ενεργές Προειδοποιήσεις
              </CardTitle>
              <CardDescription>
                {activeAlerts.length} ενεργές προειδοποιήσεις για την περιοχή σας
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeAlerts.map((alert) => {
                const Icon = alert.icon;
                return (
                  <div key={alert.id} className={`p-4 rounded-lg border ${alert.bgColor} ${alert.borderColor}`}>
                    <div className="flex items-start gap-3">
                      <Icon className={`w-6 h-6 ${alert.color} mt-1`} />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{alert.type}</h3>
                          <Badge variant={getLevelColor(alert.level)}>
                            {alert.level}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-gray-700">{alert.message}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {alert.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {alert.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Προβλεπόμενοι Κίνδυνοι
              </CardTitle>
              <CardDescription>
                Πιθανά προβλήματα τις επόμενες ημέρες
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingAlerts.map((alert, index) => (
                <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{alert.type}</span>
                    <Badge variant="outline">{alert.probability}</Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{alert.description}</p>
                  <p className="text-xs text-gray-600">{alert.timeframe}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-green-600" />
                Ρυθμίσεις Ειδοποιήσεων
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notificationSettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{setting.label}</span>
                  <Switch defaultChecked={setting.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Στατιστικά Ειδοποιήσεων</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">47</div>
                  <div className="text-xs text-gray-600">Φέτος</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-xs text-gray-600">Αυτόν τον μήνα</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Καύσωνας</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Πυρκαγιά</span>
                  <span className="font-medium">18</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Άνεμοι</span>
                  <span className="font-medium">6</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Γρήγορες Ενέργειες</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Zap className="w-4 h-4 mr-2" />
                Αναφορά Διακοπής Ρεύματος
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Droplets className="w-4 h-4 mr-2" />
                Αναφορά Πρόβλ. Ύδρευσης
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Flame className="w-4 h-4 mr-2" />
                Αναφορά Πυρκαγιάς
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WeatherAlerts;
