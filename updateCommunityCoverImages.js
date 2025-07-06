import fs from 'fs/promises';
import path from 'path';
import { getBackgroundImageUrlWithPuppeteer } from './getBackgroundImagePuppeteer.js';

const ALL_COMMUNITIES_FILE = '/home/elvis/data/all_communities.json';

/**
 * Updates the cover_image for each community in all_communities.json
 * by fetching it from their hive.blog profile page using Puppeteer.
 */
async function updateCommunityCoverImages() {
    console.log('Starting to update community cover images...');

    try {
        // Read existing communities data
        const data = await fs.readFile(ALL_COMMUNITIES_FILE, 'utf8');
        const communities = JSON.parse(data);

        let updatedCount = 0;

        for (let i = 0; i < communities.length; i++) {
            const community = communities[i];
            const communityName = community.name; // e.g., hive-167922
            const profileUrl = `https://hive.blog/@${communityName}`;

            console.log(`[${i + 1}/${communities.length}] Processing ${communityName}...`);

            try {
                const imageUrl = await getBackgroundImageUrlWithPuppeteer(profileUrl);

                if (imageUrl) {
                    community.cover_image = imageUrl;
                    updatedCount++;
                    console.log(`  Updated ${communityName} with cover image: ${imageUrl}`);
                } else {
                    console.log(`  No cover image found for ${communityName}.`);
                }
            } catch (error) {
                console.error(`  Error processing ${communityName}:`, error.message);
                // Continue to next community even if one fails
            }

            // Add a delay to avoid overwhelming the server
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
        }

        // Write updated data back to the file
        await fs.writeFile(ALL_COMMUNITIES_FILE, JSON.stringify(communities, null, 2), 'utf8');
        console.log(`
Finished updating community cover images.`);
        console.log(`Total communities updated: ${updatedCount} out of ${communities.length}.`);

    } catch (error) {
        console.error('An error occurred during the update process:', error);
    }
}

// Run the update function
updateCommunityCoverImages();
