export function Sum({ numbers }) {
	return <h1>{numbers.reduce((tot, num) => tot + num, 0)}</h1>
}