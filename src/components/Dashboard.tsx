import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [data, setData] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {
    const worker = new Worker(new URL('../heavyLoop.worker.ts', import.meta.url), {
      type: 'module'
    });

    worker.postMessage('startCalculation');
    console.log('Dashboard: Message sent to worker to start calculation');

    worker.onmessage = (event: MessageEvent<number>) => {
      console.log('Dashboard: Message received from worker with result:', event.data);
      setData(event.data);
      setIsLoading(false);
    };

    worker.onerror = (error) => {
      console.error('Dashboard: Error in web worker:', error);
      setIsLoading(false);
    };

    return () => {
      console.log('Dashboard: Terminating worker');
      worker.terminate();
    };
  }, []);

  if (isLoading) {
    return <div>Calculating data in background... Please wait.</div>;
  }

  if (data === null) {
    return <div>Error calculating data or data not yet available.</div>;
  }

  return <div className='bg-white'>Calculated Data: {data}</div>;
}
