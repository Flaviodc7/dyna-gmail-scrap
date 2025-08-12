import { scrapHTMLProductsFromRetailer } from '@method/htmlMethod';
import { scrapApiProductsFromRetailer } from '@method/apiMethod';
import { scrapFromBrowser } from '@method/browserMethod';

export const handler = async (event: any, _context: any, callback: any) => {
  try {
    // await Promise.all([scrapApiProductsFromRetailer(''), scrapHTMLProductsFromRetailer('')]);
    await scrapFromBrowser();
    callback(null, 'Dyna scraped successfully');
  } catch (error) {
    callback(error);
  }
};
