import { lazy, Suspense, type ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Spinner } from './components/ui';
import { useAuth } from './lib/auth';
import type { Role } from './lib/types';
import { ForgotPassword, Login, Register } from './pages/Auth';
import { Chapter } from './pages/Chapter';
import { Chapters } from './pages/Chapters';
import { Exam } from './pages/Exam';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Progress } from './pages/Progress';
import { Result } from './pages/Result';
import { Subjects } from './pages/Subjects';

// Pages secondaires chargées à la demande (le service worker les garde quand même pour le hors-ligne).
const Classes = lazy(() => import('./pages/Classes').then((m) => ({ default: m.Classes })));
const ClassView = lazy(() => import('./pages/Classes').then((m) => ({ default: m.ClassView })));
const Combat = lazy(() => import('./pages/Combat').then((m) => ({ default: m.Combat })));
const ChallengePlay = lazy(() => import('./pages/Combat').then((m) => ({ default: m.ChallengePlay })));
const Messages = lazy(() => import('./pages/Messages').then((m) => ({ default: m.Messages })));
const Conversation = lazy(() => import('./pages/Messages').then((m) => ({ default: m.Conversation })));
const PlanPage = lazy(() => import('./pages/Plan').then((m) => ({ default: m.PlanPage })));
const Revisions = lazy(() => import('./pages/Revisions').then((m) => ({ default: m.Revisions })));
const Subscription = lazy(() => import('./pages/Subscription').then((m) => ({ default: m.Subscription })));
const PaySimulation = lazy(() => import('./pages/Subscription').then((m) => ({ default: m.PaySimulation })));
const PayReturn = lazy(() => import('./pages/Subscription').then((m) => ({ default: m.PayReturn })));

// Espaces enseignant et admin chargés à la demande : les élèves ne téléchargent jamais ce code.
const Admin = lazy(() => import('./pages/admin/Admin').then((m) => ({ default: m.Admin })));
const Queue = lazy(() => import('./pages/teacher/Queue').then((m) => ({ default: m.Queue })));
const Grade = lazy(() => import('./pages/teacher/Grade').then((m) => ({ default: m.Grade })));
const Stats = lazy(() => import('./pages/teacher/Stats').then((m) => ({ default: m.Stats })));
const ContentList = lazy(() => import('./pages/teacher/Content').then((m) => ({ default: m.ContentList })));
const AssessmentList = lazy(() => import('./pages/teacher/Assessments').then((m) => ({ default: m.AssessmentList })));
const AssessmentEditor = lazy(() => import('./pages/teacher/Assessments').then((m) => ({ default: m.AssessmentEditor })));
const ChapterEditor = lazy(() => import('./pages/teacher/ChapterEditor').then((m) => ({ default: m.ChapterEditor })));

const HOME: Record<Role, string> = { STUDENT: '/', TEACHER: '/prof', ADMIN: '/admin' };

function Only({ roles, children }: { roles: Role[]; children: ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/connexion" replace />;
  if (!roles.includes(user.role)) return <Navigate to={HOME[user.role]} replace />;
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}

export function App() {
  const { user, ready } = useAuth();
  // Hors ligne, le profil enregistré suffit : on n'attend pas le serveur pour afficher l'application.
  if (!ready && !user) return <Spinner label="Démarrage…" />;

  if (!user) {
    return (
      <Routes>
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/connexion" replace />} />
      </Routes>
    );
  }

  const staff: Role[] = ['TEACHER', 'ADMIN'];
  const ALL: Role[] = ['STUDENT', 'TEACHER', 'ADMIN'];
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Only roles={['STUDENT']}>{<Home />}</Only>} />
        <Route path="/matieres" element={<Only roles={['STUDENT']}>{<Subjects />}</Only>} />
        <Route path="/matieres/:id" element={<Only roles={['STUDENT']}>{<Chapters />}</Only>} />
        <Route path="/chapitres/:id" element={<Chapter />} />
        <Route path="/devoir/:id" element={<Only roles={['STUDENT']}>{<Exam />}</Only>} />
        <Route path="/resultats/:id" element={<Result />} />
        <Route path="/progres" element={<Only roles={['STUDENT']}>{<Progress />}</Only>} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/revisions" element={<Only roles={['STUDENT']}>{<Revisions />}</Only>} />
        <Route path="/plan" element={<Only roles={['STUDENT']}>{<PlanPage />}</Only>} />
        <Route path="/combat" element={<Only roles={['STUDENT']}>{<Combat />}</Only>} />
        <Route path="/combat/:id" element={<Only roles={['STUDENT']}>{<ChallengePlay />}</Only>} />
        <Route path="/abonnement" element={<Only roles={['STUDENT']}>{<Subscription />}</Only>} />
        <Route path="/paiement/simulation/:id" element={<Only roles={['STUDENT']}>{<PaySimulation />}</Only>} />
        <Route path="/paiement/retour/:id" element={<Only roles={['STUDENT']}>{<PayReturn />}</Only>} />
        <Route path="/classes" element={<Only roles={['STUDENT']}>{<Classes />}</Only>} />
        <Route path="/classes/:id" element={<Only roles={ALL}>{<ClassView />}</Only>} />
        <Route path="/messages" element={<Only roles={ALL}>{<Messages />}</Only>} />
        <Route path="/messages/:userId" element={<Only roles={ALL}>{<Conversation />}</Only>} />
        <Route path="/prof/classes" element={<Only roles={staff}>{<Classes />}</Only>} />
        <Route path="/prof/devoirs" element={<Only roles={staff}>{<AssessmentList />}</Only>} />
        <Route path="/prof/devoirs/:id" element={<Only roles={staff}>{<AssessmentEditor />}</Only>} />
        <Route path="/prof" element={<Only roles={staff}>{<Queue />}</Only>} />
        <Route path="/prof/correction/:id" element={<Only roles={staff}>{<Grade />}</Only>} />
        <Route path="/prof/stats" element={<Only roles={staff}>{<Stats />}</Only>} />
        <Route path="/prof/contenu" element={<Only roles={staff}>{<ContentList />}</Only>} />
        <Route path="/prof/contenu/:id" element={<Only roles={staff}>{<ChapterEditor />}</Only>} />
        <Route path="/admin" element={<Only roles={['ADMIN']}>{<Admin />}</Only>} />
        <Route path="*" element={<Navigate to={HOME[user.role]} replace />} />
      </Route>
    </Routes>
  );
}
