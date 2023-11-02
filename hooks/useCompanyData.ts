import { useEffect, useState } from 'react';

import { METHODS, fetchAPI } from '@/backend/common';
import { alpha_api_key } from '@/config';

interface Company {
  symbol: string;
  data: {
    Name: string;
    MarketCapitalization: string;
    // Add more properties as needed
  };
}

// Custom hook for fetching company data
// export const useCompanyData = (symbols: string[]) => {
//   const [companies, setCompanies] = useState<Company[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         const promises = symbols.map(async (symbol) => {
//           const response = await fetchAPI(
//             `/query?function=OVERVIEW&symbol=${symbol}`,
//             METHODS.get
//           );

//           if (!response.ok) {
//             throw new Error(`Failed to fetch data for ${symbol}`);
//           }

//           const data = await response.json();
//           return { symbol, data };
//         });

//         const companyData = await Promise.all(promises);
//         setCompanies(companyData);
//       } catch (error: any) {
//         setError(error.message);
//       }
//     };

//     fetchCompanyData();
//   }, [symbols]);

//   return { companies, error };
// };

export const useCompanyData = (symbols: string[]) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const promises = symbols.map(async (symbol) => {
          const response = await fetchAPI(
            `/query?function=OVERVIEW&symbol=${symbol}&apikey=${alpha_api_key}`,
            METHODS.get
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch data for ${symbol}`);
          }

          const data = await response.json();
          return { symbol, data };
        });

        const companyData = await Promise.all(promises);
        setCompanies(companyData);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchCompanyData();
  }, [symbols]);

  return { companies, error };
};
