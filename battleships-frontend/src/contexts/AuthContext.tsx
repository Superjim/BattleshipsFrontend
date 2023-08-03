import { createContext, useState, useContext, ReactNode } from "react";

interface AuthState {
  name: string;
  id: string;
}

interface AuthContextType extends AuthState {
  selectPlayer: (name: string, id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({ name: "", id: "" });

  const selectPlayer = (name: string, id: string) => {
    setAuth({ name, id });
  };

  return (
    <AuthContext.Provider value={{ ...auth, selectPlayer }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("component is not wrapped by AuthProvider");
  }
  return context;
};
