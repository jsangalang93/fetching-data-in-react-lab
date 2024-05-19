const StarshipSearch = (props) => {


return (
<p> Search Term (first word only):
<input type='text' onChange={props.handleInputChange}/>
<button onClick={props.searchInq}>Search</button>

</p>
)
}
export default StarshipSearch;
