
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Thermometer, 
  Droplets, 
  Flame, 
  Wind, 
  Shield, 
  Users, 
  Brain,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Cloud
} from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import RiskAssessment from "@/components/RiskAssessment";
import AIAdvisor from "@/components/AIAdvisor";
import PreparednessGuides from "@/components/PreparednessGuides";
import CommunityNetwork from "@/components/CommunityNetwork";
import WeatherAlerts from "@/components/WeatherAlerts";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userLocation, setUserLocation] = useState("Αθήνα, Ελλάδα");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-sky-50">
      <DashboardHeader location={userLocation} />
      
      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="advisor" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">AI Σύμβουλος</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Οδηγοί</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Κοινότητα</span>
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="hidden sm:inline">Ειδοποιήσεις</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-orange-100 to-red-100 border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-orange-600" />
                    Θερμοκρασία
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-700">34°C</div>
                  <p className="text-xs text-orange-600 mt-1">
                    Υψηλός κίνδυνος καύσωνα
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    Υγρασία
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-700">23%</div>
                  <p className="text-xs text-blue-600 mt-1">
                    Χαμηλή - κίνδυνος ξηρασίας
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-100 to-orange-100 border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Flame className="w-4 h-4 text-red-600" />
                    Κίνδυνος Πυρκαγιάς
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-700">Υψηλός</div>
                  <Badge variant="destructive" className="mt-1 text-xs">
                    Κατηγορία 4
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Wind className="w-4 h-4 text-green-600" />
                    Ποιότητα Αέρα
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-700">Καλή</div>
                  <p className="text-xs text-green-600 mt-1">
                    AQI: 42
                  </p>
                </CardContent>
              </Card>
            </div>

            <RiskAssessment />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-blue-600" />
                    Πρόγνωση 7 Ημερών
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { day: "Σήμερα", temp: "34°", condition: "Ηλιόλουστα", risk: "Υψηλός" },
                      { day: "Αύριο", temp: "36°", condition: "Καύσωνας", risk: "Κρίσιμος" },
                      { day: "Κυριακή", temp: "38°", condition: "Εξτρίμ", risk: "Κρίσιμος" },
                      { day: "Δευτέρα", temp: "35°", condition: "Ηλιόλουστα", risk: "Υψηλός" }
                    ].map((forecast, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                        <span className="font-medium">{forecast.day}</span>
                        <div className="flex items-center gap-4">
                          <span>{forecast.temp}</span>
                          <span className="text-sm text-gray-600">{forecast.condition}</span>
                          <Badge variant={forecast.risk === "Κρίσιμος" ? "destructive" : "secondary"}>
                            {forecast.risk}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Καθημερινές Συμβουλές
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Alert>
                      <Droplets className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Εξοικονόμηση νερού:</strong> Χρησιμοποιήστε νερό βροχής για τα φυτά σας.
                      </AlertDescription>
                    </Alert>
                    <Alert>
                      <Thermometer className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Δροσισμός:</strong> Κλείστε τα παράθυρα τις μεσημεριανές ώρες.
                      </AlertDescription>
                    </Alert>
                    <Alert>
                      <Shield className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Προετοιμασία:</strong> Ελέγξτε το kit έκτακτης ανάγκης σας.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="advisor">
            <AIAdvisor />
          </TabsContent>

          <TabsContent value="guides">
            <PreparednessGuides />
          </TabsContent>

          <TabsContent value="community">
            <CommunityNetwork />
          </TabsContent>

          <TabsContent value="alerts">
            <WeatherAlerts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
