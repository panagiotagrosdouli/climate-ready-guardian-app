
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Send, 
  MessageCircle, 
  Lightbulb,
  Shield,
  Home,
  Leaf,
  Users
} from "lucide-react";

const AIAdvisor = () => {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "Γεια σας! Είμαι ο AI σύμβουλός σας για την κλιματική προσαρμογή. Πώς μπορώ να σας βοηθήσω σήμερα;",
      timestamp: "10:30"
    },
    {
      type: "user", 
      content: "Πώς μπορώ να προετοιμάσω το σπίτι μου για τον καύσωνα;",
      timestamp: "10:32"
    },
    {
      type: "ai",
      content: "Εξαιρετική ερώτηση! Για τον επερχόμενο καύσωνα στην περιοχή σας, σας προτείνω: 1) Κλείστε τα παράθυρα κατά τις ώρες 11:00-18:00, 2) Χρησιμοποιήστε ανεμιστήρες οροφής για κυκλοφορία αέρα, 3) Προετοιμάστε νερό για 3 ημέρες (3L/άτομο/ημέρα). Θέλετε περισσότερες λεπτομέρειες για κάποια από αυτά;",
      timestamp: "10:33"
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");

  const quickActions = [
    { label: "Προετοιμασία για καύσωνα", icon: Shield },
    { label: "Εξοικονόμηση νερού", icon: Leaf },
    { label: "Πρόληψη πυρκαγιάς", icon: Home },
    { label: "Κοινότητα βοήθειας", icon: Users }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage = {
      type: "user" as const,
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString('el-GR', { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setInputMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: "ai" as const,
        content: "Σας ευχαριστώ για την ερώτησή σας. Αναλύω τα τοπικά δεδομένα και θα σας δώσω εξατομικευμένες συμβουλές σε λίγο...",
        timestamp: new Date().toLocaleTimeString('el-GR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              AI Σύμβουλος Κλιματικής Προσαρμογής
            </CardTitle>
            <CardDescription>
              Εξατομικευμένες συμβουλές βασισμένες σε επιστημονικά δεδομένα
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                placeholder="Ρωτήστε τον AI σύμβουλό σας..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Γρήγορες Ενέργειες
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Button 
                  key={index}
                  variant="outline" 
                  className="w-full justify-start h-auto p-3"
                  onClick={() => setInputMessage(action.label)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <span className="text-left">{action.label}</span>
                </Button>
              );
            })}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              Τελευταίες Συμβουλές
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Badge className="mb-2">Καύσωνας</Badge>
              <p className="text-sm text-gray-700">
                Πίνετε νερό κάθε 15-20 λεπτά, ακόμα κι αν δεν νιώθετε δίψα.
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Badge variant="secondary" className="mb-2">Ενέργεια</Badge>
              <p className="text-sm text-gray-700">
                Χρησιμοποιήστε συσκευές τις πρωινές ή βραδινές ώρες.
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <Badge variant="outline" className="mb-2">Πυρκαγιά</Badge>
              <p className="text-sm text-gray-700">
                Καθαρίστε ξερά φύλλα από την αυλή σας.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAdvisor;
