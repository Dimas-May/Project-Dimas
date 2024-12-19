import { IProduct } from "@/app/admin/dashboard/page";
import { setProduct } from "@/app/redux/features/productSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
}

const ProductRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  product,
}: PropsType) => {
  const dispatch = useAppDispatch();

  const onEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };

  const onDelete = () => {
    // will do later
  };

  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{product.name}</div>
      </td>
      <td>$ {product.price}</td>
      <td className="py-2"></td>
      <Image src={product.imgSrc} width={40} height={40} alt="product_image" />
    </tr>
  );
};

export default ProductRow;
