import { scrapHTMLProductsFromRetailer } from '@method/htmlMethod';
import { scrapApiProductsFromRetailer } from '@method/apiMethod';
import { scrapFromBrowser } from '@method/browserMethod';

export const handler = async () => {
  try {
    await scrapFromBrowser();
    console.log('Scraping completed successfully');
  } catch (error) {
    throw new Error(error);
  }
};

handler()