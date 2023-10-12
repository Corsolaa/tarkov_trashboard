// This calls the Tarkov API and retrieves the data from the query parameter.
export async function apiCall(query ) {
    let r = await fetch('https://api.tarkov.dev/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({query: `{${query}}`})
    })
    let obj = await r.json();
    return obj.data.ammo;
}