import { CartItem } from "@/types/cart";
import { Check } from "lucide-react";
import Image from "next/image";
import { StarRating } from "../../../app/(website)/cart/_components/star-rating";
interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex flex-col rounded-lg p-4 border border-gray-200">
      <div className="flex gap-4">
        <div className="relative w-32 h-24 md:w-40 md:h-32">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="rounded-lg object-cover"
          />
          <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full">
            {/* <Heart className="w-4 h-4 text-gray-600" /> */}
          </button>
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-start justify-between">
            <div>
              <StarRating rating={item.rating} />
              <h3 className=" font-medium  mt-1">{item.name}</h3>
              {item.isHot && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-red-500 flex items-center gap-1">
                    <Image
                      className="w-3 h-3"
                      src="/assets/img/Vector.png"
                      alt="hot"
                      width={16}
                      height={16}
                    />{" "}
                    Hot
                  </span>
                  <span className="text-gray-400">{item.views} Views</span>
                </div>
              )}
            </div>
            <div className="flex items-center px-2 py-1 rounded">
              <span className="text-xs border rounded-xl flex items-center gap-2 px-2 py-1">
                <Check className="w-3 h-3" />
                In stock
              </span>
            </div>
          </div>
          <div className="flex items-end justify-between mt-4">
            <div className="space-y-1 flex items-center gap-2">
              <div className=" font-semibold ">
                ${item.price.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400 line-through">
                ${item.originalPrice.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            {/* quantity buttons */}
            <div className="flex items-center gap-3  rounded-2xl shadow-inner">
              <button
                onClick={() =>
                  onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
                }
                className="w-8 h-8 text-2xl flex items-center justify-center"
              >
                -
              </button>
              <span className=" w-4 text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 text-2xl flex items-center justify-center"
              >
                +
              </button>
            </div>
            {/* cart item remove button */}
            <button
              onClick={() => onRemove(item.id)}
              className="text-blue-500 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}