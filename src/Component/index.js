import Categories from "./CategoriesParent"
import PostCategory from "./PostCategory";
function Index({ category , post  }) {
	return (
		<>
			<Categories category={category} />
			{/* <PostCategory post={post} /> */}
		</>
	)
}
export default Index;
