import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Google Business Profile API configuration
    const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
    const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID;
    const apiKey = process.env.GOOGLE_BUSINESS_API_KEY;

    // If credentials are not set, return empty array (will use fallback images)
    if (!accountId || !locationId || !apiKey) {
      console.log('Google Business Profile credentials not configured, using fallback images');
      return NextResponse.json({ 
        images: [],
        source: 'fallback',
        message: 'Google Business Profile not configured' 
      });
    }

    // Google My Business API endpoint for reviews
    const url = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Google API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract image URLs from reviews
    const images = [];
    
    if (data.reviews) {
      data.reviews.forEach(review => {
        // Check if review has photos
        if (review.reviewReply?.updateTime || review.comment) {
          // Google Business reviews can have photos attached
          if (review.reviewer?.profilePhotoUrl) {
            // Some reviews include reviewer photos
          }
        }
        
        // Extract media items from reviews if available
        if (review.media && Array.isArray(review.media)) {
          review.media.forEach(mediaItem => {
            if (mediaItem.mediaFormat === 'PHOTO' && mediaItem.googleUrl) {
              images.push(mediaItem.googleUrl);
            }
          });
        }
      });
    }

    // Limit to 20 images
    const limitedImages = images.slice(0, 20);

    return NextResponse.json({ 
      images: limitedImages,
      source: 'google_business_reviews',
      count: limitedImages.length 
    });

  } catch (error) {
    console.error('Error fetching Google Business Review images:', error);
    
    // Return empty array to trigger fallback to local images
    return NextResponse.json({ 
      images: [],
      source: 'fallback',
      error: error.message 
    });
  }
}
