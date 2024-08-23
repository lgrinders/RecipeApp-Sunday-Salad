export default function RecipeItem({ item }) {
  console.log(item);

  return (
    <>
      <div className="flex w-[450px] flex-col items-center gap-5 pb-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            quam. Totam dolorem nesciunt quas qui voluptatem velit eum atque
            voluptatum. Illo nobis incidunt laborum consectetur quasi ipsa non a
            aspernatur!
          </p>
        </div>
        <div className="">
          <img
            src={item.image_url}
            alt=""
            className="h-[450px] w-[500px] object-cover object-center"
          />
        </div>
        <div className="w-full border-b border-iconGray pt-5"></div>
        <div className="w-full border-b border-iconGray"></div>
      </div>
    </>
  );
}
