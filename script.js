const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = 3000;

// 정적 파일 제공 (index.html 등)
app.use(express.static(__dirname));

// 네이버 API 인증 정보
const clientId = '여기에_네이버_Client_ID_입력';
const clientSecret = '여기에_네이버_Client_Secret_입력';

// 음식점 검색 API 엔드포인트
app.get('/api/search', async (req, res) => {
    const { keyword } = req.query;
    if (!keyword) return res.status(400).json({ error: 'keyword required' });

    const url = `https://openapi.naver.com/v1/search/local.json?query=${encodeURIComponent(keyword)}&display=5`;

    try {
        const response = await fetch(url, {
            headers: {
                'X-Naver-Client-Id': clientId,
                'X-Naver-Client-Secret': clientSecret
            }
        });
        const data = await response.json();
        res.json(data.items);
    } catch (err) {
        res.status(500).json({ error: 'API 호출 실패', detail: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`서버 실행중: http://localhost:${PORT}`);
});