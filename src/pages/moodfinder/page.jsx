import NavMood from "../../components/page/moodfinder/NavMood";

function MoodPage() {
    return (
        <div>
            <NavMood />
            <div className="p-8">
                <h2 className="text-2xl font-semibold">Mood Finder</h2>
                <p className="mt-4 text-zinc-600">This is the Mood Finder page.</p>
            </div>
        </div>
    )
}

export default MoodPage;
