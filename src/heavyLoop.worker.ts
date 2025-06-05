
self.onmessage = (event: MessageEvent<string>) => {
  if (event.data === 'startCalculation') {
    console.log('Web Worker: Calculation started');
    let total = 0;
    for (let i = 0; i < 1e8; i++) {
      total += i;
    }
    self.postMessage(total);
    console.log('Web Worker: Calculation finished and result sent');
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default null as any;
