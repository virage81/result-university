import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error: unknown) {
		console.error('DERIVED ERROR', error);
		return {
			hasError: true,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('ERROR', error);
		console.error('ERROR INFO', errorInfo);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return <section className='grow flex items-center justify-center'>Error happened...</section>;
		}
		return this.props.children;
	}
}
