import { fetchAPI, METHODS } from '@/backend/common';

export async function getNeoWs() {
  const res = await fetchAPI(
    '/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=ap0LTvySU7V6kYmJBLm2YjQcoF1d6bkCuJhBblnK',
    METHODS.get
  );
  //   const body = res;

  // console.log('res', res.body);
  return res;
}
