import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LogOut, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import XPDisplay from "@/components/XPDisplay";
import MissionCard from "@/components/MissionCard";

interface Mission {
  id: string;
  titulo: string;
  descricao: string;
  pontos_xp: number;
  status: 'pendente' | 'entregue' | 'aprovada';
  materia: string;
}

interface User {
  id: string;
  nome: string;
  tipo: string;
}

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [totalXP, setTotalXP] = useState(0);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [submissionText, setSubmissionText] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("todas");

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/');
      return;
    }

    const userData = JSON.parse(currentUser);
    if (userData.tipo !== 'aluno') {
      navigate('/');
      return;
    }

    setUser(userData);
    loadMissions(userData.id);
  }, [navigate]);

  const loadMissions = async (userId: string) => {
    try {
      // Get all missions
      const { data: allMissions, error: missionsError } = await supabase
        .from('missoes')
        .select('*')
        .order('created_at', { ascending: false });

      if (missionsError) throw missionsError;

      // Get user submissions
      const { data: submissions, error: submissionsError } = await supabase
        .from('entregas')
        .select('*')
        .eq('id_aluno', userId);

      if (submissionsError) throw submissionsError;

      // Merge mission data with submission status
      const missionsWithStatus = allMissions?.map(mission => {
        const submission = submissions?.find(s => s.id_missao === mission.id);
        const status: 'pendente' | 'entregue' | 'aprovada' = submission?.status === 'aprovada' ? 'aprovada' : 
                  submission ? 'entregue' : 'pendente';
        return {
          ...mission,
          status
        };
      }) || [];

      setMissions(missionsWithStatus);

      // Calculate total XP from approved missions
      const xp = missionsWithStatus
        .filter(m => m.status === 'aprovada')
        .reduce((sum, m) => sum + m.pontos_xp, 0);
      setTotalXP(xp);

      setLoading(false);
    } catch (error) {
      console.error('Error loading missions:', error);
      toast.error("Erro ao carregar missões");
      setLoading(false);
    }
  };

  const handleSubmitMission = async () => {
    if (!submissionText.trim() || !selectedMission || !user) {
      toast.error("Por favor, preencha sua resposta");
      return;
    }

    try {
      const { error } = await supabase
        .from('entregas')
        .insert({
          id_missao: selectedMission.id,
          id_aluno: user.id,
          texto_entrega: submissionText,
          status: 'aguardando'
        });

      if (error) throw error;

      toast.success("🎉 Missão entregue! Aguardando aprovação do professor");
      setDialogOpen(false);
      setSubmissionText("");
      setSelectedMission(null);
      loadMissions(user.id);
    } catch (error) {
      console.error('Error submitting mission:', error);
      toast.error("Erro ao entregar missão");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
    toast.success("Até logo!");
  };

  const filterMissions = (missions: Mission[]) => {
    switch (activeTab) {
      case 'pendentes':
        return missions.filter(m => m.status === 'pendente');
      case 'entregues':
        return missions.filter(m => m.status === 'entregue');
      case 'aprovadas':
        return missions.filter(m => m.status === 'aprovada');
      default:
        return missions;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-lg text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Quadro de Missões
            </h1>
          </div>
          <Button variant="outline" onClick={handleLogout} size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {user && <XPDisplay totalXP={totalXP} userName={user.nome} />}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="todas">Todas</TabsTrigger>
            <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
            <TabsTrigger value="entregues">Entregues</TabsTrigger>
            <TabsTrigger value="aprovadas">Aprovadas</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            {filterMissions(missions).length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">Nenhuma missão encontrada nesta categoria</p>
              </Card>
            ) : (
              filterMissions(missions).map((mission) => (
                <Dialog key={mission.id} open={dialogOpen && selectedMission?.id === mission.id} onOpenChange={(open) => {
                  setDialogOpen(open);
                  if (!open) {
                    setSelectedMission(null);
                    setSubmissionText("");
                  }
                }}>
                  <DialogTrigger asChild>
                    <div onClick={() => mission.status === 'pendente' && setSelectedMission(mission)}>
                      <MissionCard
                        titulo={mission.titulo}
                        descricao={mission.descricao}
                        pontosXp={mission.pontos_xp}
                        status={mission.status}
                        materia={mission.materia}
                        onSubmit={mission.status === 'pendente' ? () => {
                          setSelectedMission(mission);
                          setDialogOpen(true);
                        } : undefined}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{selectedMission?.titulo}</DialogTitle>
                      <DialogDescription>{selectedMission?.descricao}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="resposta">Sua Resposta</Label>
                        <Textarea
                          id="resposta"
                          placeholder="Digite sua resposta aqui..."
                          value={submissionText}
                          onChange={(e) => setSubmissionText(e.target.value)}
                          className="min-h-[200px]"
                        />
                      </div>
                      <Button onClick={handleSubmitMission} className="w-full bg-success hover:bg-success/90">
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Resposta
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ))
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default StudentDashboard;
