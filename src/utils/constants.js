const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =  "https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+process.env.REACT_APP_GOOGLE_API_KEY;


export const YOUTUBE_VIDEO_SUGGESTIONS_API =  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


// Authorization: Bearer [YOUR_ACCESS_TOKEN]


// Accept: application/json
