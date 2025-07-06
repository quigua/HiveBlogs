import { getUserProfile } from 'hiveblogkit';

const HIVE_USERNAME = process.env.HIVE_USERNAME;

async function getCoverImage() {
  if (!HIVE_USERNAME) {
    console.error('Error: HIVE_USERNAME environment variable is not set.');
    return;
  }

  try {
    const userProfile = await getUserProfile(HIVE_USERNAME);
    if (userProfile && userProfile.posting_json_metadata) {
      const metadata = JSON.parse(userProfile.posting_json_metadata);
      if (metadata.profile && metadata.profile.cover_image) {
        console.log(metadata.profile.cover_image);
      } else {
        console.log('No cover image found for this user.');
      }
    } else {
      console.log('Could not retrieve user profile.');
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

getCoverImage();