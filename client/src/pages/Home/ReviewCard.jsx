import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Kishorilal lodh",
    avatar:
      "https://media.istockphoto.com/id/2182519770/photo/positive-handsome-young-middle-eastern-entrepreneur-man-in-casual-cloth.jpg?s=612x612&w=0&k=20&c=tlW-laWifqVAccs5uDUaBhuSfjwH9pw2apnq_CM-NxM=",
    review:
      "Web development is the art and science of creating websites and web applications that power our modern digital world. It combines technical expertise with creative design to build interactive experiences that connect businesses with audiences across the globe. ",
    rating: 5,
  },
  {
    id: 2,
    name: "Atendra kushwaha",
    avatar:
      "https://cdn.pixabay.com/photo/2021/11/09/15/54/mens-fashion-6781827_1280.jpg",
    review:
      "The field continues to evolve rapidly, with emerging trends like progressive web apps, serverless architecture, and AI-integrated experiences pushing the boundaries of what's possible on the web. As the digital landscape expands, web development.",
    rating: 4,
  },
  {
    id: 3,
    name: "Swati chourey",
    avatar:
      "https://media.istockphoto.com/id/1387061371/photo/portrait-of-woman-on-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=6lQ_dJb8rTpWUEvhYCMoISBTa_az2njroRMGrERCO1k=",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis optio cupiditate neque, earum necessitatibus excepturi, corporis tenetur laborum dolorem, ?.",
    rating: 5,
  },
  {
    id: 4,
    name: "Subham Rai",
    avatar:
      "https://cdn.pixabay.com/photo/2019/11/01/06/11/profile-4593404_1280.jpg",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eaque..",
    rating: 3,
  },
  {
    id: 5,
    name: "Rohit Sharma",
    avatar:
      "https://media.istockphoto.com/id/1372417181/photo/portrait-of-handsome-chinese-young-man-in-dark-blue-leisure-suit-standing-and-posing-against.jpg?s=612x612&w=0&k=20&c=huVHVAjUaDyOYlcCROzHw0b3SxCfb9GNFCLkk2K-YEw=",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius voluptatum assumenda odit quod, aliquam esse,.",
    rating: 4,
  },
  {
    id: 6,
    name: "Omprakash Yadav",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    review:
      "This is another example testimonial to check multiple slides Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit velit, culpa explicabo fuga officiis..",
    rating: 5,
  },
];

function ReviewCard({ item }) {
  return (
    <div className="flex flex-col items-center justify-between h-80 rounded-xl bg-white p-6 shadow-lg">
      <p className="text-gray-600 text-center relative flex-1">{item.review}</p>
      <div className="flex items-center gap-3 mt-2">
        <img
          src={item.avatar}
          alt={item.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="text-left">
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <div className="flex text-yellow-500">
            {Array.from({ length: item.rating }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewCarousel() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
             reverseDirection: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id} className="max-w-xs rounded-xl">
              <ReviewCard item={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}