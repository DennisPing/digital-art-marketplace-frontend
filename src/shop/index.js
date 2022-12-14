import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import ShopGrid from "./shop-grid";

const ShopComponent = () => {
  const { name, page } = useParams();

  const collectionsState = useSelector((state) => state.collections);
  const collection = collectionsState.collections.filter((collection) => collection.encodedName === name)[0];

  return (
    <div className="py-3">
      <h1 className="pt-5 fw-bold">{collection.name}</h1>
      <ReactMarkdown className="pb-5">{collection.description}</ReactMarkdown>
      <ShopGrid collection={collection} page={page} />
    </div>
  );
};

export default ShopComponent;
