import { ClimbSection } from './ClimbSection/ClimbSection';
import { HistorySection } from './HistorySection/HistorySection';

export const Main = () => {
  return (
    <main className="main">
      <HistorySection />
      <ClimbSection />
    </main>
  );
};
