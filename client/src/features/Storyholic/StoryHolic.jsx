import React from "react";
import { useParams } from "react-router";

export default function StoryHolic() {
  const id = useParams().id;
  const local = data[id];
  return (
    <div className="mx-auto py-10 px-8 md:px-32 flex flex-col items-center">
      <p className="font-bold text-4xl mb-6">{local.name}</p>
      <p>
        <strong>
          <div dangerouslySetInnerHTML={{ __html: local.desc }} />
        </strong>
      </p>
      <p>
        <div dangerouslySetInnerHTML={{ __html: local.desc1 }} />
      </p>
      <p style={{ textAlign: "center" }}>
        <img width={624} height={785} src={local.img1} />
      </p>
      <p>
        <div dangerouslySetInnerHTML={{ __html: local.desc2 }} />
      </p>
      <p style={{ textAlign: "center" }}>
        <img width={624} height={684} src={local.img2} />
      </p>
      <p>
        <div dangerouslySetInnerHTML={{ __html: local.desc3 }} />
      </p>
      <p style={{ textAlign: "center" }}>
        <img width={624} height={684} src={local.img3} />
      </p>
      <p>
        <div dangerouslySetInnerHTML={{ __html: local.desc4 }} />
      </p>
      <p style={{ textAlign: "center" }}>
        <img width={624} height={684} src={local.img4} />
      </p>
      <p>
        <div dangerouslySetInnerHTML={{ __html: local.desc5 }} />
      </p>
      <p style={{ textAlign: "center" }}>
        <img width={624} height={684} src={local.img5} />
      </p>
    </div>
  );
}

