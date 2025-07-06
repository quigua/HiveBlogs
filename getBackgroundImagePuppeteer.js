import puppeteer from 'puppeteer';

/**
 * Fetches a webpage using Puppeteer and attempts to extract the background image URL from the
 * computed style of the specific div with class "UserProfile__banner row expanded".
 * @param {string} url - The URL of the webpage to fetch.
 * @returns {Promise<string|null>} A promise that resolves to the background image URL if found, otherwise null.
 */
export async function getBackgroundImageUrlWithPuppeteer(url) {
    let browser;
    try {
        browser = await puppeteer.launch({ 
            headless: true, // Use headless: 'new' for new headless mode
            args: ['--no-sandbox'] // Add this argument to fix sandbox issues on some Linux systems
        }); 
        const page = await browser.newPage();

        // Navigate to the URL and wait until the network is idle (all resources loaded)
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Evaluate JavaScript in the browser context to find the element and get its computed style
        const imageUrl = await page.evaluate(() => {
            const bannerDiv = document.querySelector('.UserProfile__banner.row.expanded');
            if (bannerDiv) {
                // The background image is in a nested div on hive.blog
                const innerDiv = bannerDiv.querySelector('div[style*="background-image"]');
                if (innerDiv) {
                    const computedStyle = window.getComputedStyle(innerDiv);
                    const backgroundImage = computedStyle.getPropertyValue('background-image');
                    // Extract the URL from the 'url("...")' string
                    const match = backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
                    if (match && match[1]) {
                        return match[1];
                    }
                }
            }
            return null;
        });

        return imageUrl;
    } catch (error) {
        console.error(`Error with Puppeteer for ${url}:`, error);
        return null;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

// Example Usage:
const targetUrl = process.argv[2]; // Get URL from command line argument

if (!targetUrl) {
    console.log('Usage: node getBackgroundImagePuppeteer.js <URL>');
} else {
    getBackgroundImageUrlWithPuppeteer(targetUrl)
        .then(imageUrl => {
            if (imageUrl) {
                console.log(`Found background image URL for ${targetUrl}:`);
                console.log(imageUrl);
            } else {
                console.log(`No background image URL found in the specified div for ${targetUrl}.`);
            }
        })
        .catch(error => console.error('Unhandled error:', error));
}