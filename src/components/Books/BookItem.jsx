import React from "react";
import CartSvg from "../UI/svg/CartSvg";
import FavoriteSvg from "../UI/svg/FavoriteSvg";
import starSvg from "../../assets/star.svg";

const BookItem = ({ book }) => {
  const { thumbnail, name, author, publishedYear, price, rating } = book || {};
  return (
    <div className="space-y-3">
      {/* thumbnail */}
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="max-w-[144px]" src={thumbnail} alt={name} />
      </div>
      {/* info */}
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{name}</h4>
        <p className="text-xs lg:text-sm">
          By : <span>{author}</span>
          <p className="text-xs lg:text-sm">Pub. Year : {publishedYear}</p>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${price}</h4>
          {/* stars */}
          <div className="flex items-center space-x-1">
            {[...Array(rating)].map((_, i) => (
              <img key={i} src={starSvg} alt={`${rating} star`} />
            ))}
            <span className="text-xs lg:text-sm">({rating} Star)</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
            <CartSvg />
            Add to Cart
          </button>
          <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5">
            <FavoriteSvg />
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
