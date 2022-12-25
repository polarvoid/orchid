interface AppProps {
  config?: { title: string; description: string; theme: string };
}

export default function App({ config }: AppProps): JSX.Element {
  return (
    <>
      <div className="w-full min-h-96 py-12">
        <div className="w-96 rounded-md mx-auto p-20 bg-primary text-primary-content flex flex-col items-center justify-center">
          <h1 className="text-4xl">Hello, World</h1>
          <h3 className="text-2xl">{config?.title}</h3>
          <p>Description: {config?.description}</p>
          <p>Theme: {config?.theme}</p>
        </div>
      </div>
    </>
  );
}
