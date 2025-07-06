import fetch from 'node-fetch';

/**
 * Fetches a webpage and attempts to extract the background image URL from the
 * style attribute of the specific nested div within the UserProfile__banner structure.
 * @param {string} url - The URL of the webpage to fetch.
 * @returns {Promise<string|null>} A promise that resolves to the background image URL if found, otherwise null.
 */
async function getBackgroundImageUrlFromProfileBanner(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();

        // Regex to find the outer div with specific classes, and then directly capture the style attribute
        // of its immediate child div that contains the background-image.
        const divRegex = /<div[^>]*class=["\"][^"\"]*(?=.*UserProfile__banner)(?=.*row)(?=.*expanded)[^"\"]*["\"][^>]*>\s*<div[^>]*style=["\"]([^"]*)["\"][^>]*>/is;
        const divMatch = html.match(divRegex);

        if (divMatch && divMatch[1]) {
            const styleAttribute = divMatch[1];
            // Now, extract the background-image URL from the style attribute
            const imageUrlRegex = /background-image:\s*url\s*\(['\"]?(.*?)['\"]?\s*\)/i;
            const imageUrlMatch = styleAttribute.match(imageUrlRegex);

            if (imageUrlMatch && imageUrlMatch[1]) {
                return imageUrlMatch[1];
            }
        }

        return null; // No background image URL found in the specified div
    } catch (error) {
        console.error(`Error fetching or parsing ${url}:`, error);
        return null;
    }
}

// Example Usage:
const targetUrl = process.argv[2]; // Get URL from command line argument

if (!targetUrl) {
    console.log('Usage: node getBackgroundImage.js <URL>');
} else {
    getBackgroundImageUrlFromProfileBanner(targetUrl)
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
