export const renderHome = (data) => {
    return `
    <html>
        <head>
            <title>Meting正在运行</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 0 20px;
                    line-height: 1.6;
                    color: #333;
                }

                h2 {
                    color: #222;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 8px;
                }

                pre {
                    background: #f8f8f8;
                    padding: 12px;
                    border-radius: 6px;
                    overflow-x: auto;
                }

                a {
                    color: #0366d6;
                    text-decoration: none;
                }

                a[href]:hover {
                    text-decoration: underline;
                }

                .example {
                    background: #f0f7ff;
                    padding: 10px 14px;
                    border-radius: 6px;
                    margin: 8px 0;
                }

                .example a {
                    display: block;
                    margin-top: 4px;
                    word-break: break-all;
                }
            </style>
        </head>
        <body>
            <h1>Meting API</h1>
            <p>
                <a href="https://github.com/o0w0b/meting_api" style="text-decoration: none;">
                    <img alt="Static Badge" src="https://img.shields.io/badge/Github-Meting-green">
                    <img alt="GitHub forks" src="https://img.shields.io/github/forks/o0w0b/meting_api">
                    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/o0w0b/meting_api">
                </a>
            </p>

            <p>当前版本：1.1.2</p>
            <p>当前运行环境：${data.runtime}</p>
            <p>当前时间：${data.time}</p>
            <p>内部端口：${data.port}</p>
            <p>部署在大陆：${data.overseas ? '否' : '是'}</p>

            <p>当前地址：<a>${data.url}</a></p>
            <p>实际地址：<a>${data.realUrl}</a></p>

            <p>测试地址：
                <a href="${data.realUrl}test">${data.realUrl}test</a>
            </p>

            <p>api地址：
                <a href="${data.realUrl}api">${data.realUrl}api</a>
            </p>

            <h2>请求示例</h2>
            <div class="example">
                <b>搜索 歌手名称</b><br>
                <a href="/api?server=netease&type=search&id=歌手名称" target="_blank">/api?server=netease&type=search&id=歌手名称</a>
            </div>
            <div class="example">
                <b>歌曲详情</b><br>
                <a href="/api?server=netease&type=song&id=591321" target="_blank">/api?server=netease&type=song&id=591321</a>
            </div>
            <div class="example">
                <b>歌单</b><br>
                <a href="/api?server=netease&type=playlist&id=7419903487"
                    target="_blank">/api?server=netease&type=playlist&id=7419903487</a>
            </div>
            <div class="example">
                <b>播放链接</b><br>
                <a href="/api?server=netease&type=url&id=471799"
                    target="_blank">/api?server=netease&type=url&id=471799</a>
            </div>

            <h2>相关链接</h2>
            <p>
                GitHub: <a href="https://github.com/metowolf/Meting" target="_blank">metowolf/Meting</a><br>
                GitHub: <a href="https://github.com/metowolf/Meting-API" target="_blank">metowolf/Meting-API</a><br>
                GitHub: <a href="https://github.com/xizeyoupan/Meting-API" target="_blank">xizeyoupan/Meting-API</a><br>
            </p>
        </body>
    </html>
    `
}