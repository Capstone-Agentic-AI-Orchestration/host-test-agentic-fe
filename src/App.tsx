export interface AppProps {
  title?: string;
}

export function App({ title = 'host-test-agentic-fe' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
