import { ref } from "vue"

export default function useFetch(url) {
    const state = ref("loading")
    const data = ref(null)

    fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((r) => {
            if (r.ok) {
                return r.json()
            }
            throw new Error('Impossible de charger les posts')
        })
        .then((r) => {
            data.value = r
            state.value = "idle"
        })
        .catch((e) => {
            state.value = "error";
            console.log(e)
        })

    return {
        data,
        state
    }
}