const data = {
  1: {
    name: "Tác giả Akira Toriyama của Dragon Ball qua đời",
    desc: "Thông tin tác giả Dragon Ball, Akira Toriyama qua đời khiến rất nhiều người hâm mộ đau buồn. Ông đã cống hiến cả cuộc đời mình cho manga, tạo nên các bộ truyện siêu phẩm.",
    desc1:
      "<h1> <strong style='font-size: larger;'>Tác giả Akira Toriyama từ trần</strong> </h1>  <p>Akira Toriyama là họa sĩ truyện tranh đứng sau sự thành công của loạt manga Dragon Ball và Sand Land. Ông đã qua đời vào ngày 1 tháng 3 năm 2024 vì căn bệnh máu tụ dưới màng cứng cấp tính. Ông hưởng dương 68 tuổi.</p> <p>Thông báo về sự ra đi của Toriyama được đăng trên trang X (Twitter cũ) chính thức của Dragon Ball kèm theo chữ ký của Bird Studio và Capsule Corporation Tokyo, trong đó có viết: “Chúng tôi vô cùng tiếc thương khi ông ấy vẫn còn một số tác phẩm đang trong quá trình sản xuất bằng sự nhiệt tình cháy bỏng. Hơn nữa, ông ấy vẫn còn đạt được nhiều thành tựu hơn nữa.”</p <p>Đám tang của Akira Toriyama chỉ có gia đình và một số người thân đến dự. Có một số tuyên bố được đưa ra, yêu cầu người hâm mộ không được phỏng vấn gia đình và quà tặng hay các chuyến thăm viếng và những thứ tương tự đều không được chấp nhận.</p",
    img1: "https://hobiverse.com.vn/cdn/shop/articles/akira-toriyama_thumbnail_hobi_3ddb94b186184071a8b32732f70019bb.jpg?v=1716179642",
    desc2:
      "<h1> <strong style='font-size: larger;'>Thành tựu của tác giả Akira Toriyama?</strong> <p> Toriyama sinh ra ở tỉnh Aichi. Tác phẩm đầu tay của ông là Wonder Land, được đăng trên các trang tạp chí Weekly Shonen Jump của Shueisha vào năm 1978. Tác phẩm xuất bản dài kỳ đầu tiên của Toriyama là Dr. Slump, ra mắt vào năm 1980 và vào ngay vào năm tiếp theo, ông đã nhận được Giải Manga Shogakukan lần thứ 27.</p><p>Bạn có thể nhìn thấy tên của Akira Toriyama trong các tựa game như Dragon Quest, Chrono Trigger và Blue Dragon. Ông đã tham gia thiết kế nhân vật để đảm bảo hình mẫu và trải nghiệm cho những người đã ủng hộ tác phẩm của mình.</p>",
    img2: "https://cdn.shopify.com/s/files/1/0878/6457/4255/files/akira-toriyama__1__d4d76cad80774ab7bbdb26fe1fb36e62.jpg?v=1716179634",
    desc3:
      "<h1> <strong style='font-size: larger;'>Mọi người bày tỏ tiếc thương trước sự ra đi của ông Toriyama</strong> </h1>  <p>Sau tin Toriyama qua đời, trang web Shonen Jump đã đăng tải các thông điệp từ nhiều bộ phận biên tập khác nhau của Shueisha và một số họa sĩ truyện tranh trực thuộc. Masakazu Katsura (người thiết kế nhân vật và anh hùng cho Zetman , Tiger và Bunny Season 2) chia sẻ những dòng hồi tưởng đầy cảm xúc về tình bạn kéo dài 40 năm của họ. Ông cũng kể lại việc Akira Toriyama đã gửi cho ông một bức thư nói về sự lo lắng trước cuộc phẫu thuật của mình vào mùa hè năm ngoái.</p> <p>Masashi Kishimoto - tác giả Naruto cũng chia sẻ đôi điều về tác động của Toriyama đối với anh. Anh nói rằng Dragon Ball đã trở thành một phần quan trọng trong cuộc đời mình khi trưởng thành, đồng thời Kishimoto cũng gửi lời cảm ơn Toriyama vì những tác phẩm mà tác giả Dragon Ball đã tạo ra trong suốt 45 năm qua.</p> <p>Tác giả Eiichiro Oda của One Piece cũng khen ngợi công việc và đóng góp của Toriyama, đồng thời còn cho biết rằng anh đã ngưỡng mộ người tạo ra Dragon Ball từ khi còn nhỏ. Anh ấy kết thúc lời nhắn của mình bằng cách viết: “Hy vọng rằng thiên đường là nơi vui vẻ như bác đã tưởng tượng”.</p>",
    img3: "https://cdn.shopify.com/s/files/1/0878/6457/4255/files/akira-toriyama__2__1f7f805931da4c2fb3dd8f46baf5df48.jpg?v=1716179637",
    desc4: "",
    img4: "https://i1-giaitri.vnecdn.net/2024/03/08/1-1709872678-7199-1709872846.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=DAWuBEd9zCpTSPdCFA9JQQ",
    desc5: "",
    img5: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2024/3/8/anh-chup-man-hinh-2024-03-08-123525-17098761390711491936460.png",
  },
  2: {
    name: "Manhwa là gì? Manhwa có gì khác biệt so với Manhua, Manga",
    desc: "Manhwa là gì? Đây là một thể loại truyện có nguồn gốc từ Hàn Quốc và rất được đông đảo bạn trẻ yêu thích. Trong bài viết này, chúng tôi sẽ chia sẻ rõ hơn đến bạn về đặc điểm và phân biệt Manhwa truyện Hàn Quốc như thế nào một cách chi tiết và đầy đủ.",
    desc1:
      "<h1> <strong style='font-size: larger;'>Manhwa là gì</strong> </h1>  Manhwa là một thể loại truyện tranh có nguồn gốc từ Hàn Quốc và chịu sự ảnh hưởng từ Manga Nhật. Nhờ điều này, mọi nhân vật, bối cảnh và văn hóa trong truyện đều mang đậm dấu ấn của đất nước Kim Chi. Trước đây, nét vẽ và hiệu ứng của Manhwa truyện Hàn Quốc thường không có nét riêng do tác động từ Manga Nhật Bản. Tuy nhiên, khi Webtoon - nền tảng truyện tranh trực tuyến Hàn Quốc - ra đời, thể loại này đã trở nên phong phú hơn. Thể loại này bắt đầu thể hiện phong cách vẽ độc đáo, tạo nên một dấu ấn mới và đặc sắc trong cách xây dựng câu chuyện. <p>Trước đây, nét vẽ và hiệu ứng của Manhwa truyện Hàn Quốc thường không có nét riêng do tác động từ Manga Nhật Bản. Tuy nhiên, khi Webtoon - nền tảng truyện tranh trực tuyến Hàn Quốc - ra đời, thể loại này đã trở nên phong phú hơn. Thể loại này bắt đầu thể hiện phong cách vẽ độc đáo, tạo nên một dấu ấn mới và đặc sắc trong cách xây dựng câu chuyện.</p>",
    img1: "https://cellphones.com.vn/sforum/wp-content/uploads/2024/04/manhwa-la-gi-1.jpg",
    desc2:
      "<h1> <strong style='font-size: larger;'>Những lý do khiến cho mọi người yêu thích Manhwa là gì?</strong> <p> Truyện tranh nói chung và truyện Manhwa nói riêng rất được nhiều đọc giả yêu thích. Điều này đến từ rất nhiều nguyên nhân bao gồm cả nội dung và hình thức truyện.</p><p>Lý do trước hết đem đến cho Manhwa lượng Fan đông đảo đó là nét vẽ phóng khoáng, màu sắc đa dạng. Tuy nhiên, bộ truyện này lại mất điểm ở phần hiệu ứng hành động chưa sáng tạo.</p><p>Về mặt nội dung, truyện Manhwa khá giống với các bộ phim truyền hình Hàn Quốc gần đây mà chúng ta hay xem. Nó đều đặt sự kịch tính lên trên hết và trở thành yếu tố không thể thiếu trong truyện. Bên cạnh đó, cốt truyện Manhwa rất lãng mạn, thường là tình yêu thanh xuân vườn trường hoặc công sở,...</p><p>Đặc biệt, có một cốt truyện thu hút nhiều người đọc thời gian gần đây là Boy Love (BL). Dù là một nội dung mới khai thác, ít người biết nhưng nó nổi lên rất nhanh như một hiện tượng. Tiêu biểu nhất phải kể đến bộ Killing Stalking.</p><p>Thời gian tới, chắc chắn Manhwa sẽ phát triển mạnh mẽ hơn nữa để đáp ứng nhu cầu ngày càng tăng. Nhất là khi thời điểm công nghệ thông tin bùng nổ, số lượng truyện tranh giấy và truyện online tăng lên. Mong rằng, các tác giả sẽ tìm ra được phong cách, nét vẽ sáng tạo và chất lượng hơn.</p>",
    img2: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/166686/Originals/manhwa-la-gi-2.jpg",
    desc3:
      "<h1> <strong style='font-size: larger;'>Phân biệt thể loại Manhwa, Manga và Manhua</strong> </h1>  <p>Có nhiều bạn vẫn chưa biết cách phân biệt Manhwa, Manga và Manhua, nên chúng mình sẽ chia sẻ cho bạn một số cách nhận biết đơn giản. Đặc điểm nổi bật của Manga là việc truyện tranh được vẽ hoàn toàn bằng màu đen trắng, chỉ có trang bìa thường được sử dụng màu sắc. Mặc dù đã có một số ấn bản kỹ thuật số có màu, nhưng phần lớn vẫn duy trì phong cách đen trắng.</p> <p>Trước đây, kỹ thuật vẽ Manga thường bị ảnh hưởng nhiều bởi phong cách của họa sĩ Tezuka Osamu, với đôi mắt to, miệng nhỏ và biểu cảm dễ thương. Tuy nhiên, hiện nay, điều này đã được cải thiện đáng kể, khiến cho nhân vật trong Manga trở nên sống động và hấp dẫn hơn.</p> <p>Cả truyện tranh Manhwa và Manhua thường được phát hành dưới dạng kỹ thuật số và có màu sắc rực rỡ. Nhân vật trong cả hai thể loại này thường được vẽ độc đáo và gần gũi hơn với người thật. Tuy nhiên, đôi khi cũng gây ra sự rối mắt cho người đọc vì những bộ trang phục quá lòe loẹt và cách phối màu không phù hợp.</p>",
    img3: "https://cellphones.com.vn/sforum/wp-content/uploads/2024/04/manhwa-la-gi-3.jpg",
    desc4:
      "<h1> <strong style='font-size: larger;'>Bạn phù hợp với thể loại nào?</strong> </h1>  <p>Đối tượng đọc truyện manga rất đa dạng, nó phù hợp với mọi lứa tuổi khác nhau. Có thể coi đây là nền móng cho sự phát triển của thể loại anime về sau. Ở Nhật, người ta có thể thay thế từ Manga thành Anime và ngược lại.</p>",
    img4: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/166686/Originals/manhwa-la-gi-11.jpg",
    desc5:
      "<h1> <strong style='font-size: larger;'>Lời kết</strong> </h1>  Manhwa là gì? Manga và Manhua là gì? Các nội dung trên đều được chúng tôi giải đáp ở trên. Hy vọng nó sẽ giúp cho bạn phân biệt rõ hơn về ba thể loại truyện này. Đồng thời, có cơ sở để tìm đọc những bộ truyện Manhwa, Manga và Manhua hấp dẫn!",
    img5: "https://cellphones.com.vn/sforum/wp-content/uploads/2024/04/manhwa-la-gi-4.jpg",
  },
  3: {
    name: "Uzumaki Boruto có mạnh hơn Naruto không?",
    desc: "Uzumaki Boruto đã dần đạt tới đỉnh cao sức mạnh và có thể vượt qua người cha Naruto nổi tiếng. Anh ta được đánh giá là có sức mạnh hiện tại đang mạnh nhất trong số những ninja cùng tuổi.</p",
    img1: "https://gamek.mediacdn.vn/133514250583805952/2024/4/19/base64-1713502314734803686098.png",
    desc2:
      "<p>Uzumaki Naruto là một trong những nhân vật đáng nhớ nhất trong thế giới anime, và trong bộ truyện “Naruto”, anh ấy không chỉ nổi tiếng mà còn định nghĩa một cách thực tế ý nghĩa của việc trở thành một biểu tượng cho cả một thế hệ. Anh ấy đã truyền cảm hứng cho hàng triệu người trên khắp thế giới, không chỉ bằng sự quyết tâm mà còn cả sức mạnh đáng kinh ngạc của mình.</p><p>Nói về sức mạnh, Naruto chắc chắn nổi bật là một trong những người mạnh nhất trong truyện. Tuy nhiên, qua nhiều năm, các nhân vật khác đã xuất hiện thêm. Một trong số đó là Uzumaki Boruto, con trai của Naruto, người hiện đang ở trong phần “Two Blue Vortex” dường như là bất khả chiến bại. Nhưng làm thế nào mà Boruto có thể so sánh với cha mình?</p>",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCLDdzuyMISLkSRyjeq3Qg_pzLhxxRAvdKnT0yGUdtA&s",
    desc3:
      "<h1> <strong style='font-size: larger;'>Sức mạnh của Naruto thời kì đỉnh cao</strong> </h1>  <p>Ở đỉnh cao khả năng của mình, Naruto đã có được những sức mạnh ấn tượng trong suốt bộ truyện. Và vĩ thú Kurama là nguồn gốc chính của những sức mạnh này. Lúc đầu, Naruto không thể kiểm soát Kurama, nhưng theo thời gian, mối quan hệ này thay đổi, cũng như mức độ sức mạnh của cậu dần tăng lên.</p>",
    img3: "https://gamek.mediacdn.vn/133514250583805952/2024/4/19/photo-1713502167781-17135021678972060254587.png",
    desc4:
      "<p>Naruto khám phá sự biến đổi của tự nhiên, phát triển nhẫn thuật của riêng mình và học Chế độ Tiên nhân, một sự bổ sung tuyệt vời cho kho vũ khí của cậu. Trong Đại chiến Ninja lần thứ tư, ngay cả khi không sử dụng sức mạnh của Kurama, Naruto đã là một ninja xuất chúng. Nhưng sau khi có được tình bạn của Kurama, họ trở thành đối tác và Naruto có được nguồn dự trữ charka không giới hạn.</p> <p>Naruto hoàn thiện việc sử dụng sức mạnh của Kurama trong chiến tranh. Hơn nữa, anh còn kết hợp những sức mạnh này với trạng thái Tiên nhân, đạt đến trạng thái nâng cao cho phép anh đối mặt với những đối thủ mạnh như Obito khi là Jinchuuriki của Thập Vĩ. Tuy nhiên, việc đối mặt với Madara yêu cầu Naruto phải tiếp cận một cấp độ sức mạnh mới: Chế độ hiền nhân Lục Đạo. Với một nửa charka của Hiền nhân, Naruto có khả năng áp đảo những đối thủ đáng gờm như Madara và Kaguya.</p> <p>Những năm tiếp theo, sức mạnh của Naruto càng tăng cao hơn nữa, đặc biệt là sau khi nhận được nửa còn lại của Kurama. Điều này, cùng với sức mạnh của Chế độ Baryon, đã nâng Naruto lên một tầm cao chưa từng thấy trước đây, khiến cậu trở thành nhân vật mạnh nhất trong “Boruto”. Nhưng khả năng này chỉ mang tính tạm thời và dẫn tới việc mất đi Kurama, khiến Naruto suy yếu về lâu dài.</p>",
    img4: "https://genk.mediacdn.vn/2020/1/2/photo-1-1577935737189597218219.jpg",
    desc5:
      "<h1> <strong style='font-size: larger;'>Boruto Uzumaki ở thời kỳ đỉnh cao</strong> </h1> <p>Không giống như cha mình, Boruto ngay từ khi còn nhỏ, học ở học viện ninja đã thể hiện mình là một thần đồng. Được huấn luyện bởi Sasuke, Boruto đã đạt được những chiến công vĩ đại với tư cách là một ninja. Phần lớn sức mạnh của anh ta đến từ con dấu Karma, di sản của Otsutsuki Momoshiki, cho phép anh ta tiếp cận với sức mạnh của một Otsutsuki.</p> <p>Theo thời gian, Boruto đã học được những kỹ năng ấn tượng, trong đó có Uzuhiko, và sức mạnh của anh ta lớn đến mức có thể đối mặt với các ninja cấp Otsutsuki và thống trị các đối thủ như Code mà không cần dựa vào Karma.</p> <p>So sánh Boruto với Naruto, Boruto nhanh chóng trở thành một trong những người mạnh nhất trong loạt phim. Nhưng đứng cạnh Naruto ở trạng thái Baryon, cậu ấy vẫn yếu hơn. Ở Chế độ Baryon, Naruto thực tế là bất khả chiến bại. Tuy nhiên, bên ngoài Chế độ Baryon, cuộc chiến giữa họ có thể rất đồng đều và Boruto thậm chí có thể có cơ hội chiến thắng.</p> <p>Sự thật là cả hai đều vô cùng mạnh mẽ và Naruto chắc chắn sẽ tự hào khi chứng kiến sự trưởng thành của Boruto. Việc thế hệ mới vượt qua thế hệ trước là điều đương nhiên nên việc Boruto vượt qua cha mình không phải là điều khiến người hâm mộ ngạc nhiên.</p>",
    img5: "https://gamek.mediacdn.vn/133514250583805952/2024/4/19/photo-1713502157503-1713502158032163216124.png",
  },
};
