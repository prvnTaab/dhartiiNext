import Image from 'next/image';
import Link from 'next/link';

export const CategoryComponent: React.FC = (props : any) => {
  return (
    <div className="col-3 pt-4 cust_img-centre" style={{ paddingRight: 10 }}>
    <div className="text-center">
      <Link href="/product-category/women/ethnic-wear">
        <div className="shipping-block d-block position-relative mob_fc_a">
          <figure className="figure mb-0 overflow-hidden">
            <Image
              className="mx-auto img-fluid d-block transition mob_fc_img"
              src={props?.url ||"https://dhartii.in/wp-content/uploads/2024/02/home-women-icon-1.png"}
              alt={props?.imageName || "Womens Wear" }
              width={300} 
              height={300} 
            />
          </figure>
          <span className="cust_text-centre">{props?.title  || "Womens Wear"}</span>
        </div>
      </Link>
    </div>
  </div>
  )
}
