import fs from 'fs/promises';
import path from 'path';
import { getUserCommunitySubscriptions } from '../../Programas/Hive/HiveBlogKit/index.js';

const ALL_COMMUNITIES_FILE = '/home/elvis/Web/HiveBlogs/src/data/all_communities.json';
const SUBSCRIBED_COMMUNITIES_FILE = '/home/elvis/Web/HiveBlogs/src/data/subscribed_communities.json';
const SITE_OWNER_USERNAME = 'quigua'; // Using the confirmed HIVE_USERNAME

async function generateSubscribedCommunitiesJson() {
    console.log(`Generating subscribed communities JSON for ${SITE_OWNER_USERNAME}...`);

    try {
        // 1. Read all communities data
        const allCommunitiesData = JSON.parse(await fs.readFile(ALL_COMMUNITIES_FILE, 'utf8'));

        // 2. Get user subscriptions
        const subscriptionsResponse = await getUserCommunitySubscriptions(SITE_OWNER_USERNAME);
        if (subscriptionsResponse.error) {
            throw new Error(`Error fetching subscriptions: ${subscriptionsResponse.error.message}`);
        }
        const subscribedCommunityIds = subscriptionsResponse && Array.isArray(subscriptionsResponse) ? subscriptionsResponse.map(sub => sub[0]) : [];

        // 3. Filter all communities to get only subscribed ones
        const subscribedCommunities = allCommunitiesData.filter(community =>
            subscribedCommunityIds.includes(community.name)
        );

        // 4. Save the filtered data to a new JSON file
        await fs.writeFile(SUBSCRIBED_COMMUNITIES_FILE, JSON.stringify(subscribedCommunities, null, 2), 'utf8');

        console.log(`Successfully generated ${subscribedCommunities.length} subscribed communities to ${SUBSCRIBED_COMMUNITIES_FILE}`);

    } catch (error) {
        console.error('Error generating subscribed communities JSON:', error);
    }
}

generateSubscribedCommunitiesJson();
