const StarshipSearch = (props) => {


return (
<p> Search Term:
<input type='text' onChange={props.handleInputChange}/>
<button onClick={fetch}>Search</button>

</p>
)
}
export default StarshipSearch;