// 直接使用你构建好的 React 歌词组件
import { createRoot } from 'react-dom/client';
import React from 'react';
import { LyricPlayer } from './dist/react-full/index.es.js';

const mockLyric = {
  lines: [
    { startTime: 0, endTime: 2000, text: "欢迎使用 AppleMusic 歌词" },
    { startTime: 2000, endTime: 4000, text: "这是原生iOS可安装版本" },
    { startTime: 4000, endTime: 6000, text: "逐字高亮 · 流畅滚动" },
    { startTime: 6000, endTime: 8000, text: "完全由你自己构建完成" },
  ]
};

function App() {
  return React.createElement(
    LyricPlayer,
    {
      lyric: mockLyric,
      autoScroll: true,
      centered: true,
      fontSize: 22,
      theme: "dark",
    },
    null
  );
}

createRoot(document.getElementById('app')).render(React.createElement(App));
