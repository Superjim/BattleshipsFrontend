import { createContext, useState, useContext, ReactNode } from "react";

interface AuthState {
  name: string;
  id: string;
  showPlayerList: boolean; //dev
}

interface AuthContextType extends AuthState {
  selectPlayer: (name: string, id: string) => void;
  togglePlayerList: () => void; //dev
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    name: "",
    id: "",
    showPlayerList: true,
  });

  const selectPlayer = (name: string, id: string) => {
    setAuth({ ...auth, name, id });
  };

  const togglePlayerList = () => {
    setAuth({ ...auth, showPlayerList: !auth.showPlayerList });
  };

  return (
    <AuthContext.Provider value={{ ...auth, selectPlayer, togglePlayerList }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Component is not wrapped by AuthProvider");
  }
  return context;
};
