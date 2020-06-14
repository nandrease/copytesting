export type Tester = {
  id: string;
  name: string;
  finishedTests: string[];
  currentTests: string[];
};

export type Test = {
  id: string;
  title: string;
  payout: number;
  estimation: number;
  noTestersNeeded: number;
  noTestersWorking: number;
  testers: string[];
};
