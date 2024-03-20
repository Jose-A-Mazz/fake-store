import LinkWrapper from "./LinkWrapper";

export default function SeeAllCategoriesItem() {
  const styles = {
    fontWeight: "bolder",
  };

  return (
    <LinkWrapper>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bolder" }}>See All Products</p>
      </div>
    </LinkWrapper>
  );
}
