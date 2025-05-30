import type { User } from '@/types/user';
import { createContext, useContext, useState, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContext {
	user: User | null;
	signIn: (newUser: User, cb?: () => void) => void;
	signOut: () => void;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(() => JSON.parse(localStorage.getItem('user') ?? 'null'));

	const signIn = (newUser: User, cb?: () => void) => {
		setUser(newUser);
		localStorage.setItem('user', JSON.stringify(newUser));

		if (cb) cb();
		else navigate('/login');
	};

	const signOut = () => {
		setUser(null);
		localStorage.removeItem('user');
		navigate('/login');
	};

	return <AuthContext value={{ user, signIn, signOut }}>{children}</AuthContext>;
};

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (!context) throw new Error('useAuthContext must be used within a AuthProvider.');

	return context;
};
