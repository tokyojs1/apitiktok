const axios = require('axios');

const API_BASE_URL = 'http://node.tokyots.xyz:2050'; 
const API_KEY = 'apibytokyo'; //  لتصير لوتي وتغيره 


async function downloadTikTokVideo(query) {
    try {
        const response = await axios.get(`${API_BASE_URL}/mp4/${encodeURIComponent(query)}`, {
            params: {
                api_key: API_KEY
            }
        });
        if (response.data.status === 'ok') {
            console.log('عنوان الفيديو:', response.data.title);
        } else {
            console.error('حدث خطأ:', response.data.message);
        }
    } catch (error) {
        console.error('خطأ أثناء الطلب:', error.message);
    }
}


const query = ''; // رابط فيديو تيك 
downloadTikTokVideo(query);
