import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

export default function CarouselBanner() {
  return (
    <Carousel className=" w-100">
      {ITEMS.map((item, i) => (
        <Link key={i} to={item.link}>
          <img src={item.image} alt={item.description} className="h-full" />
        </Link>
      ))}
    </Carousel>
  );
}

const ITEMS = [
  {
    description: "banner 1",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4f0d2c3-dee8-468e-be66-7468c05b4b37/dfj31at-93bb7e14-43a0-465e-aa1c-f4975db28ee8.jpg/v1/fill/w_1500,h_500,q_75,strp/goku_banner_by_zettasloe_dfj31at-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvYTRmMGQyYzMtZGVlOC00NjhlLWJlNjYtNzQ2OGMwNWI0YjM3XC9kZmozMWF0LTkzYmI3ZTE0LTQzYTAtNDY1ZS1hYTFjLWY0OTc1ZGIyOGVlOC5qcGciLCJ3aWR0aCI6Ijw9MTUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RxPUU_nKhLXmmRJ6_mokOUIoTdrJBjSMHzlP_t1vS_A",
    link: "/menu/all",
  },
  {
    description: "banner 2",
    image:
      "https://cdn11.bigcommerce.com/s-k0hjo2yyrq/images/stencil/1280x1280/products/947/454/Black_Clover_Deluxe_Edition_Product_Banner__06871.1680074650.jpg?c=1",
    link: "/menu/all",
  },
  {
    description: "banner 3",
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodorder-842d1.appspot.com/o/images%2F5930370-ai%20(3).png?alt=media&token=cafe393f-a34d-48e0-9c23-b1122dd45bea",
    link: "/menu/all",
  },
];
