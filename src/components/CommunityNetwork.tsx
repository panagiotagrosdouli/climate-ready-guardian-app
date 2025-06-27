
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MapPin, 
  Heart, 
  MessageCircle, 
  Plus,
  Search,
  Filter,
  Clock,
  CheckCircle
} from "lucide-react";

const CommunityNetwork = () => {
  const [activeTab, setActiveTab] = useState("help-requests");

  const helpRequests = [
    {
      id: 1,
      user: "Μαρία Κ.",
      avatar: "MK",
      location: "Κολωνάκι, 500μ",
      request: "Χρειάζομαι βοήθεια για μεταφορά ηλικιωμένης μητέρας σε κλιματιζόμενο χώρο",
      category: "Καύσωνας",
      time: "πριν 15 λεπτά",
      priority: "Υψηλή",
      responses: 3
    },
    {
      id: 2,
      user: "Γιάννης Π.",
      avatar: "ΓΠ",
      location: "Εξάρχεια, 800μ", 
      request: "Μοιράζω νερό και ανεμιστήρες σε όσους χρειάζονται",
      category: "Βοήθεια",
      time: "πριν 1 ώρα",
      priority: "Μέτρια",
      responses: 7
    },
    {
      id: 3,
      user: "Άννα Μ.",
      avatar: "ΑΜ",
      location: "Πλάκα, 1.2km",
      request: "Ψάχνω κάποιον να μοιραστούμε τα έξοδα γεννήτριας για διακοπές ρεύματος",
      category: "Συνεργασία",
      time: "πριν 2 ώρες",
      priority: "Μέτρια",
      responses: 12
    }
  ];

  const volunteers = [
    {
      name: "Δημήτρης Α.",
      avatar: "ΔΑ",
      skills: ["Πρώτες Βοήθειες", "Τεχνικός"],
      location: "Κέντρο Αθήνας",
      rating: 4.9,
      helped: 23
    },
    {
      name: "Ελένη Γ.",
      avatar: "ΕΓ", 
      skills: ["Νοσηλεύτρια", "Ψυχολογική Στήριξη"],
      location: "Κολωνάκι",
      rating: 5.0,
      helped: 31
    },
    {
      name: "Κώστας Β.",
      avatar: "ΚΒ",
      skills: ["Μεταφορές", "Δύναμη"],
      location: "Εξάρχεια", 
      rating: 4.7,
      helped: 18
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Καύσωνας": return "destructive";
      case "Βοήθεια": return "default";
      case "Συνεργασία": return "secondary";
      default: return "secondary";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Υψηλή": return "text-red-600";
      case "Μέτρια": return "text-yellow-600";
      case "Χαμηλή": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Δίκτυο Κοινότητας</h2>
          <p className="text-gray-600">Συνδεθείτε με γείτονές σας για αμοιβαία βοήθεια</p>
        </div>
        
        <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          <Plus className="w-4 h-4 mr-2" />
          Νέο Αίτημα
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex gap-2">
          <Button 
            variant={activeTab === "help-requests" ? "default" : "outline"}
            onClick={() => setActiveTab("help-requests")}
          >
            Αιτήματα Βοήθειας
          </Button>
          <Button 
            variant={activeTab === "volunteers" ? "default" : "outline"}
            onClick={() => setActiveTab("volunteers")}
          >
            Εθελοντές
          </Button>
        </div>
        
        <div className="flex gap-2 sm:ml-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Αναζήτηση..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {activeTab === "help-requests" && (
        <div className="grid grid-cols-1 gap-4">
          {helpRequests.map((request) => (
            <Card key={request.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>{request.avatar}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{request.user}</span>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="w-3 h-3" />
                          {request.location}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant={getCategoryColor(request.category)}>
                          {request.category}
                        </Badge>
                        <span className={`text-sm font-medium ${getPriorityColor(request.priority)}`}>
                          {request.priority}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700">{request.request}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {request.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {request.responses} απαντήσεις
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Απάντηση
                        </Button>
                        <Button size="sm">
                          <Heart className="w-4 h-4 mr-1" />
                          Βοήθεια
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "volunteers" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {volunteers.map((volunteer, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="text-lg">{volunteer.avatar}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="font-semibold text-lg">{volunteer.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-3 h-3" />
                      {volunteer.location}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {volunteer.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>{volunteer.helped} βοήθειες</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⭐ {volunteer.rating}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Επικοινωνία
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityNetwork;
