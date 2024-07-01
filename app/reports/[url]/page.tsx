import AllReport from '@/components/AllReport';
import { toCapitalCase } from '@/constants';

export async function generateMetadata({ params }:any, parent:any) {
  const { url } = params
  const siteURL = 'https://www.visionarymarketinsights.com';
  let requiredUrl = (toCapitalCase(url).includes('All Industries') ? 'Industries' : toCapitalCase(url));
  return {
      title: 'Browse all ' + requiredUrl + ' research reports',
      description: 'Explore insightful ' + requiredUrl + ' market research reports with detailed forecasts, analyzing industry trends, innovations, and growth strategies for competitive edge',
      keywords: 'Global Market Research Reports, Market Research, US Market Research Report, North America Market Research Trends, South Korea Business Market Research Report, Europe Industry Analysis, Industry Reports, Business Research Reports, Competitive Analysis, Industry Analysis, Market Research Trends, Industry Analysis Report, Market Research Analysis',
      alternates: {
          canonical: `${siteURL}/reports/${url}`,
      },
  }
}

const AllReportPage = ({ params }: any) => {
  const { url } = params;
  return (
    <AllReport url={url} />
  );
};

export default AllReportPage;
