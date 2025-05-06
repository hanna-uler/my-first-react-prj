export default function SearchForm() {
    const handleSubmit = (evt) => {
        console.log(evt);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="topic" placeholder="Search articles..." />
            <button type="submit">Search</button>
        </form>
    )
    
}