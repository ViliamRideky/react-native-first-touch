import { supabase } from "@/app/lib/supabase/client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  profileImage?: string;
  onBoardingCompleted?: boolean;
}

interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
}

const AuhtContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {};

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      console.log(user);
    }
  };

  return (
    <AuhtContext.Provider value={{ user, signUp }}>
      {children}
    </AuhtContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuhtContext);
  if (context === undefined) {
    throw new Error("must be inside the provider");
  }

  return context;
};
