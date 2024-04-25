import { getNeoWs } from '@/backend/NeoWs';
import DataTable from '@/components/data-table';

const pages = () => {
  const data = getNeoWs();
  console.log(data);
  return (
    <section>
      <h1>This is dashboard page</h1>
      <section className='flex min-h-screen flex-col items-center justify-between p-24'>
        <DataTable />
      </section>
    </section>
  );
};

export default pages;
