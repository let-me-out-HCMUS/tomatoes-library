import React from "react";

import NewsList from "./NewsList";

export default function NewsHome() {
  return (
    <div className="bg-orange-50 px-5">
      <div className="w-full text-center py-8 font-bold text-2xl">
        Có thể bạn quan tâm
      </div>
      <NewsList title="Tin tức" news={NEWS} />
    </div>
  );
}

const NEWS = [
  {
    id: 1,
    title:
      "Họa sĩ Akira Toriyama - cha đẻ 'Bảy viên ngọc rồng' qua đời, nhiều tác giả tiếc thương",
    content:
      "Ông Akira Toriyama, tác giả của bộ truyện Dragon Ball (Bảy viên ngọc rồng) qua đời để lại nhiều tiếc thương cho fan hâm mộ và đồng nghiệp.  ",
    image:
      "https://hobiverse.com.vn/cdn/shop/articles/akira-toriyama_thumbnail_hobi_3ddb94b186184071a8b32732f70019bb.jpg?v=1716179642",
    createdAt: "2023-11-01T07:00:00.000Z",
  },
  {
    id: 2,
    title: "Manhwa là gì? Manhwa có gì khác biệt so với Manhua, Manga?",
    content: "Tìm hiểu về Manhwa và sự khác biệt so với Manhua, Manga",
    image:
      "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/166686/Originals/manhwa-la-gi-1.jpg",
    createdAt: "2023-10-30T07:00:00.000Z",
  },
  {
    id: 3,
    title: "Uzumaki Boruto có mạnh hơn Naruto không?",
    content:
      "Uzumaki Boruto đã dần đạt tới đỉnh cao sức mạnh và có thể vượt qua người cha Naruto nổi tiếng.",
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2024/4/19/base64-1713502314734803686098.png",
    createdAt: "2023-02-12T07:00:00.000Z",
  },
];
