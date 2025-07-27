export const listEnvironments = async() => {
    const res = await fetch("http://localhost:3000/api/environments", {
    })

    return res.json();
}