import NavbarBook from "../../components/page/bookshelf/NavBook";

function BookshelfPage() {
	return (
		<div>
			<NavbarBook />
			<div className="p-8">
				<h2 className="text-2xl font-semibold">Bookshelf</h2>
				<p className="mt-4 text-zinc-600">This is the Bookshelf page.</p>
			</div>
		</div>
	)
}

export default BookshelfPage;
