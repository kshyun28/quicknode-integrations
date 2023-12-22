export interface ApiResponse {
  message: string;
  method: string;
  params: string[];
  result: ApiResult;
}

interface ApiResult {
  success: boolean;
  chain: string | null;
  results: DappInfo[];
  page: number;
  pageCount: number;
  resultCount: number;
  resultsPerPage: number;
}

interface DappInfo {
  dappId: number;
  name: string;
  description: string;
  fullDescription: string;
  logo: string;
  link: string;
  website: string;
  chains: string[];
  categories: string[];
  socialLinks: SocialLink[];
  tags: string[];
  metrics: DappMetrics;
}

interface SocialLink {
  title: string;
  url: string;
  type: string;
}

interface DappMetrics {
  transactions: number;
  transactionsPercentageChange: number;
  uaw: number;
  uawPercentageChange: number;
  volume: number;
  volumePercentageChange: number;
  balance: number;
  balancePercentageChange: number;
}
