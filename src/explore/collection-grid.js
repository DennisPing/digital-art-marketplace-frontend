import CollectionItem from "./collection-item";

const CollectionGrid = ({ collections, loading }) => {
  return (
    <>
      {loading && <div>Loading...</div>}

      <div className="row gy-5">
        {collections.map((collection) => (
          <CollectionItem key={collection.contractAddress} collection={collection} />
        ))}
      </div>
    </>
  );
};

export default CollectionGrid;
